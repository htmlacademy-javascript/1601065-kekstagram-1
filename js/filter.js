import { renderPictures } from './render-pictures.js';

const PICTURES__COUNT = 10;

const imgFilters = document.querySelector('.img-filters');
const filterRandom = document.getElementById('filter-random');
const filterDefault = document.getElementById('filter-default');
const filterDiscussed = document.getElementById('filter-discussed');

let picture = [];

const showFilterRandom = () => {
  let result = [];
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  while (result.length != PICTURES__COUNT) {
    const index = getRandomInt(picture.length);
    result.push(picture[index]);
    result = result.filter((v, i, arr) => arr.indexOf(v) === i);
  }

  return renderPictures(result);
};

const showFilterDefault = () => renderPictures(picture);

const sortByComment = (a, b) => b.comments.length - a.comments.length;

const showFilterDiscussed = () => {
  const sortPicture = picture.sort(sortByComment);
  return renderPictures(sortPicture);
};

const removePictures = () => {
  imgFilters.removeEventListener('click', showFilterActive);
  document.querySelectorAll('.picture').forEach((element) => element.remove());

};


const setFiltersClick = () => {
  imgFilters.addEventListener('click', (evt) => {
    const clickButton = evt.target;

    if (clickButton === imgFilters) {
      return;
    }

    if (clickButton === filterRandom){
      removePictures();
      showFilterRandom();
    }

    if (clickButton === filterDefault){
      removePictures();
      showFilterDefault();
    }

    if (clickButton === filterDiscussed){
      removePictures();
      showFilterDiscussed();
    }

    imgFilters.querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');
    clickButton.classList.add('img-filters__button--active');
  });
};

const showFilterActive = (pictures) => {
  imgFilters.classList.remove('img-filters--inactive');
  picture = pictures;
  setFiltersClick();
};

export {showFilterActive, setFiltersClick};
