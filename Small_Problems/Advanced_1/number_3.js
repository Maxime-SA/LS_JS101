const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

function transpose(matrix) {

  let numberOfRows = matrix[0].length;

  let newMatrix = [];

  for (let i = 0; i < numberOfRows; i++) {

    newMatrix.push([]);

  }

  matrix.forEach(rows => {

    for (let i = 0; i < numberOfRows; i++) {

      newMatrix[i].push(rows[i]);

    }

  });

  return newMatrix;

}

let newMatrix = transpose(matrix);

console.log(newMatrix);
console.log(matrix);

console.log(transpose([[1, 2, 3, 4]]));
console.log(transpose([[1], [2], [3], [4]]));
console.log(transpose([[1]]));
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));