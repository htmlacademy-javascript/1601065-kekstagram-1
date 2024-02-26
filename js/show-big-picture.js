import { isEscapeKey } from './util.js';

const UPLOADED_COMMENTS_AMOUNT = 5;

const commentsLoader = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');


let commentsShown = UPLOADED_COMMENTS_AMOUNT;
let pictureComments = [];

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  commentsShown = UPLOADED_COMMENTS_AMOUNT;
}

closeButton.addEventListener('click', () => {
  socialCommentCount.innerHTML = '';
  socialComments.innerHTML = '';
  commentsShown = UPLOADED_COMMENTS_AMOUNT;
  closeUserModal();
});

const renderPictureDetails = (picture) => {
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
};

const renderComment = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const img = commentElement.querySelector('img');
  img.src = comment.avatar;
  img.alt = comment.name;
  const paragraph = commentElement.querySelector('p');
  paragraph.textContent = comment.message;

  return commentElement;
};

const renderComments = (comments) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < comments.length; i++){
    const commentElement = renderComment(comments[i]);
    fragment.append(commentElement);
  }

  socialComments.append(fragment);
};

const numberComments = () => {
  commentsShown = Math.min(commentsShown, pictureComments.length);
  socialCommentCount.textContent = `${commentsShown} из ${pictureComments.length} комментариев`;
};


function onCommentsLoaderClick () {
  commentsShown += UPLOADED_COMMENTS_AMOUNT;
  numberComments();

  if (commentsShown === pictureComments.length){
    commentsLoader.classList.add('hidden');
  }

  renderComments(pictureComments.slice(0, commentsShown));
}

const showBigPicture = (data) => {
  openUserModal();
  renderPictureDetails(data);
  pictureComments = data.comments;

  if (commentsShown >= data.comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = data.comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  renderComments(data.comments.slice(0, commentsShown));
  numberComments();
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

export { showBigPicture };
