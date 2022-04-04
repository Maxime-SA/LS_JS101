const readline = require('readline-sync');

let myAge = Number(readline.question('What is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));

let today = new Date();
let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + retirementAge - myAge}.\nYou have only ${retirementAge - myAge} years to go!`);