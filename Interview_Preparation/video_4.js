function commonPrefix(myArray) {

  let allPrefixes = [];

  myArray.forEach(element => allPrefixes.push(cumulativePrefix(element)));

  allPrefixes.sort((a,b) => a.lenght - b.length);

  for (let i = allPrefixes[0].length - 1; i >= 0; i--) {

    let samePrefix = true;

    let prefix = allPrefixes[0][i];

    for (let y = 1; y < allPrefixes.length; y++) {
      if (allPrefixes[y][i] !== prefix) {
        samePrefix = false;
        break;
      }
    }

    if (samePrefix) return prefix;

  }

  return '';

}

function cumulativePrefix(string) {

  let cumulativeString = string[0].toLowerCase();

  let myStrings = [];

  for (let i = 1; i < string.length; i++) {
    cumulativeString += string[i].toLowerCase();
    myStrings.push(cumulativeString);
  }

  return myStrings;

}

console.log(commonPrefix(['flower','flow','flight']));
console.log(commonPrefix(['dog','racecar','car']));
console.log(commonPrefix(['interspecies','interstellar','interstate']));
console.log(commonPrefix(['throne','dungeon']));
console.log(commonPrefix(['throne','throne']));