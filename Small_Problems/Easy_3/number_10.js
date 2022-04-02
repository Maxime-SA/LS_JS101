function century(year) {

  let centuryBound = 100;

  while (centuryBound <= year) {

    if (year <= centuryBound) break;

    centuryBound += 100;

  }

  let century = centuryBound / 100;

  return String(century) + lastDigit(Number(String(century)));


}

function lastDigit(digit) {

  if (digit % 100 === 11 || digit % 100 === 12 || digit % 100 === 13) return 'th';

  if (digit % 10 === 3) {
    return 'rd';
  } else if (digit % 10 === 2) {
    return 'nd';
  } else if (digit % 10 === 1) {
    return 'st';
  } else {
    return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"