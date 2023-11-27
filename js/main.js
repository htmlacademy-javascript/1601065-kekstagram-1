const PICTURE_COUNT = 25;
const AVATAR = 6;
const COMMENT_COUNT = 20;
const LIKES_MIN = 15;
const LIKES_MAX = 200;

// const IDS = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
// ];

const URLS = [
  'photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg', 'photos/7.jpg',
  'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg', 'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg',
  'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg',
  'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg',
];

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


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

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

getPictures();
console.log(getPictures());
