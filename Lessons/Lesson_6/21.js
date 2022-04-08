const readline = require('readline-sync');

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const highCards = ['Jack', 'Queen', 'King'];
const specialCard = 'Ace';

const MAXIMUM = 31;
const DEALER_MINIMUM = 27;

function promptPlayer(playerHand) {

  let playerNumber = playerHand.length;

  let playerMessage = playerHand.reduce((previous, current, index) => {

    if (index !== playerNumber - 1) {

      return previous + String(current) + ', ';

    } else {

      return previous + 'and ' + String(current);

    }

  }, 'You have: ');

  console.log(`${playerMessage} for a total of ${valueOf(playerHand)}.`);

}
function promptDealer(dealerHand) {

  let dealerNumber = dealerHand.length;

  let dealerMessage = dealerHand.reduce((previous, current, index) => {

    if (index !== dealerNumber - 1) {

      return previous + String(current) + ', ';

    } else if (index === 1 && dealerNumber === 2) {

      return previous + 'and unknown card';

    } else {

      return previous + 'and ' + String(current);

    }

  }, 'Dealer has: ');

  console.log(dealerMessage);

}

function initializeDeck() {

  let deck = {};

  suits.forEach(element => {

    let cards = [];

    for (let cardNumber = 2; cardNumber <= 10; cardNumber++) {
      cards.push(cardNumber);
    }

    highCards.forEach(card => cards.push(card));

    cards.push(specialCard);

    deck[element] = cards;

  });

  return deck;

}

function generateAndRemoveCard(deck) {

  let randomSuit = suits[Math.floor(Math.random() * 4)];

  let possibleChoices = Object.values(deck[randomSuit]).length;

  let randomCard = Object.values(deck[randomSuit])[Math.floor(Math.random() * possibleChoices)];

  remove(randomCard, randomSuit, deck);

  return randomCard;

}

function remove(card, suit, deck) {

  let indexToRemove = deck[suit].indexOf(card);

  deck[suit].splice(indexToRemove, 1);

}

function valueOf(hand) {

  let total = hand.reduce((previous, current) => {

    if (highCards.includes(current)) {
      current = 10;
    } else if (specialCard.includes(current)) {

      switch (true) {
        case previous <= MAXIMUM - 11:
          current = 11;
          break;
        case previous > MAXIMUM - 11:
          current = 1;
          break;

      }
    }

    return previous + current;

  }, 0);

  return total;

}

function initializeHands(player, dealer, deck) {

  player.push(generateAndRemoveCard(deck));
  player.push(generateAndRemoveCard(deck));

  dealer.push(generateAndRemoveCard(deck));
  dealer.push(generateAndRemoveCard(deck));

}

function declareWinner(player, dealer) {

  console.log(`\nYou have ${player} and the dealer has ${dealer}.\n`);

  switch (true) {
    case player > MAXIMUM:
      console.log('It\'s a bust! The house always wins!\n');
      break;
    case dealer > MAXIMUM:
      console.log('It\'s a bust! The house doesn\'t always win!\n');
      break;
    case player > dealer:
      console.log('You win! The house doesn\'t always win!\n');
      break;
    case player < dealer:
      console.log('You lose! The house always wins!\n');
      break;
    default:
      console.log('It\'s a tie.\n');
  }
}

let playAgain = 'yes';

while (playAgain.toLowerCase() === 'yes') {

  console.clear();

  console.log('\nWelcome to Twenty One! Be careful ... the house always wins!\n');

  let newDeck = initializeDeck();

  let playerHand = [];
  let dealerHand = [];

  initializeHands(playerHand, dealerHand, newDeck);

  promptDealer(dealerHand);
  promptPlayer(playerHand);

  let dealerTotal = valueOf(dealerHand);
  let playerTotal = valueOf(playerHand);

  let anotherCard = readline.question('\nDo you want another card? Enter yes or no: ');

  while (anotherCard.toLowerCase() === 'yes' && playerTotal < MAXIMUM) {

    playerHand.push(generateAndRemoveCard(newDeck));

    console.log('');

    promptPlayer(playerHand);

    playerTotal = valueOf(playerHand);

    if (playerTotal < MAXIMUM) {
      anotherCard = readline.question('\nDo you want another card? Enter yes or no: ');
    } else if (playerTotal > MAXIMUM) {
      declareWinner(playerTotal,dealerTotal);
      break;
    }
  }

  while (playerTotal <= MAXIMUM && dealerTotal < DEALER_MINIMUM) {

    dealerHand.push(generateAndRemoveCard(newDeck));

    console.log('');

    promptDealer(dealerHand);

    dealerTotal = valueOf(dealerHand);

    if (dealerTotal > MAXIMUM) {
      declareWinner(playerTotal,dealerTotal);
      break;
    }
  }

  if (playerTotal <= MAXIMUM && dealerTotal <= MAXIMUM) {
    declareWinner(playerTotal, dealerTotal);
  }

  playAgain = readline.question('Do you wish to play again? Enter yes or no: ');

}