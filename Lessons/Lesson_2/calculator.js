const myJSON = require('./calculator_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(number);
}

while (true) {

  prompt(myJSON.welcome);

  prompt(myJSON.firstNumber);
  let firstNumber = Number(readline.question());

  while (invalidNumber(firstNumber)) {
    prompt(myJSON.invalidNumber);
    prompt(myJSON.numberTryAgain);
    firstNumber = Number(readline.question());
  }

  prompt(myJSON.secondNumber);
  let secondNumber = Number(readline.question());

  while (invalidNumber(secondNumber)) {
    prompt(myJSON.invalidNumber);
    prompt(myJSON.numberTryAgain);
    secondNumber = Number(readline.question());
  }

  prompt(myJSON.operationType);
  let typeOfOperation = readline.question();

  while (!['add', 'subtract', 'multiply', 'divide', '1', '2', '3', '4'].includes(typeOfOperation)) {
    prompt(myJSON.invalidOperation);
    prompt(myJSON.operationTryAgain);
    typeOfOperation = readline.question();
  }

  prompt(myJSON.result);

  switch (true) {
    case typeOfOperation === 'add' || typeOfOperation === '1':
      prompt(firstNumber + secondNumber);
      break;
    case typeOfOperation === 'subtract' || typeOfOperation === '2':
      prompt(firstNumber - secondNumber);
      break;
    case typeOfOperation === 'multiply' || typeOfOperation === '3':
      prompt(firstNumber * secondNumber);
      break;
    case typeOfOperation === 'divide' || typeOfOperation === '4':
      prompt(firstNumber / secondNumber);
  }

  prompt(myJSON.again);
  let multipleCalc = readline.question();

  if (multipleCalc.toUpperCase() !== 'YES') break;

}