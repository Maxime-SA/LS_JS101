const readline = require('readline-sync');

console.log(`What is the bill amount?`);
let billAmount = parseFloat(readline.question());

console.log(`What is the tip percentage?`);
let tipPercentage = parseFloat(readline.question()) / 100;

console.log(`The tip is $${(billAmount * tipPercentage).toFixed(2)}`);
console.log(`The total is $${(billAmount * (1 + tipPercentage)).toFixed(2)}`);