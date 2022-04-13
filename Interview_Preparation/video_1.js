// First Problem

function nextBigger(number) {

  let myNumbers = String(number).split('');

  for (let i = myNumbers.length - 2; i >= 0; i--) {

    let compareWith = myNumbers.slice(i + 1).reverse().find(element => element > myNumbers[i]);

    let targetIndex = myNumbers.indexOf(compareWith);

    if (compareWith === undefined) {
      continue;
    } else {
      return myNumbers.join('').slice(0,i) + myNumbers.join('').slice(targetIndex) + myNumbers[i];
    }

  }

  return -1;

}

console.log(nextBigger(9));
console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(111));
console.log(nextBigger(531));
console.log(nextBigger(123456789));

// Second Problem

function scramble(str1, str2) {

  let charFreq1 = stringFrequency(str1);
  let charFreq2 = stringFrequency(str2);

  return Object.keys(charFreq2).every(element => charFreq2[element] <= charFreq1[element]);

}

function stringFrequency(string) {

  let frequency = {};

  string.split('').forEach(element => {
    if (!frequency[element]) {
      frequency[element] = 0;
    }
    frequency[element] += 1;
  });

  return frequency;

}

console.log(scramble('javaass', 'jjss'));
console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
console.log(scramble('scriptjava', 'javascript'));
console.log(scramble('scriptingjava', 'javascipt'));