function wordSizes(sentence) {

  if (sentence === '') return {};

  let wordFreq = {};
  let array = sentence.split(' ');

  array.forEach(element => {

    if (Object.keys(wordFreq).includes(String(element.length))) {
      wordFreq[element.length] += 1;
    } else {
      wordFreq[element.length] = 1;
    }

  });

  return wordFreq;

}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes('What\'s up doc?'));
console.log(wordSizes(''));
