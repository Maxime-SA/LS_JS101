function diamond(number) {

  let myDiamond = '';

  for (let i = 1; i <= number; i++) {

    if (i <= Math.ceil(number / 2)) {
      myDiamond += createLine(i, number) + '\n';
    } else if (i < number) {
      myDiamond += createLine(number - (i - 1), number) + '\n';
    } else {
      myDiamond += createLine(number - (i - 1), number);
    }

  }

  return myDiamond;

}

function createLine(currentRow, totalLength) {

  let middlePoint = Math.ceil(totalLength / 2);

  return '*'.repeat(1 + ((currentRow - 1) * 2)).padStart(middlePoint + (currentRow - 1), ' ');

}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(15));