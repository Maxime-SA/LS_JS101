function minimumSum(array) {

  if (array.length <= 4) return null;

  let mySums = [];

  for (let i = 0; i <= array.length - 5; i++) {

    mySums.push(array.slice(i,i+5).reduce((previous, current) => previous + current));

  }
  return mySums;
  // return mySums.sort((a,b) => a - b)[0];  

}

console.log(minimumSum([1,2,3,4]));
console.log(minimumSum([1, 2, 3, 4, 5, -5]));
console.log(minimumSum([1, 2, 3, 4, 5, 6]));
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]));
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]));