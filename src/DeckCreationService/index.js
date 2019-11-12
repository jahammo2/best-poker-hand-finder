class DeckCreationService {
  constructor(n) {
    this.deck = {};
    this.n = n;
  }

  createRandomDeck() {
    for (let i = 0; i < this.n; i += 1) {
      this._addRandomCard();
    }

    return this.deck;
  }

  // private

  _addRandomCard() {
    const suitNumber = Math.ceil(Math.random() * 4);
    const suit = this._chooseSuit(suitNumber);
    const rank = Math.floor(Math.random() * 13);

    if (this.deck[suit] && this.deck[suit][rank]) return this._addRandomCard();
    if (!this.deck[suit]) this.deck[suit] = {};

    return this.deck[suit][rank] = true;
  }

  _chooseSuit(suitNumber) {
    switch (suitNumber) {
      case 1:
        return 'clubs';
      case 2:
        return 'diamonds';
      case 3:
        return 'hearts';
      default:
        return 'spades';
    }
  }
}

module.exports = DeckCreationService;
