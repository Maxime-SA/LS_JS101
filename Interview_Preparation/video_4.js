// First Problem

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

// Second Problem

function findEvenIndex(array) {

  for (let i = 0; i < array.length; i++) {

    let leftSide = array.slice(0,i);
    let rightSide = array.slice(i + 1);

    if (sumArray(leftSide) === sumArray(rightSide)) return i;

  }

  return -1;

}

function sumArray(array) {
  return array.reduce((prev, curr) => prev + curr, 0);
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));
console.log(findEvenIndex([10,-80,10,10,15,35,20]));
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]));