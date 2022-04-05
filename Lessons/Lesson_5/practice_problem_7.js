let a = 2;
let b = [5, 8];
let arr = [a, b]; //[2, [5,8]]

arr[0] += 2;
arr[1][0] -= a;

//a is equal to 2 since it was passed-by-value to the array whereas b will equal [3,8] since it was passed-by-reference