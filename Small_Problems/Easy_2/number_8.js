let oddities = myArray => myArray.filter((value, index) => index % 2 === 0);

let evenities = myArray => myArray.filter((value, index) => index % 2 !== 0);

console.log(oddities([2,3,4,5,6]));
console.log(oddities([1,2,3,4,5,6]));
console.log(oddities(['adg','asd']));
console.log(oddities([123]));
console.log(oddities([]));

console.log(evenities([2,3,4,5,6]));
console.log(evenities([1,2,3,4,5,6]));
console.log(evenities(['adg','asd']));
console.log(evenities([123]));
console.log(evenities([]));