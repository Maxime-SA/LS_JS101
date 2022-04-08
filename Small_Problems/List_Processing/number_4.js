function leadingSubstrings(string) {

  let arr = [string[0]];

  for (let i = 1; i < string.length; i++) {
    arr.push(string.slice(0,i + 1));
  }

  return arr;

}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));