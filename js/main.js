import {setupValidation} from './validation.js';
import {setPhotoListener, setUserFormSubmit} from './form.js';
import { initScale } from './size-picture.js';
import { initSlider } from './picture-filter.js';
import { renderPictures } from './render-pictures.js';
import { getData} from './api.js';
import { showAlert, debounce } from './util.js';
import {renderGallery} from './render-gallery.js';
import { showFilterActive, setFiltersClick } from './filter.js';

const PICTURE_COUNT = 25;
const RERENDER_DELAY = 500;

setPhotoListener();
setupValidation();
initScale();
initSlider();
setUserFormSubmit();

getData()
  .then((picture) => {
    renderPictures(picture.slice(0, PICTURE_COUNT));
    showFilterActive(picture);
    renderGallery(picture);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
