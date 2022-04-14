function toWeirdCase(string) {

  let array = string.split(' ');

  return array.map((element, index) => {

    if (index % 2 !== 0 && element.length >= 4) {
      element = element.split('').map((char, indx) => {
        if ((indx + 1) % 4 === 0) {
          char = char.toUpperCase();
        }
        return char;
      }).join('');
    }

    return element;

  }).join(' ');

}

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');