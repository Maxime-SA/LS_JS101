const allowedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function UUID() {

  let myUUID = '';

  for (let i = 1; i <= 32; i++) {

    if (i === 9 || i === 13 || i === 17 || i === 21) {
      myUUID += '-';
    }

    let randomNumber = Math.floor(Math.random() * 16);

    myUUID += allowedCharacters[randomNumber];

  }

  return myUUID;

}

console.log(UUID());