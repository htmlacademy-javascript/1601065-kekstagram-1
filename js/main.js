import {getPictures} from './data.js';
import {renderGalery} from './render-gallery.js';
import './pristine.js';

const pictureData = getPictures();

renderGalery(pictureData);
