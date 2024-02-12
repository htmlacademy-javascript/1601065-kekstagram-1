import {getPictures} from './data.js';
import {renderGalery} from './render-gallery.js';
import {setupValidation} from './validation.js';
import {setPhotoListener} from './form.js';

const pictureData = getPictures();

renderGalery(pictureData);

setPhotoListener();
setupValidation();
