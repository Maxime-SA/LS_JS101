function star(oddInteger) {

  let middlePoint = Math.ceil(oddInteger / 2);
  let myStar = '';

  for (let i = 1; i <= oddInteger; i++) {

    switch (true) {
      case (i < middlePoint):
        myStar += createLine(i, oddInteger) + '\n';
        break;
      case (i === middlePoint):
        myStar += '*'.repeat(oddInteger) + '\n';
        break;
      case (i < oddInteger):
        myStar += createLine(oddInteger - (i - 1), oddInteger) + '\n';
        break;
      default:
        myStar += createLine(oddInteger - (i - 1), oddInteger);
    }
  }

  return myStar;

}

function createLine(currentRow, totalLength) {

  let middlePoint = Math.ceil(totalLength / 2);

  return ((' '.repeat(currentRow - 1) + '*').padEnd(middlePoint - 1, ' ') + '*').padEnd(totalLength - currentRow, ' ') + '*';

}

console.log(star(13));