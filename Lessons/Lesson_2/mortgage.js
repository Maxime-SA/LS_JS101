const readline = require('readline-sync');

function coolPrompt(message) {
  console.log(`=> ${message}\n`);
}

function validateNumber(number) {
  return (Number.isNaN(number) || number <= 0);
}

while (true) {

  coolPrompt("Welcome to the Mortgage Calculator!");

  coolPrompt("What is the loan amount that you require?");
  let loanAmount = Number(readline.question());

  while (validateNumber(loanAmount)) {
    coolPrompt("Please review your loan amount. It must be a number greater than zero.");
    loanAmount = Number(readline.question());
  }

  coolPrompt("What is the effective annual interest rate?\nPlease enter a percentage (i.e., 5.00 or 3.50 or ...).");
  let annualInterestRate = Number(readline.question());

  while (validateNumber(annualInterestRate)) {
    coolPrompt("Please review your effective annual interest rate. Please enter a percentage greater than zero (i.e., 5.00 or 3.50 or ...).");
    annualInterestRate = Number(readline.question());
  }

  let monthlyInterestRate = ((1 + (annualInterestRate / 100)) **
                            (1 / 12)) - 1;

  coolPrompt("What is the time duration of your loan?\nPlease enter your value in years.");
  let loanDuration = readline.question() * 12;

  while (validateNumber(loanDuration)) {
    coolPrompt("Please review the time duration of your loan. Please enter your value in years.");
    loanDuration = Number(readline.question());
  }

  let monthlyPayment = loanAmount /
                       ((1 - ((1 + monthlyInterestRate) ** (-1 * loanDuration)))
                       / monthlyInterestRate);

  coolPrompt(`Your monthly payment will be $${monthlyPayment.toFixed(2)}!`);

  coolPrompt("Do you want to calculate another monthly payment? Enter yes or no.");
  let anotherTime = readline.question();

  if (anotherTime.toUpperCase() !== 'YES') break;

}