const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STEP = 25;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value = MAX_SCALE) => {
  imgUploadPreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value,10);
  const newValue = currentValue - SCALE_STEP;

  scaleImage(Math.max(newValue, MIN_SCALE));
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value,10);
  const newValue = currentValue + SCALE_STEP;

  scaleImage(Math.min(newValue, MAX_SCALE));
};

const resetScale = () => {
  scaleImage();
};

const initScale = () => {
  smallerButton.addEventListener ('click', onSmallerButtonClick);
  biggerButton.addEventListener ('click', onBiggerButtonClick);
};

export {resetScale, initScale};


