import { pictureContainer } from './render-pictures.js';
import { isEscapeKey, isEnterKey } from './util.js';

const openPicture = document.querySelector('.big-picture');
const closePicture = document.querySelector('.big-picture__cancel');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  openPicture.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}


function closeUserModal () {
  openPicture.classList.add('hidden');


  document.removeEventListener('keydown', onDocumentKeydown);
}

pictureContainer.addEventListener('click', () => {
  openUserModal();
});

pictureContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

closePicture.addEventListener('click', () => {
  closeUserModal();
});

closePicture.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});

export {openPicture};

