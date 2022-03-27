const readline = require('readline-sync');

console.log('Welcome to Calculator!');

let firstNumber = Number(readline.question('What is your first number? '));
let secondNumber = Number(readline.question('What is your second number? '));
let typeOfOperation = readline.question('What type of operation do you want to perform:\n1) add\n2) subtract\n3) multiply\n4) divide\n... ')

console.log('The result of your operation is ...')

switch (typeOfOperation) {
  case 'add':
    console.log(firstNumber + secondNumber);
    break;
  case 'subtract':
    console.log(firstNumber - secondNumber);
    break;
  case 'multiply':
    console.log(firstNumber * secondNumber);
    break;
  case 'divide':
    console.log(firstNumber / secondNumber);
}