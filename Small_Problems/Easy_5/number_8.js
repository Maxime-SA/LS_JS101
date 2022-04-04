function digitList(number) {

  let array = String(number).split('');

  return array.map(element => element * 1);

}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));