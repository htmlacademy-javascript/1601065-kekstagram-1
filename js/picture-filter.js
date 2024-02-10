const imgUploadPreview = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderEffect = document.querySelector('.effect-level__slider');
const sliderEffectValue = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');


const effects = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
];

const effectDefault = effects[0];
let chosenEffect = effectDefault;

const isDefault = () => chosenEffect === effectDefault;

const updateSlider = () => {
  sliderEffect.classList.remove('hidden');
  sliderContainer.style.display = 'block';
  sliderEffect.noUiSlider.updateOptions ({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max
    },
    step: chosenEffect.step,
    start: chosenEffect.max
  });
  if (isDefault()) {
    sliderEffect.classList.add('hidden');
    sliderContainer.style.display = 'none';
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = effects.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imgUploadPreview.style.filter = 'none';
  imgUploadPreview.className = '';
  sliderEffectValue.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderEffect.noUiSlider.get();
  imgUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imgUploadPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  sliderEffectValue.value = sliderValue;
};

const resetEffect = () => {
  chosenEffect = effectDefault;
  updateSlider();
};

noUiSlider.create(sliderEffect, {
  range: {
    min: effectDefault.min,
    max:effectDefault.max
  },
  start: effectDefault.max,
  step: effectDefault.step,
  connect: 'lower'
});
updateSlider();

form.addEventListener('change', onFormChange);
sliderEffect.noUiSlider.on('update', onSliderUpdate);

export{resetEffect};
