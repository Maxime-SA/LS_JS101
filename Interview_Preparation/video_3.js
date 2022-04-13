function allSubstrings(string) {

  let allCombinations = [];

  for (let i = 0; i < string.length; i++) {

    for (let y = string.length - 1; y >= i; y--) {
      allCombinations.push(string.slice(i,y + 1).toLowerCase());
    }

  }

  return allCombinations.filter(element => element.length !== 1);

}

function substringTest(str1, str2) {

  let allComb1 = allSubstrings(str1);
  let allComb2 = allSubstrings(str2);

  let smaller = allComb1.length > allComb2.length ? allComb2.length : allComb1.length;

  for (let i = 0; i < smaller; i++) {
    if (allComb1.includes(allComb2[i])) return true;
  }

  return false;

}

console.log(substringTest('Something','Fun'));
console.log(substringTest('Something','Home'));
console.log(substringTest('Something',''));
console.log(substringTest('','Something'));
console.log(substringTest('BANANA','banana'));
console.log(substringTest('test','lllt'));
console.log(substringTest('',''));
console.log(substringTest('1234567','541265'));
console.log(substringTest('supercalifragilisticexpialidocious','SoundOfItIsAtrociou'));