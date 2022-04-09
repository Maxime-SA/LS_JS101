const MAX_FEATURED = 9876543201;

function featured(integer) {

  for (let num = integer + 1; num <= MAX_FEATURED; num++) {

    if (num % 2 !== 0 && num % 7 === 0 && uniqueDigits(num)) return num;

  }

  return 'There is no possible number that fulfills those requirements';

}

function uniqueDigits(number) {

  let myArr = String(number).split('').sort();

  return myArr.every((num, index) => num !== myArr[index + 1]);

}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));