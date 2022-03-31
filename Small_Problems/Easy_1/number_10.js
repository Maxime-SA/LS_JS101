function multiSum(integer) {

  let myAnswer = 0;

  for (let i = 1; i <= integer; i += 1) {

    if (i % 3 === 0 || i % 5 === 0) myAnswer += i;

  }

  return myAnswer;

}

console.log(multiSum(3));       // 3
console.log(multiSum(5));       // 8
console.log(multiSum(10));      // 33
console.log(multiSum(1000));    // 234168