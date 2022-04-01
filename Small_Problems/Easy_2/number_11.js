const DIGITS = ['0','1','2','3','4','5','6','7','8','9'];

function integerToString(number) {

  let myString = '';

  do {

    let digit = number % 10;

    number = (number - digit) / 10;

    myString = DIGITS[digit] + myString;

  } while (number !== 0);

  return myString;

}

console.log(integerToString(4321));