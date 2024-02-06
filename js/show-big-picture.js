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
let commentsShow = 0;
let numberComments = 5;


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


// const renderAllComments = (comments) => {
//   const commentFragment = document.createDocumentFragment();

//   comments.forEach((comment) => {
//     const commentElement = renderComment(comment);

//     commentFragment.appendChild(commentElement);
//   });

//   socialComments.appendChild(commentFragment);
// };


const renderComments = (comments) => {
  socialCommentCount.innerHTML = '';

  if (comments.length >= numberComments) {
    socialCommentCount.textContent = `${numberComments} из ${ comments.length } комментариев`;
  } else {
    socialCommentCount.textContent = `${comments.length} из ${ comments.length } комментариев`;
  }

  commentsShow += NUMBER_UPLOADED_COMMENTS;

  if (commentsShow >= comments.length){
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  if (comments.length >= commentsShow){
    socialComments.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < commentsShow; i++){
      const commentElement = renderComment(comments[i]);
      fragment.append(commentElement);
    }
    socialComments.append(fragment);
  } else {
    socialComments.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < comments.length; i++){
      const commentElement = renderComment(comments[i]);
      fragment.append(commentElement);
    }

    socialComments.append(fragment);
  }


  commentsLoader.addEventListener('click', () => {
    numberComments += commentsShow;
debugger
console.log(renderComment(comments[commentsShow]))
    if (commentsShow, commentsShow < numberComments && commentsShow < comments.length, commentsShow++) {
      socialComments.innerHTML += renderComment(comments[commentsShow]);
      socialCommentCount.textContent = `${commentsShow} из ${ comments.length } комментариев`;
    }
  });
};


const showBigPicture = (data) => {
  openUserModal();
  renderPictureDetails(data);
  renderComments(data.comments);
};


export { showBigPicture, openUserModal, closeUserModal, onDocumentKeydown };
