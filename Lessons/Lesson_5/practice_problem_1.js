let arr = ['10', '11', '9', '7', '8'];

arr.sort((ele1, ele2) => Number(ele2) - Number(ele1));

console.log(arr);