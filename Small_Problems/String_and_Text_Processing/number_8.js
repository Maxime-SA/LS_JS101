function wordLengths(string) {

  if (string === '' || string === undefined) return [];

  return string.split(' ').map(element => element + ' ' + element.length);

}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths('It ain\'t easy, is it?'));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));
console.log(wordLengths());