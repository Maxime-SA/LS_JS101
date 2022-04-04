const readline = require('readline-sync');

let numbers = [];

for (let i = 1; i <= 6; i++) {

  let myNumber = readline.question(`Enter number ${i}: `);
  numbers.push(myNumber);

}

console.log(`The number ${numbers[5]} ${numbers.slice(0,5).includes(numbers[5]) ? 'appears' : 'does not appear'} in ${numbers.slice(0,5).join(',')}.`)