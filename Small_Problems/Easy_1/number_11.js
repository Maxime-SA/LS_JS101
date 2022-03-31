function utf16Value(string) {

  let stringSum = 0;

  string.split('').forEach(function(char) {
    stringSum += char.charCodeAt();
  });

  return stringSum;

}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0
console.log(utf16Value("\u03A9"));             // 937