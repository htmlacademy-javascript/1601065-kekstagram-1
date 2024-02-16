import { showAlert } from './util.js';
import { sendData } from './api.js';

const MAX_HASHTAG_COUNT = 5;
const TAG_ERROR_TEXT = 'Не правильно указали хештег';
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const imgForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine (imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {

  const tags = value
    .split(' ')
    .filter((tag) => tag.trim().length);

  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

const SubmitButtonText = {
  IDLE: 'ОПУБЛИКОВАТЬ',
  SENDING: 'Отправляю...'
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess) => {
  // const onFormSubmit = () => {
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch((err) => {
          showAlert(err.message);
        })
        .finally(unblockSubmitButton);
    }
  });
};
// };

const setupValidation = () => {
  pristine.addValidator(
    textHashtags,
    validateTags,
    TAG_ERROR_TEXT
  );
  setUserFormSubmit();
  // imgForm.addEventListener('submit', onFormSubmit);
};

const resetValidation = () => {
  pristine.reset();
};

export {setupValidation, resetValidation, setUserFormSubmit};
