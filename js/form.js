import { isEscapeKey } from './util.js';
import { resetValidation, validateForm } from './validation.js';
import { resetScale } from './size-picture.js';
import { resetEffect } from './picture-filter.js';
import { sendData } from './api.js';
import { showSuccessMessage, showMessageError } from './show-modal-message.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const SubmitButtonText = {
  IDLE: 'ОПУБЛИКОВАТЬ',
  SENDING: 'Отправляю...'
};

const imgUpload = document.getElementById('upload-file');
const uploadCancel = document.getElementById('upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadInput = document.querySelector('.img-upload__start input[type=file]');
const effectsPreview = document.querySelectorAll('.effects__preview');
const submitButton = document.querySelector('.img-upload__submit');
const imgForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const isTextFaildFocused = () =>
  document.activeElement === textHashtags ||
  document.activeElement === textDescription;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFaildFocused()) {
    evt.preventDefault();
    closeUploadModal();
  }
};
const openUploadModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  resetScale();
  resetEffect();
};

function closeUploadModal() {

  if (document.body.classList.contains('error')){
    document.body.classList.remove('error');
    return;
  }
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetValidation();
  imgUpload.value = '';
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

  uploadCancel.addEventListener('click', (evt) => {
    closeUploadModal(evt);
  });
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const onSendSuccess = () => {
  closeUploadModal();
  showSuccessMessage();
};

const onSendFail = () => {
  showMessageError();
};

const setUserFormSubmit = () => {

  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSendSuccess)
        .catch(onSendFail)
        .finally(unblockSubmitButton);
    }
  });
};

export {setPhotoListener, setUserFormSubmit, onDocumentKeydown};

