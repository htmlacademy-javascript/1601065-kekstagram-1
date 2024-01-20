export const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


export const renderPictures = (picture) => {
  const pictureFragment = document.createDocumentFragment();

  picture.forEach(({url, comments, likes, id, description}) => {
    const photosElement = pictureTemplate.cloneNode(true);
    photosElement.querySelector('.picture__img').src = url;
    photosElement.querySelector('.picture__img').alt = description;
    photosElement.querySelector('.picture__comments').textContent = comments.length;
    photosElement.querySelector('.picture__likes').textContent = likes;
    photosElement.dataset.photosElementId = id;
    pictureFragment.appendChild(photosElement);
  });

  pictureContainer.appendChild(pictureFragment);
};

