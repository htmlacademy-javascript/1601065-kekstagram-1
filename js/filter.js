import { renderPictures } from './render-pictures.js';
import { debounce } from './util.js';

const PICTURES__COUNT = 10;
const RENDER_DELAY = 500;

const imgFilters = document.querySelector('.img-filters');

const removePictures = () => {
  document.querySelectorAll('.picture').forEach((element) => element.remove());
};

const sortRandom = () => Math.random() - 0.5;

const filterFunctions = {
  'filter-random': (pictures) => pictures.slice().sort(sortRandom).slice(0, PICTURES__COUNT),
  'filter-default': (pictures) => pictures,
  'filter-discussed': (pictures) => pictures.slice().sort((a, b) => b.comments.length - a.comments.length)
};

const setFiltersClick = (pics) => {
  imgFilters.addEventListener('click', debounce((evt) => {
    const currentFilter = evt.target;
    const activeFilter = imgFilters.querySelector('.img-filters__button--active');

    if (!currentFilter.id || currentFilter.id === activeFilter.id) {
      return;
    }

    const filterFn = filterFunctions[currentFilter.id];
    const filteredPics = filterFn(pics);

    removePictures();
    renderPictures(filteredPics);

    activeFilter.classList.remove('img-filters__button--active');
    currentFilter.classList.add('img-filters__button--active');
  }, RENDER_DELAY));
};

const initFilter = (pictures) => {
  imgFilters.classList.remove('img-filters--inactive');
  setFiltersClick(pictures);
};

export {initFilter};
