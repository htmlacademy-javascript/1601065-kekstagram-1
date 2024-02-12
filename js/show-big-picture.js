import { isEscapeKey } from './util.js';

const NUMBER_UPLOADED_COMMENTS = 5;

const commentsLoader = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentTemplate = bigPicture.querySelector('.social__comment');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
let commentsShown = 0;

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
}


closeButton.addEventListener('click', () => {
  socialCommentCount.innerHTML = '';
  socialComments.innerHTML = '';
  commentsShown = 0;
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
  const paragraph = commentElement.querySelector('p');
  paragraph.textContent = comment.message;
  socialCaption.textContent = comment.name;

  return commentElement;
};

const renderComments = (comments) => {
  debugger
  socialCommentCount.innerHTML = '';
  socialComments.innerHTML = '';

  if (comments.length >= NUMBER_UPLOADED_COMMENTS) {
    socialCommentCount.textContent = `${NUMBER_UPLOADED_COMMENTS} из ${ comments.length } комментариев`;
  } else {
    socialCommentCount.textContent = `${comments.length} из ${ comments.length } комментариев`;
  }

  if (NUMBER_UPLOADED_COMMENTS >= comments.length){
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  if (comments.length >= NUMBER_UPLOADED_COMMENTS){
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < NUMBER_UPLOADED_COMMENTS; i++){
      const commentElement = renderComment(comments[i]);
      fragment.append(commentElement);
    }
    socialComments.append(fragment);
  } else {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < comments.length; i++){
      const commentElement = renderComment(comments[i]);
      fragment.append(commentElement);
    }

    socialComments.append(fragment);
  }

  commentsLoader.addEventListener('click', () => {
    debugger
    commentsShown += NUMBER_UPLOADED_COMMENTS;

    if (commentsShown <= comments.length) {
      const fragment = document.createDocumentFragment();

      for (let i = 1; i <= NUMBER_UPLOADED_COMMENTS; i++){
        const commentElement = renderComment(comments[i]);
        fragment.append(commentElement);
        socialCommentCount.innerHTML = '';
        socialCommentCount.textContent = `${commentsShown + i} из ${ comments.length } комментариев`;

        if (Math.min(commentsShown + i) >= comments.length) {
          commentsLoader.classList.add('hidden');
          return socialComments.append(fragment);
        }
      }
      socialComments.append(fragment);
    }
  });
};

const showBigPicture = (data) => {
  console.log(data)
  console.log(data.comments)
  openUserModal();
  renderPictureDetails(data);
  renderComments(data.comments);
};


export { showBigPicture, openUserModal, closeUserModal, onDocumentKeydown };
