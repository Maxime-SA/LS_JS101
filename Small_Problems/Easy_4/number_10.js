function swap(sentence) {

  let myArray = sentence.split(' ');

  let newSentence = myArray.map(element => {

    let length = element.length;

    if (length === 1) return element;

    return element[length - 1] + element.slice(1,length - 1) + element[0];

  }).join(' ');

  return newSentence;

}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));