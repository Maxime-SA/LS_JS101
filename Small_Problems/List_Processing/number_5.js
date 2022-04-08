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

console.log(substrings('abcde'));