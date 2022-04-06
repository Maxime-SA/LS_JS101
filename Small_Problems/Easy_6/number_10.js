function reverseWords(string) {

  let newString = string.split(' ').map(element => {

    if (element.length >= 5) {
      return element.split('').reverse().join('');
    } else {
      return element;
    }

  }).join(' ');

  return newString;

}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));