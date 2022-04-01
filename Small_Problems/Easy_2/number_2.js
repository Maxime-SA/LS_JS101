const readline = require('readline-sync');

console.log('What is you name?');
let yourName = readline.question();

console.log(yourName[yourName.length - 1] === '!' ? `HELLO ${yourName.slice(0,-1).toUpperCase()}. WHY ARE WE SCREAMING?` : `HELLO ${yourName}.`);