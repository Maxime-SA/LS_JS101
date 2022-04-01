let stringy = function(number) {

  let myString = '';

  for (let i = 1; i <= number; i += 1) {

    if (i % 2 !== 0) {

      myString += '1';

    } else myString += 0;
  }

  return myString;

};

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
console.log(stringy(0));