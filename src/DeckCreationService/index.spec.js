const DeckCreationService = require('./index.js');

describe('DeckCreationService', () => {
  describe('createRandomDeck', () => {
    let createRandomDeck;
    let deckCreationService;
    let n;

    beforeEach(() => {
      n = Math.floor(Math.random() * 36) + 5;
      deckCreationService = new DeckCreationService(n);
      createRandomDeck = deckCreationService.createRandomDeck();
    });

    it('returns a hash', () => {
      const keys = Object.keys(createRandomDeck);
      expect(keys.length).toBeGreaterThan(0);
    });

    it('returns a deck of cards equal to the number passed in', () => {
      const values = Object.values(createRandomDeck).reduce((accumulator, suitArray) => {
        const ranks = Object.keys(suitArray);
        ranks.forEach(suit => accumulator.push(suit));
        return accumulator;
      }, []);

      expect(values).toHaveLength(n);
    });
  });
});
