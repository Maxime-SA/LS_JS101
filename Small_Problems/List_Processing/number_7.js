function sumOfSums(arr) {

  let mySum = 0;

  for (let i = 0; i < arr.length; i++) {

    mySum += arr.slice(0, i + 1).reduce((previous, current) => previous + current, 0);

  }

  return mySum;

}

console.log(sumOfSums([3,5,2]));
console.log(sumOfSums([1,5,7,3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1,2,3,4,5]));