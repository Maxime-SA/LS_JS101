const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {

  let newMatrix = [[],[],[]];

  matrix.forEach(rows => {

    newMatrix[0].push(rows[0]);
    newMatrix[1].push(rows[1]);
    newMatrix[2].push(rows[2]);

  });

  return newMatrix;

}

let newMatrix = transpose(matrix);

console.log(newMatrix);
console.log(matrix);