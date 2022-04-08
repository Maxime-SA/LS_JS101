function buyFruit(arr) {

  let shoppingList = [];

  arr.forEach(element => {

    for (let i = 1; i <= element[1]; i++) {
      shoppingList.push(element[0]);
    }

  });

  return shoppingList;

}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));