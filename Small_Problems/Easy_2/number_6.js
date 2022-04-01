function penultimate(string) {

  let splitString = string.split(' ');
  let numberOfWords = splitString.length;

  return splitString[numberOfWords - 2];

}

console.log(penultimate('last word') === 'last');

console.log(penultimate('Launch School is great!') === 'is');

