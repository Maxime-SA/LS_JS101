let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a,b) => {

  return a.filter(element => element % 2 !== 0).
    reduce((previous, current) => previous + current, 0) -
  b.filter(element => element % 2 !== 0).
    reduce((previous, current) => previous + current, 0);

});

console.log(arr);