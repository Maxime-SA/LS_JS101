function union(firstArray, secondArray) {

  let combinedArray = firstArray.concat(secondArray);

  let newArray = [];

  combinedArray.forEach(element => {

    if (!newArray.includes(element)) newArray.push(element);

  });

  return newArray;

}

console.log(union([1,3,5], [3,6,9]));