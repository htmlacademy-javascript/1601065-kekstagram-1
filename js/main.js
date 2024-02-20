import {setupValidation} from './validation.js';
import {setPhotoListener, setUserFormSubmit} from './form.js';
import { initScale } from './size-picture.js';
import { initSlider } from './picture-filter.js';
import { renderPictures } from './render-pictures.js';
import { getData} from './api.js';
import { showAlert } from './util.js';
import {renderGallery} from './render-gallery.js';
import { showFilters } from './filter.js';

const PICTURE_COUNT = 25;

setPhotoListener();
setupValidation();
initScale();
initSlider();
setUserFormSubmit();
getData()
  .then((picture) => {
    renderPictures(picture.slice(0, PICTURE_COUNT));
    showFilters();
    renderGallery(picture);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
