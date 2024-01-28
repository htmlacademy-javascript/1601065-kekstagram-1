import {getRandomArrayElement, generateCommentId, getRandomInteger} from './util.js';

const PICTURE_COUNT = 25;
const AVATAR = 6;
const COMMENT_COUNT = 20;
const LIKES_MIN = 15;
const LIKES_MAX = 200;


const DESCRIPTIONS = [
  'Витя', 'Маша', 'Катя', 'Мища', 'Рита', 'Света', 'Никита', 'Гоша', 'Матвей', '1Лёша', '1Лариса', 'Артем', 'Дима',
  'Жека', 'Настя', 'Юра', 'Таня', 'Оля', 'Ксюша', 'Илюша', 'Мирон', 'Давид', 'Гриша', 'Валя', 'Зина',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',

];

const NAMES = [
  'Татьяна Николаевна', 'Петр Иванович', 'Вероника Викторовна', 'Захар Евгеньевич',
];

const createMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENTS)).join('');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1, AVATAR) }.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from({length:getRandomInteger(0, COMMENT_COUNT)},
    createComment
  ),
});

const getPictures = () =>
  Array.from({length:PICTURE_COUNT}, (_, pictureIndex) => createPicture (pictureIndex + 1));


export { getPictures };
