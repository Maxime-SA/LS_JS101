function star(oddInteger) {

  let middlePoint = Math.ceil(oddInteger / 2);
  let bottomHalf = '';

  for (let i = 1; i <= oddInteger; i++) {

    switch (true) {
      case (i < middlePoint):
        bottomHalf += createLine(i, oddInteger) + '\n';
        break;
      case (i === middlePoint):
        bottomHalf += '*'.repeat(oddInteger) + '\n';
        break;
      case (i < oddInteger):
        bottomHalf += createLine(oddInteger - (i - 1), oddInteger) + '\n';
        break;
      default:
        bottomHalf += createLine(oddInteger - (i - 1), oddInteger);
    }
  }

  return bottomHalf;

}

function createLine(currentRow, totalLength) {

  let middlePoint = Math.ceil(totalLength / 2);

  return ((' '.repeat(currentRow - 1) + '*').padEnd(middlePoint - 1, ' ') + '*').padEnd(totalLength - currentRow, ' ') + '*';

}

console.log(star(13));