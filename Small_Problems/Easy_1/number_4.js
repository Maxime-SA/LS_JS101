const readline = require(`readline-sync`);
const SQMETERS_TO_SQFEET = 10.7639;
const SQFEET_TO_SQMETERS = 1 / SQMETERS_TO_SQFEET;

console.log(`Would you rather have the calculation done in square meters or square feet? Enter meters or feet.`);
let userInput = readline.question();

while (userInput !== 'meters' && userInput !== 'feet') {
  console.log(`That is not a valid input. Please try again: meters or feet.`);
  userInput = readline.question();
}

console.log(`Enter the length of the room in ${userInput}:`);
let lengthOfRoom = Number(readline.question());

console.log(`Enter the width of the room in ${userInput}:`);
let widthOfRoom = Number(readline.question());

if (userInput === 'meters') {

  console.log(`The area of the room is ${(lengthOfRoom * widthOfRoom).toFixed(2)} square meters (${(lengthOfRoom * widthOfRoom * SQMETERS_TO_SQFEET).toFixed(2)} square feet).`);

} else {

  console.log(`The area of the room is ${(lengthOfRoom * widthOfRoom).toFixed(2)} square feet (${(lengthOfRoom * widthOfRoom * SQFEET_TO_SQMETERS).toFixed(2)} square meters).`);

}