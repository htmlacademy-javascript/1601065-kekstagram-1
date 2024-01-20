import { openPicture, onDocumentKeydown } from './user-modal.js';

const body = document.querySelector('body');
const commentsLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');


const renderPictureDetails = (url, likes, comments) => {
  openPicture.querySelector('.big-picture__img').src = url;
  openPicture.querySelector('.likes-count').textContent = likes;
  openPicture.querySelector('.comments-count').textContent = comments.length;
};

const renderComments = () => {

};


const showBigPicture = (data) => {
  // openPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classlist.add('hidden');
  commentCount.classlist.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments();
};

export {showBigPicture};
