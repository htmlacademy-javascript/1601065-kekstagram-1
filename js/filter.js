import { renderPictures } from './render-pictures.js';

const imgFilters = document.querySelector('.img-filters');
const filterDefault = document.getElementById('filter-default');
const filterRandom = document.getElementById('filter-random');
const filterDiscussed = document.getElementById('filter-discussed');
const filtersFormButton = document.querySelector('.img-filters__form button');
const pictureContainer = document.querySelector('.pictures');

filterDefault.addEventListener('click', () => {

  if (filterDefault.classList.contains('img-filters__button--active')){
    filterDefault.classList.remove('img-filters__button--active');
  } else {
    filterDefault.classList.add('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    debugger

  }
});

filterDiscussed.addEventListener('click', () => {

  if (filterDiscussed.classList.contains('img-filters__button--active')){
    filterDiscussed.classList.remove('img-filters__button--active');
  } else {
    filterDiscussed.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    showFilterDiscussed();
  }
});

filterRandom.addEventListener('click', () => {

  if (filterRandom.classList.contains('img-filters__button--active')){
    filterRandom.classList.remove('img-filters__button--active');
  } else {
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    filterRandom.classList.add('img-filters__button--active');
  }
});


const showFilterDefault = () => {
  renderPictures(picture1.slice(0, 10));

};

const showFilterDiscussed = () => {

};

const showFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

export {showFilters};
