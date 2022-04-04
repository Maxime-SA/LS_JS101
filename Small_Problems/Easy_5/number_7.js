function multiplyList(firstArray, secondArray) {

  return firstArray.map((element, index) => element * secondArray[index]);

}

console.log(multiplyList([3,5,7], [9,10,11]));