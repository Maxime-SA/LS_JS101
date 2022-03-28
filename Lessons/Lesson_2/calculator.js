const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(number);
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let firstNumber = Number(readline.question());

while (invalidNumber(firstNumber)) {
  prompt("Hmm... that doens't look like a valid number.");
  prompt("Please enter your first number again.");
  firstNumber = readline.question();
}

prompt("What's the second number?");
let secondNumber = Number(readline.question());

while (invalidNumber(secondNumber)) {
  prompt("Hmm... that doens't look like a valid number.");
  prompt("Please enter your second number again.");
  secondNumber = readline.question();
}

let typeOfOperation = readline.question('What type of operation do you want to perform:\n1) add\n2) subtract\n3) multiply\n4) divide\n... ');

while (!['add', 'subtract', 'multiply', 'divide'].includes(typeOfOperation)) {
  prompt("Make sure to enter: add, subtract, multiply or divide.");
  prompt("So, what type of operation would you like to do?");
  typeOfOperation = readline.question();
}

prompt('The result of your operation is ...');

switch (typeOfOperation) {
  case 'add':
    prompt(firstNumber + secondNumber);
    break;
  case 'subtract':
    prompt(firstNumber - secondNumber);
    break;
  case 'multiply':
    prompt(firstNumber * secondNumber);
    break;
  case 'divide':
    prompt(firstNumber / secondNumber);
}