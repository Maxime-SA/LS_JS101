function firstNumber(rowNumber) {
  return 2 + (rowNumber * (rowNumber + 1)) - (2 * rowNumber); // Obtained through mathematical simplification using the sum of the first n integers (i.e., n * (n+1) / 2)
}

function sumRow(rowNumber) {

  let firstNum = firstNumber(rowNumber);
  return (firstNum * rowNumber) + (rowNumber * (rowNumber + 1)) -
         (2 * rowNumber);

}

console.log(sumRow(1));
console.log(sumRow(2));
console.log(sumRow(3));
console.log(sumRow(4));
console.log(sumRow(5));
console.log(sumRow(6));
console.log(sumRow(7));
console.log(sumRow(8));
console.log(sumRow(9));
console.log(sumRow(10));
