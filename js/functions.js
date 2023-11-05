/* eslint-disable radix */

// Функция для проверки, является ли строка палиндромом.
// Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
//toLowerCase() - возвращает значение строки, преобразованное в нижний регистр. Не изменяет значение этой строки.
//.replace(/[^a-zа-яё]/g, '') - возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.
//Метод split()возврата нового массива.
//Метод reverse()на месте следит за порядком следования элементов массива. Первый элемент массива становится последним, а последний — первым.
//Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.

function palindrom(str) {
  str = str.toLowerCase().replace(/[^a-zа-яё]/g, '');
  if (str === str.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrom('топот'));
console.log(palindrom('ДовОд'));
console.log(palindrom('Кекс'));


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
// и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры,
// функция должна вернуть NaN:

// .parseInt() - принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.

function returnsNumbers(number){
  return number = parseInt(number.match(/\d+/));
}
console.log(returnsNumbers('2023 год'));
console.log(returnsNumbers('ECMAScript 2022'));
console.log(returnsNumbers('1 кефир, 0.5 батона'));
console.log(returnsNumbers('а я томат'));


// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами —
// и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в
// начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка»
// слишком длинная, она обрезается с конца.


function acceptParameters(source, lght, received) {
  // return source .substring(lght) + String.prototype.padStart(received) ;
// return source = received + source .slice(lght);
  const totalValue = received + source;
  const lghtTotal = totalValue.length;
  if(lght < lghtTotal){
    return totalValue .slice(0,lght);
  } else{
    return totalValue;
  }
}
console.log(acceptParameters('1', 2, '0'));
console.log(acceptParameters('qwerty', 4, '0'));
console.log(acceptParameters('1', 1, '0'));
console.log(acceptParameters('q', 4, 'werty'));
console.log(acceptParameters('q', 2, 'we'));


// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную
// длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.
// Эта функция нам пригодится для валидации формы.
// Примеры использования функции:


function definesLength (string, lght){
  string = string.length;
  if(string <= lght){
    return true;
  }
  return false;
}
console.log(definesLength('проверяемая строка', 20));
console.log(definesLength('проверяемая строка', 18));
console.log(definesLength('проверяемая строка', 10));
