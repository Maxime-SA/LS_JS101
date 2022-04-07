// Constants plus functions

const readline = require('readline-sync');

const winningCombinations = [[0,1,2], [3,4,5], [6,7,8],
                             [0,3,6], [1,4,7], [2,5,8],
                             [0,4,8], [2,4,6]];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function displayBoard(array) {

  console.log('');
  console.log('     |     |     ');
  console.log(`  ${array[0]}  |  ${array[1]}  |  ${array[2]}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${array[3]}  |  ${array[4]}  |  ${array[5]}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${array[6]}  |  ${array[7]}  |  ${array[8]}  `);
  console.log('     |     |     ');
  console.log('');

  return '';

}

function gameBoardChoice(array) {

  for (let i = 0; i < 9; i++) {
    if (!['X','O'].includes(array[i])) array[i] = i + 1;
  }

  return array;

}

function gameBoardState(array) {

  for (let i = 0; i < 9; i++) {
    if (!['X','O'].includes(array[i])) array[i] = ' ';
  }

  return array;

}

function whosTurn(draw) {

  let turns = [];

  turns.push(draw[0].toUpperCase());

  for (let i = 1; i < 9; i++) {
    turns.push(turns[i - 1] === 'Y' ? 'C' : 'Y')
  }

  return turns;

}

function winner(arr) {

  let result = false;

  winningCombinations.forEach(element => {

    if (arr[element[0]] !== ' ' && arr[element[0]] === arr[element[1]] && arr[element[1]] === arr[element[2]]) {
      result = true;
    }

  });

  return result;

}

// Actual Program

console.log('\nWelcome to Tic Tac Toe! Everyone\'s favorite game!');

while (true) {

  let userIcon = readline.question('\nWould you prefer to be an X or O? Just type X or O: ').toUpperCase();

  while (!['X','O'].includes(userIcon)) {

    console.log('\nLooks like your input is incorrect. Please try again.');
    userIcon = readline.question('\nWould you prefer to be an X or O? Just type X or O: ').toUpperCase();

  }

  let computerIcon = userIcon === 'X' ? 'O' : 'X';

  let whoStarts = Math.floor(Math.random() * 2) === 1 ? 'you' : 'the computer';
  let whoPlays = whosTurn(whoStarts);

  console.log(`\nA random draw has taken place and it has been decided that ${whoStarts} will start! Good luck!\n`);

  let winnerInd = false;
  let gameState = [];
  let placesLeft = [1,2,3,4,5,6,7,8,9];
  let counter = 0;

  while (true) {

    if (whoPlays[counter] === 'Y') {

      console.log('Where would you like to place your marker? The available spots are shown below:');
      console.log(displayBoard(gameBoardChoice(gameState)));

      let userChoice = Number(readline.question('Input your number: '));

      while (!placesLeft.includes(userChoice)) {
        console.log('\nLooks like your input is incorrect. Please try again.');
        userChoice = Number(readline.question('\nInput your number: '));
      }

      gameState[userChoice - 1] = userIcon;

      placesLeft.splice(placesLeft.indexOf(userChoice), 1);

      console.log('\nThe current state of the board is as follows:');
      console.log(displayBoard(gameBoardState(gameState)));

    } else {

      console.log('It\'s the computer\'s turn.\n');

      let computerChoice = placesLeft.length === 1 ? placesLeft[0] :
                                                     placesLeft[Math.floor(Math.random() * placesLeft.length)];

      gameState[computerChoice - 1] = computerIcon;

      placesLeft.splice(placesLeft.indexOf(computerChoice), 1);

      gameBoardState(gameState);

      console.log(`The computer played and placed it's marker in cell ${computerChoice}.\n`);

    }

    winnerInd = winner(gameState);

    if (winnerInd) {

      let winner = whoPlays[counter] === 'Y' ? 'You won!' : 'The computer won!';
      console.log(winner);
      console.log(displayBoard(gameBoardChoice(gameState)));
      break;

    }

    if (counter === 8) {

      console.log('It\'s a tie');
      break;

    }

    counter += 1;

  }

  let playAgain = readline.question('Do you wish to play again? Type \'Yes\' or \'No\': ');

  if (playAgain.toLowerCase() !== 'yes') break;

}