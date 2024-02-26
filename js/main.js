import {setupValidation} from './validation.js';
import {setPhotoListener, setUserFormSubmit} from './form.js';
import { initScale } from './size-picture.js';
import { initSlider } from './picture-filter.js';
import { renderPictures } from './render-pictures.js';
import { getData} from './api.js';
import { showAlert } from './util.js';
import {renderGallery} from './render-gallery.js';
import { initFilter } from './filter.js';

const PICTURE_COUNT = 25;

setPhotoListener();
setupValidation();
initScale();
initSlider();
setUserFormSubmit();

getData()
  .then((pictures) => {
    renderPictures(pictures.slice(0, PICTURE_COUNT));
    initFilter(pictures);
    renderGallery(pictures);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
