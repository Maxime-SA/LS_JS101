function sum(number) {

  return String(number).split('').reduce((previous, current) => previous + Number(current), 0);

}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));