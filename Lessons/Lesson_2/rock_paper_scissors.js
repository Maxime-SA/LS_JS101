const readline = require(`readline-sync`);

const USER_CHOICES = [`rock`, `paper`, `scissors`, `lizard`, `spock`];
const VALID_CHOICES = [`r`, `p`, `sc`, `l`, `sp`];

const WINNING_COMBINATIONS = {
  r: [`l`, `sc`],
  p: [`sp`, 'r'],
  sc: [`p`, 'l'],
  sp: [`r`, 'sc'],
  l: [`sp`, 'p'],
};

function prompt(message) {
  console.log(`==> ${message}\n`);
}

function registerWinner(choice, computerChoice, humanArray, computerArray) {

  if (WINNING_COMBINATIONS[choice].includes(computerChoice)) {

    prompt(`You win!`);
    humanArray.push('W');

  } else if (choice === computerChoice) {

    prompt(`It's a tie`);

  } else {

    prompt(`Computer wins!`);
    computerArray.push('W');

  }
}

let playAgain;

do {

  let humanScore = [];
  let computerScore = [];

  do {

    prompt(`Choose one: ${USER_CHOICES.map(string => (string[0] !== 's' ? string + ` (` + string[0] + `)` : string + ` (` + string.slice(0,2) + `)`)).join(`, `)}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt(`That's not a valid choice`);
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    registerWinner(choice, computerChoice, humanScore, computerScore);

    prompt(`You have ${humanScore.length} point(s) and the computer has ${computerScore.length} point(s)`);

  } while (humanScore.length < 3 && computerScore.length < 3);

  if (humanScore.length > computerScore.length) {
    prompt(`You won the best of 5!`);
  } else {
    prompt(`The computer won the best of 5!`);
  }

  prompt(`Do you wish to play again? Answer yes or no.`);
  playAgain = readline.question().toUpperCase();

} while (playAgain === 'YES');