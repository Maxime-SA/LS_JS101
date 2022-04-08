function isUpperCase(string) {
  return string === string.toUpperCase();
}

console.log(isUpperCase('t'));
console.log(isUpperCase('T'));
console.log(isUpperCase('Four Score'));
console.log(isUpperCase('FOUR SCORE'));
console.log(isUpperCase('4SCORE!'));
console.log(isUpperCase(''));