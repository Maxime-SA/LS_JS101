function merge(arr1, arr2) {

  if (Number(arr1) === 0 || Number(arr2) === 0) {
    return Number(arr1) === 0 ? arr2 : arr1;
  }

  let newArray = [];

  let secondArrPosition = 0;

  for (let ele1 = 0; ele1 < arr1.length; ele1++) {
    for (let ele2 = secondArrPosition; ele2 < arr2.length; ele2++) {

      if (arr1[ele1] < arr2[ele2]) {
        newArray.push(arr1[ele1]);
        break;
      } else if (arr1[ele1] > arr2[ele2]) {
        newArray.push(arr2[ele2]);
        secondArrPosition += 1;
        continue;
      } else if (arr1[ele1] === arr2[ele2]) {
        newArray.push(arr1[ele1]);
        newArray.push(arr2[ele2]);
        secondArrPosition += 1;
        break;
      }
    }
  }

  arr1.slice(-1) > arr2.slice(-1) ? newArray.push(arr1[arr1.length - 1]) : newArray.push(arr2[arr2.length - 1]);

  return newArray;

}

console.log(merge([1, 5, 8], [2, 6, 9]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]