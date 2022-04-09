function rotateRightmostDigits(number, count) {

  if (count > String(number).length) {
    count = String(number).length;
  } else if (count < 1) {
    count = 1;
  }

  let tempArray =  String(number).split('');

  let lastDigit = tempArray.splice(-count, 1);

  return Number(tempArray.join('') + lastDigit);

}

function maxRotation(number) {

  let numberLenght = String(number).length;

  for (let i = numberLenght; i > 1; i--) {

    number = rotateRightmostDigits(number, i);

  }

  return number;

}

console.log(maxRotation(735291));         // 321579
console.log(maxRotation(3));              // 3
console.log(maxRotation(35));             // 53
console.log(maxRotation(105));            // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));     // 7321609845

