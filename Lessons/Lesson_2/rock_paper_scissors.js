const readline = require(`readline-sync`);
const VALID_CHOICES = [`rock`, `paper`, `scissors`];

function prompt(message) {
  console.log(`==> ${message}\n`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice} and the computer chose ${computerChoice}`);

  if ((choice === `rock` && computerChoice === `scissors`) ||
      (choice === `paper` && computerChoice === `rock`) ||
      (choice === `scissors` && computerChoice === `paper`)) {
    prompt(`You win!`);
  } else if ((choice === `rock` && computerChoice === `paper`) ||
            (choice === `paper` && computerChoice === `scissors`) ||
            (choice === `scissors` && computerChoice === `rock`)) {
    prompt(`Computer wins!`);
  } else {
    prompt(`It's a tie.`);
  }
}

let playAgain;

do {

  prompt(`Choose one: ${VALID_CHOICES.join(`, `)}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt(`Do you wish to play again? Answer yes or no.`);
  playAgain = readline.question().toUpperCase();

} while (playAgain === 'YES');

