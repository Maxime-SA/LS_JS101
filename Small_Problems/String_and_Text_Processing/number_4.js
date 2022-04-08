function wordCup(string) {

  let newString = string.split(' ').map(element => {

    return element[0].toUpperCase() + element.slice(1).toLowerCase();

  }).join(' ');

  return newString;

}

console.log(wordCup('four score and seven'));
console.log(wordCup('the javaScript language'));
console.log(wordCup('this is a "quoted" word'));