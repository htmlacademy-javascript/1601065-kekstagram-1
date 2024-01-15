import {getPictures} from './data.js';
import {renderPictures} from './render-pictures.js';
import './user-modal.js';
import './creating-modal.js';

const pictureData = getPictures();
renderPictures(pictureData);
