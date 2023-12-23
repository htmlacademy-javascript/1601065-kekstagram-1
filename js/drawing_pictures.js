import {getPictures} from './data.js';

const similarWizardPictures = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPictures = getPictures();


const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(({url, comments, likes}) => {
  const photosElement = similarWizardPictures.cloneNode(true);
  photosElement.querySelector('.picture__img').src = url;
  photosElement.querySelector('.picture__comments').textContent = comments;
  photosElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(photosElement);
});

document.querySelector('.pictures').appendChild(similarListFragment);
