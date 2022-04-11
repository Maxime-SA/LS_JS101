const spellingBlocks = {B : 'O', X : 'K', D : 'Q', C : 'P', N : 'A', G : 'T', R : 'E', F : 'S', J : 'W', H : 'U', V : 'I', L : 'Y', Z : 'M'};

function isBlockWord(string) {

  let eachLetter = string.toUpperCase().split('');

  let lettersUsed = [];

  let spellingBlocksReversed = Object.fromEntries(Object.entries(spellingBlocks).map(block => block.slice().reverse()));

  for (let i = 0; i < eachLetter.length; i++) {

    let lookFor = spellingBlocks[eachLetter[i]] || spellingBlocksReversed[eachLetter[i]];

    let sameBlock = eachLetter.slice(i + 1).includes(lookFor);

    let sameLetter = lettersUsed.includes(lookFor);

    if (sameBlock || sameLetter) return false;

    lettersUsed.push(lookFor);

  }

  return true;

}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
console.log(isBlockWord('flow'));
console.log(isBlockWord('APPLE'));
console.log(isBlockWord('apple'));
console.log(isBlockWord('apPLE'));
console.log(isBlockWord('Box'));