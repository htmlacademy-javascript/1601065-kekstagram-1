import { pictureContainer, renderPictures } from './render-pictures.js';
import { showBigPicture } from './show-big-picture.js';

const renderGalery = (pictures) => {
  pictureContainer.addEventListener('click', (evt) => {
    const photosElement = evt.target.closest('[data-photos-element-id]');

    if(!photosElement){
      return;
    }
    const picture = pictures.find(
      (item) => item.id === + photosElement.dataset.photosElementId
    );
    showBigPicture(picture);
  });
  renderPictures(pictures, pictureContainer);
};


export{renderGalery};

