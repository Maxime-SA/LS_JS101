const readline = require('readline-sync');

function coolPrompt(message) {
  console.log(`=> ${message}\n`);
}

while (true) {

  coolPrompt("Welcome to the Mortgage Calculator!");

  coolPrompt("What is the loan amount that you require?");
  let loanAmount = Number(readline.question());

  coolPrompt("What is the effective annual interest rate?\nPlease enter a percentage (i.e., 5.00 or 3.50 or ...).");
  let monthlyInterestRate = (1+Number(readline.question())/100) ** (1/12) - 1;

  coolPrompt("What is the time duration of your loan?\nPlease enter your value in years.");
  let loanDuration = readline.question() * 12;

  let monthlyPayment = loanAmount /
                       ((1 - ((1 + monthlyInterestRate) ** (-1 * loanDuration)))
                       / monthlyInterestRate);

  coolPrompt(`Your monthly payment will be $${monthlyPayment}!`);

  coolPrompt("Do you want to calculate another monthly payment?");
  let anotherTime = readline.question();

  if (anotherTime.toUpperCase() !== 'YES') break;

}