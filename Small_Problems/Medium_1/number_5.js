const wordsToNumbers = {zero : 0, one : 1, two : 2, three : 3, four : 4, five : 5, six : 6, seven : 7, eight : 8, nine : 9};

function wordToDigit(sentence) {

  return sentence.split(' ').map(element => {

    let cleanString = element.replace(/[^a-z]/gi,'');

    let specialCharacter = '';

    if (/[^a-z]/gi.test(element[element.length - 1])) {
      specialCharacter = element[element.length - 1];
    }

    if (Object.keys(wordsToNumbers).includes(cleanString)) {
      element = String(wordsToNumbers[cleanString]) + specialCharacter;
    }

    return element;

  }).join(' ');

}

console.log(wordToDigit('The weight is done.'));