const multiply = (num1, num2) => num1 * num2;

function square(number, power) {
  if (power <= 1) return number;
  return multiply(number, square(number, power - 1));
}

console.log(square(5,3));