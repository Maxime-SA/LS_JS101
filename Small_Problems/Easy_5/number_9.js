let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {

  let wordFreq = {};

  array.forEach(element => {

    if (wordFreq[element]) {
      wordFreq[element] += 1;
    } else {
      wordFreq[element] = 1;
    }

  });

  return wordFreq;

}

Object.entries(countOccurrences(vehicles)).forEach(keyValue => {

  let [key, value] = keyValue;
  console.log(`${key} => ${value}`);

});