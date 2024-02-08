import { onDocumentKeydown } from './show-big-picture.js';
const imgUpload = document.getElementById('upload-file');
const uploadCancel = document.getElementById('upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

imgUpload.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imgUploadPreview.src = URL.createObjectURL(imgUpload.files[0]);
  imgUploadPreview.style.display = 'block';
});


uploadCancel.addEventListener('click', () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

export {uploadCancel, imgUpload};

