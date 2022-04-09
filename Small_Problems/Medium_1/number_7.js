function fibonacci(number) {

  let firstNumber = 0;
  let secondNumber = 1;

  if (number === 0) return firstNumber;
  if (number === 1) return secondNumber;

  let mySum = 0;

  for (let i = 2; i <= number; i++) {

    mySum = firstNumber + secondNumber;

    firstNumber = secondNumber;
    secondNumber = mySum;

  }

  return mySum;

}

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));
console.log(fibonacci(100));