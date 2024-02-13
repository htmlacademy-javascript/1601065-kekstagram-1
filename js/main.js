import {getPictures} from './data.js';
import {renderGallery} from './render-gallery.js';
import {setupValidation} from './validation.js';
import {setPhotoListener} from './form.js';
import { initScale } from './size-picture.js';
import { initSlider } from './picture-filter.js';

const pictureData = getPictures();

renderGallery(pictureData);

setPhotoListener();
setupValidation();
initScale();
initSlider();
