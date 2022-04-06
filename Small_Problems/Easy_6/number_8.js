function sequence(count, firstFactor) {

  let newArray = [];

  for (let i = 1; i <= count; i++) {

    newArray.push(firstFactor * i);

  }

  return newArray;

}

console.log(sequence(5,1));
console.log(sequence(4,-7));
console.log(sequence(3,0));
console.log(sequence(0,10000));