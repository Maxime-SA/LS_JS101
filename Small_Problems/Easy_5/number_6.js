function multiplicativeAverage(array) {

  return String((array.reduce((previous, current) => previous * current, 1)
               / array.length).toFixed(3));

}

console.log(multiplicativeAverage([3,5]));
console.log(multiplicativeAverage([2,5,7,11,13,17]));