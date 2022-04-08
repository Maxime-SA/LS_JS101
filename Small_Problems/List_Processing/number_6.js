function leadingSubstrings(string) {

  let arr = [];

  for (let i = 1; i <= string.length; i++) {
    arr.push(string.slice(0,i));
  }

  return arr;

}

function substrings(string) {

  let arr = [];

  for (let i = 0; i < string.length; i++) {

    let tempString = string.slice(i);

    let allComb = leadingSubstrings(tempString);

    arr = arr.concat(allComb);

  }

  return arr;

}

function palindromes(string) {

  let result = [];

  let allComb = substrings(string);

  allComb.forEach(element => {

    let reversedElement = element.split('').reverse().join('');

    if (element === reversedElement && element.length > 1) result.push(element);

  });

  return result;

}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
