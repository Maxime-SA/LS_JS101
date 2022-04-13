function toWeirdCase(string) {

  let oldWords = string.split(' ');
  let newWords = [];

  oldWords.forEach((element, index) => {

    let condition = (index % 2 !== 0) && element.length >= 4;

    if (condition) {
      element = element.slice(0,3) + element[3].toUpperCase() + element.slice(4);
    }

    newWords.push(element);

  });

  return newWords.join(' ');

}

console.log(toWeirdCase('Lorem Ipsum is simply dummy text of the printing world'));
console.log(toWeirdCase('It is a long established fact that a reader will be distracted'));
console.log(toWeirdCase('aaA bB c'));
console.log(toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious'));