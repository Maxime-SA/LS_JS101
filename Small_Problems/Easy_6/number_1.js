function repeater(string) {

  let newString = '';

  string.split('').forEach(element => {

    newString += element + element;

  });

  return newString;

}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));