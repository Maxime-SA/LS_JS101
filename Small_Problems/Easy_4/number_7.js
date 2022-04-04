function runningTotal(numbers) {

  let cumSum = [];

  if (numbers.length !== 0) cumSum.push(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    cumSum.push(numbers[i] + cumSum[i - 1]);
  }

  return cumSum;

}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));