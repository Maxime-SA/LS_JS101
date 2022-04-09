function sumSqaureDifference(integer) {

  let firstOperand = 0;
  let secondOperand = 0;

  for (let i = 1; i <= integer; i++) {

    firstOperand += i;
    secondOperand += i ** 2;

  }

  return (firstOperand ** 2) - secondOperand;

}

console.log(sumSqaureDifference(3));
console.log(sumSqaureDifference(10));
console.log(sumSqaureDifference(1));
console.log(sumSqaureDifference(100));