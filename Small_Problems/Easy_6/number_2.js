const consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

function doubleConsonants(string) {

  let newString = string.split('').map(element => {

    if (consonant.includes(element.toLowerCase())) {
      return element + element;
    } else {
      return element;
    }

  }).join('');

  return newString;

}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));