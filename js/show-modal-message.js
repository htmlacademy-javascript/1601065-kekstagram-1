const successTemplate = document.getElementById('success').content.querySelector('.success');
const error = document.getElementById('error').content;
const newTemplateError = error.querySelector('.error');

const showSuccessMessage = () => {
  const cloneTemplateSuccess = successTemplate.cloneNode(true);
  const successButton = cloneTemplateSuccess.querySelector('.success__button');
  document.body.appendChild(cloneTemplateSuccess);
  successButton.addEventListener('click', () => {
    cloneTemplateSuccess.remove();
  });
};

function shippedMessageError () {
  const cloneTemplateError = newTemplateError.cloneNode(true);
  document.body.appendChild(cloneTemplateError);
}

export {showSuccessMessage, shippedMessageError};
