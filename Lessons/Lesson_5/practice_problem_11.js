let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArray = arr.map(obj => {

  let newObj = {};

  Object.entries(obj).forEach(keyValue => {
    let key = keyValue[0];
    newObj[key] = obj[key] + 1;
  });

  return newObj;

});

console.log(arr);
console.log(newArray);