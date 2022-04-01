function crunch(string) {

  let stringLength = string.length;
  let newWord = '';

  for (let i = 0; i < stringLength; i += 1) {

    let newWordLength = newWord.length;

    if (string[i] !== newWord[newWordLength - 1]) newWord += string[i];

  }

  return newWord;

}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""