function sequence(number) {

  let arrSequence = [];

  for (let i = 1; i <= number; i++) {
    arrSequence.push(i);
  }

  return arrSequence;

}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));