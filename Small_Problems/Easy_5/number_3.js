function halvsies(array) {

  let firstArray = [];
  let secondArray = [];

  let length = array.length;

  let result = [];

  if (length === 0) {
    return [[],[]];
  } else if (length === 1) {
    return [[array[0]],[]];
  }

  array.forEach((element, index) => {

    if (index + 1 <= Math.ceil(length / 2)) {
      firstArray.push(element);
    } else {
      secondArray.push(element);
    }

  });

  result.push(firstArray);
  result.push(secondArray);

  return result;

}

console.log(halvsies([1,2,3,4]));
console.log(halvsies([1,5,2,4,3]));
console.log(halvsies([5]));
console.log(halvsies([]));