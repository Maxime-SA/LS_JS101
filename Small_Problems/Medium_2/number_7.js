function bubbleSort(array) {

  while (true) {

    let areWeDone = true;

    array.forEach((ele, index) => {

      if (ele > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], ele];
        areWeDone = false;
      }

    });

    if (areWeDone) break;

  }

  return array;

}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);