function closestNumbers(array) {

  let sortedArray = array.slice().sort((a,b) => a - b);

  let minimumSum = sortedArray[sortedArray.length - 1] - sortedArray[0];

  let targetIndex = 0;

  for (let i = 0; i < array.length - 2; i++) {

    let difference = sortedArray[i + 1] - sortedArray[i];

    if (difference < minimumSum) {
      minimumSum = difference;
      targetIndex = i;
    }

  }

  let firstValue = sortedArray[targetIndex];
  let secondValue = sortedArray[targetIndex + 1];

  let closestNumbers = [];

  array.forEach(element => {

    if (element === firstValue || element === secondValue) {
      closestNumbers.push(element);
    }

  });

  return closestNumbers;

}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]