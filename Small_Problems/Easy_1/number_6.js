const readline = require(`readline-sync`);

console.log(`Please enter an integer greater than 0:`);
let myInteger = Number(readline.question());

console.log(`Enter "s" to compute the sum, or "p" to compute the product.`);
let operation = readline.question();

let myAnswer;

if (operation === 's') {

  myAnswer = 0;

  for (let i = 1; i <= myInteger; i += 1) {
    myAnswer += i;
  }

} else {

  myAnswer = 1;

  for (let i = 2; i <= myInteger; i += 1) {
    myAnswer *= i;
  }

}

console.log(`The ${operation === 's' ? 'sum' : 'product'} of the integers between 1 and ${myInteger} is ${myAnswer}.`);