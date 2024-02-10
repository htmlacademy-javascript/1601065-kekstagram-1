import { isEscapeKey } from './util.js';
import { clouseUploadValidater } from './validation.js';
import { resetScale } from './size-picture.js';
import { resetEffect } from './picture-filter.js';

const imgUpload = document.getElementById('upload-file');
const uploadCancel = document.getElementById('upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

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
  document.addEventListener('keydown', onDocumentKeydown);
  clouseUploadValidater();
}

const setPhotoListener = () => {
  imgUpload.addEventListener('change', () => {
    openUploadModal();
    imgUploadPreview.src = URL.createObjectURL(imgUpload.files[0]);
    imgUploadPreview.style.display = 'block';
  });

  uploadCancel.addEventListener('click', () => {
    closeUploadModal();
  });
};

export {setPhotoListener};

