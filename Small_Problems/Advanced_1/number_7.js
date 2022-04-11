/* eslint-disable max-lines-per-function */
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot',
  'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

function binarySearch(lookIn, lookFor) {

  let lowIndex = 0;
  let highIndex = lookIn.length - 1;

  while (lowIndex <= highIndex) {

    let middlePoint = lowIndex + Math.floor((highIndex - lowIndex) / 2);

    if (lookFor < lookIn[middlePoint]) {
      highIndex = middlePoint - 1;
    } else if (lookFor > lookIn[middlePoint]) {
      lowIndex = middlePoint + 1;
    } else {
      return middlePoint;
    }

  }

  return -1;

}

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));