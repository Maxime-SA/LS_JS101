// First Problem

function repeatedSubstringPattern(string) {

  let mySubstrings = allSubstrings(string);

  let stringLength = string.length;

  for (let i = 0; i < mySubstrings.length; i++) {

    let testedString = mySubstrings[i];

    let repeatSubstring = Math.floor(stringLength / testedString.length);

    if (testedString.repeat(repeatSubstring) === string) {
      return true;
    }
  }

  return false;

}

function allSubstrings(string) {

  let allCombinations = [];

  let cumulativeString = '';

  for (let i = 0; i < string.length - 1; i++) {

    cumulativeString += string[i];

    allCombinations.push(cumulativeString);

  }

  return allCombinations;

}

console.log(repeatedSubstringPattern('abab'));
console.log(repeatedSubstringPattern('aba'));
console.log(repeatedSubstringPattern('aabaaba'));
console.log(repeatedSubstringPattern('abaababaab'));
console.log(repeatedSubstringPattern('abcabcabcabc'));

// Second Problem

function commonChars(array) {

  let myFrequencies = {};

  for (let word = 0; word <= array.length - 1; word++) {
    myFrequencies[word] = charFrequency(array[word]);
  }

  let commonChar = [];

  Object.keys(myFrequencies[0]).forEach(char => {

    let numberOfAppearances = [];

    Object.keys(myFrequencies).forEach(index => {

      if (myFrequencies[index][char]) {
        numberOfAppearances.push(myFrequencies[index][char]);
      } else {
        numberOfAppearances.push(0);
      }
    });

    let minimum = numberOfAppearances.sort((a,b) => a - b)[0];

    for (let i = 1; i <= minimum; i++) {
      commonChar.push(char);
    }

  });

  return commonChar;

}

function charFrequency(string) {

  let frequency = {};

  string.split('').forEach(element => {

    if (!frequency[element]) {
      frequency[element] = 0;
    }

    frequency[element] += 1;

  });

  return frequency;

}

console.log(commonChars(['a','b']));
console.log(commonChars(['ab','bc']));
console.log(commonChars(['bella','label','roller']));
console.log(commonChars(['cool','lock','cook']));
console.log(commonChars(['hello','goodbye','booya','random']));
console.log(commonChars(['aabbaaaa','ccdddddd','eeffee','ggrrrr','yyyzzz']));
