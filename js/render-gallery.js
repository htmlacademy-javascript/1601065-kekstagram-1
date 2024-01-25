import { renderPictures } from './render-pictures.js';
import { showBigPicture } from './show-big-picture.js';

const pictureContainer = document.querySelector('.pictures');

const renderGalery = (pictures) => {
  pictureContainer.addEventListener('click', (evt) => {
    const photosElement = evt.target.closest('[data-id]');

    if (!photosElement){
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +photosElement.dataset.id
    );

    showBigPicture(picture);
  });

  renderPictures(pictures);
};


export {renderGalery};

