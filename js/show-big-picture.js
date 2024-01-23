import { isEscapeKey } from './util.js';

const commentsLoader = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');


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

  const pictureFragment = document.createDocumentFragment();

  comments.forEach(({ avatar, alt, message, description }) => {

    const list = document.createElement('li');
    list.classList.add('social__comment');
    socialComments.appendChild(list);
    const img = document.createElement('img');
    img.classList.add('social__picture');
    list.appendChild(img);
    img.src = avatar;
    img.alt = alt;
    img.style.height = '35px';
    img.style.width = '35px';
    const paragraph = document.createElement('p');
    paragraph.classList.add('social__text');
    list.appendChild(paragraph);
    paragraph.textContent = message;
    socialCaption.textContent = description;

  });

  socialComments.appendChild(pictureFragment);

};


const showBigPicture = (data) => {

  openUserModal();
  commentsLoader.classList.add('hidden');
  renderPictureDetails(data);
  renderComments(data.comments);

};

export { showBigPicture, bigPicture, openUserModal, closeUserModal, onDocumentKeydown };
