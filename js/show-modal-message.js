const successTemplate = document.getElementById('success').content.querySelector('.success');
const error = document.getElementById('error').content;
const newTemplateError = error.querySelector('.error');
const cloneTemplateSuccess = successTemplate.cloneNode(true);
const successButtonMessage = cloneTemplateSuccess.querySelector('.success__button');
const cloneTemplateError = newTemplateError.cloneNode(true);
const successButtonMessageError = cloneTemplateError.querySelector('.error__button');

const successMessageClose = () => {
  cloneTemplateSuccess.remove();
};

const showSuccessMessage = () => {
  document.body.appendChild(cloneTemplateSuccess);
  document.addEventListener('keydown', successMessageClose, {once: true});
  successButtonMessage.addEventListener('click', successMessageClose, {once: true});
};

const successMessageErrorClose = () => {
  cloneTemplateError.remove();
};

const showMessageError = () => {
  document.body.appendChild(cloneTemplateError);
  document.addEventListener('keydown', successMessageErrorClose, {once: true});
  successButtonMessageError.addEventListener('click', successMessageErrorClose, {once: true});
}

export {showSuccessMessage, showMessageError};
