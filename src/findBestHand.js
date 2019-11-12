const DeckCreationService = require('./DeckCreationService');
const PokerHandService = require('./PokerHandService');

// To see the deck structure, visit /src/constanst/EMPTY_DECK.js

function createRandomDeckOfNCards(n) {
  const deckCreationService = new DeckCreationService(n);
  return deckCreationService.createRandomDeck();
}

function getCardAmount() {
  // This is an odd way to do this, admittedly. But I wanted
  // to give you all a chance to pass numbers in if you want.
  const lastArgs = process.argv.slice(3);

  if (lastArgs.length === 0) return Math.floor(Math.random() * 36) + 5;

  const chosenNumber = lastArgs[0];

  if (chosenNumber > 40 || chosenNumber < 5) {
    throw new Error('Please choose a number between 5 and 40');
  }

  return chosenNumber;
}

function findBestHand() {
  const cardAmount = getCardAmount();
  const deck = createRandomDeckOfNCards(cardAmount);

  const pokerHandService = new PokerHandService(deck);
  const bestHand = pokerHandService.findBestHand();

  return console.log(bestHand);
}

findBestHand();
