const checksPalindrome = (str) =>

  str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

console.log(checksPalindrome('топот'));
console.log(checksPalindrome('ДовОд'));
console.log(checksPalindrome('Кекс'));


const extractNumber = (string) => {
  let result = '';

  for(let i = 0; i < string.length; i++) {

    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};


console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));


const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string. length;

  if (actualPad <= 0) {

    return string;
  }

  return pad.slice(0, actualPad % pad. length) + pad.repeat(actualPad / pad. length) + string;
};

console.log(myPadStart('1', 2, '0'));
console.log(myPadStart('1', 4, '0'));
console.log(myPadStart('q', 4, 'werty'));
console.log(myPadStart('q', 4, 'we'));
console.log(myPadStart('qwerty', 4, '0'));


const checkStringLength = (str, length) => {

  if(str.length <= length){

    return true;
  }

  return false;
};
console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));
