function twice(number) {

  let string = String(number);
  let length = string.length;
  let firstHalf = Math.floor(length / 2);

  if (String(number).slice(0,firstHalf) === String(number).slice(firstHalf) &&
  length % 2 === 0) return number;

  return number * 2;
  
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676