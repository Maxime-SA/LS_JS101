function shortLongShort(firstString, secondString) {

  let firstLength = firstString.length;
  let secondLength = secondString.length;

  if (firstLength > secondLength) return secondString + firstString + secondString;

  if (secondLength > firstLength) return firstString + secondString + firstString;

}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"