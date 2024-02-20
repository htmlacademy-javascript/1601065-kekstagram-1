const successTemplate = document.getElementById('success').content.querySelector('.success');
const error = document.getElementById('error').content;
const newTemplateError = error.querySelector('.error');
const cloneTemplateSuccess = successTemplate.cloneNode(true);
const successButtonMessage = cloneTemplateSuccess.querySelector('.success__button');
const cloneTemplateError = newTemplateError.cloneNode(true);
const buttonMessageError = cloneTemplateError.querySelector('.error__button');

const closeSuccessMessage = () => {
  document.removeEventListener('keydown', closeSuccessMessage);
  successButtonMessage.removeEventListener('click', closeSuccessMessage);
  cloneTemplateSuccess.remove();
};

const showSuccessMessage = () => {
  document.body.appendChild(cloneTemplateSuccess);
  document.addEventListener('keydown', closeSuccessMessage);
  successButtonMessage.addEventListener('click', closeSuccessMessage);
  document.addEventListener('click', (evt) => {

    if (evt.target && evt.target.classList.contains('success')){
      closeSuccessMessage();
    }
  });
};

const closeErrorMessage = () => {
  document.removeEventListener('keydown', closeErrorMessage);
  buttonMessageError.addEventListener('click', closeErrorMessage);
  cloneTemplateError.remove();
};

const showMessageError = () => {
  document.body.appendChild(cloneTemplateError);
  document.body.classList.add('error');
  document.addEventListener('keydown', closeErrorMessage);
  buttonMessageError.addEventListener('click', closeErrorMessage);
  document.addEventListener('click', (evt) => {

    if (evt.target && evt.target.classList.contains('error')) {
      closeErrorMessage();
    }
  });
};

export {showSuccessMessage, showMessageError};
