const readline = require(`readline-sync`);
const SQMETERS_TO_SQFEET = 10.7639;

console.log(`Enter the length of the room in meters:`);
let lengthOfRoom = Number(readline.question());

console.log(`Enter the width of the room in meters:`);
let widthOfRoom = Number(readline.question());

console.log(`The area of the room is ${(lengthOfRoom * widthOfRoom).toFixed(2)} square meters (${(lengthOfRoom * widthOfRoom * SQMETERS_TO_SQFEET).toFixed(2)} square feet).`);
