import { isEscapeKey } from './util.js';

const commentsLoader = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentTemplate = bigPicture.querySelector('.social__comment');

const onDocumentKeydown = (evt) => {

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButton.addEventListener('click', () => {
  closeUserModal();
});

const renderPictureDetails = (picture) => {
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
};

const renderComments = (comments) => {
  socialComments.innerHTML = '';

  const commentFragment = document.createDocumentFragment();

  comments.forEach(({ avatar, name, message }) => {
    const commentElement = commentTemplate.cloneNode(true);
    const img = commentElement.querySelector('img');
    img.src = avatar;
    const paragraph = commentElement.querySelector('p');
    paragraph.textContent = message;
    socialCaption.textContent = name;
    commentFragment.appendChild(commentElement);
  });

  socialComments.appendChild(commentFragment);
};

const showBigPicture = (data) => {
  openUserModal();
  commentsLoader.classList.add('hidden');
  renderPictureDetails(data);
  renderComments(data.comments);
};

export { showBigPicture, openUserModal, closeUserModal, onDocumentKeydown };
