import {getPictures} from './data.js';
import {renderPictures} from './render-pictures.js';
// import {openUserModal, closeUserModal} from './user-modal.js';
import {renderGalery} from './creating-modal.js';


const pictureData = getPictures();
// renderPictures(pictureData);
renderGalery(pictureData);
