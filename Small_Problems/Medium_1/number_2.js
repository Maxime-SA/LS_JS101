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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917