function negative(number) {
  return Math.sign(number) >= 0 ? number * -1 : number;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));