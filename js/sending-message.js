import { onDocumentKeydown } from './show-big-picture.js';

const success = document.getElementById('success').content;
const newItemTemplateSusses = success.querySelector('.success');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const successButton = success.querySelector('.success__button');
const error = document.getElementById('error').content;
const newTemplateError = error.querySelector('.error');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');


const isFocusid = () =>
  document.activeElement === textHashtags ||
  document.activeElement === textDescription;

textHashtags.addEventListener('keydown', (evt) => {

  if (evt.key === 'Escape'){
    evt.stopPropagation();
  }
});

textDescription.addEventListener('keydown', (evt) => {

  if (evt.key === 'Escape'){
    evt.stopPropagation();
  }
});


function shippedMessageSuccess () {
  document.body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  const cloneTemplateSuccess = newItemTemplateSusses.cloneNode(true);
  document.body.appendChild(cloneTemplateSuccess);
  successButton.addEventListener('click', () => {
    cloneTemplateSuccess.remove();
  });
}

function shippedMessageError () {
  const cloneTemplateError = newTemplateError.cloneNode(true);
  document.body.appendChild(cloneTemplateError);
}

// successButton.addEventListener('click', () => {
//   success.remove();
// });

export {shippedMessageSuccess, shippedMessageError};
