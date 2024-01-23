import {getPictures} from './data.js';
import {renderGalery} from './render-gallery.js';


const pictureData = getPictures();

renderGalery(pictureData);
