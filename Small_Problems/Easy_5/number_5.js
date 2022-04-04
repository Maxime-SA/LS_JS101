function interleave(firstArray, secondArray) {

  let newArray = [];

  for (let i = 0; i < firstArray.length; i++) {
    newArray.push(firstArray[i], secondArray[i]);
  }
  return newArray;
}

console.log(interleave([1,2,3], ['a','b','c']));