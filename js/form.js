import { isEscapeKey } from './util.js';
import { resetValidation } from './validation.js';
import { resetScale } from './size-picture.js';
import { resetEffect } from './picture-filter.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const imgUpload = document.getElementById('upload-file');
const uploadCancel = document.getElementById('upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadInput = document.querySelector('.img-upload__start input[type=file]');
const effectsPreview = document.querySelectorAll('.effects__preview');

const onDocumentKeydown = (evt) => {

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadModal();
  }
};
function openUploadModal () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  resetScale();
  resetEffect();
}

function closeUploadModal () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetValidation();
}

const downloadPicture = () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgUploadPreview.src = URL.createObjectURL(file);
    effectsPreview.forEach((listObj) => {
      listObj.style.backgroundImage = `url(${ URL.createObjectURL(file) })`;
    });
  }
};

const setPhotoListener = () => {
  imgUpload.addEventListener('change', () => {
    openUploadModal();
    downloadPicture();

  });

  uploadCancel.addEventListener('click', () => {
    closeUploadModal();
  });
};

export {setPhotoListener, openUploadModal, closeUploadModal};

