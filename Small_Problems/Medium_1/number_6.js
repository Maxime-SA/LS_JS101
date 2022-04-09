function fibonnacci(number) {

  if (number === 0) return 0;
  if (number === 1) return 1;

  return fibonnacci(number - 1) + fibonnacci(number - 2);

}

console.log(fibonnacci(1));
console.log(fibonnacci(2));
console.log(fibonnacci(3));
console.log(fibonnacci(4));
console.log(fibonnacci(5));
console.log(fibonnacci(12));
console.log(fibonnacci(20));