class FlushService {
  constructor(deck) {
    this.deck = deck;
    this._setRankArraysBySuit(deck);
  }

  containsStraightFlush() {
    return this.rankArraysBySuit.some(arrayOfRanks => {
      if (arrayOfRanks.length < 5) return false;

      return this._containsFiveStraight(arrayOfRanks);
    });
  }

  // I recognize that this can be redundant if I ran
  // containsStraightFlush first. But I'm making the
  // intentional decision to check for a flush on its
  // own because I don't want its result to be a
  // side effect of containsStraightFlush. For
  // example, setting `this.containsAFlush = true` in
  // containsStraightFlush then return that value here
  containsFlush() {
    return this.rankArraysBySuit.some(arrayOfRanks => arrayOfRanks.length >= 5);
  }

  containsRoyalFlush() {
    return this.rankArraysBySuit.some(arrayOfRanks => arrayOfRanks.indexOf('8') > -1 &&
      arrayOfRanks.indexOf('9') > -1 &&
      arrayOfRanks.indexOf('10') > -1 &&
      arrayOfRanks.indexOf('11') > -1 &&
      arrayOfRanks.indexOf('12') > -1);
  }

  // private

  _buildSuitArray(ranks) {
    const suitArray = [];

    for (let i = 0; i < 13; i += 1) {
      suitArray[i] = false;
    }

    for (let i = 0; i < ranks.length; i += 1) {
      const rank = ranks[i];
      suitArray[rank] = true;
    }

    return suitArray;
  }

  _containsFiveStraight(ranks) {
    const suitArray = this._buildSuitArray(ranks);

    return suitArray.some((value, i) => {
      if (i > 8) return false;

      return value &&
        suitArray[i + 1] &&
        suitArray[i + 2] &&
        suitArray[i + 3] &&
        suitArray[i + 4];
    }, false);
  }

  _setRankArraysBySuit(deck) {
    // [
    //   [1, 2], // spades
    //   [1, 4, 5], // hearts
    // ]
    this.rankArraysBySuit = Object.keys(deck).reduce((accumulator, parentKey) => {
      const cardsInSuit = deck[parentKey];
      const ranks = Object.keys(cardsInSuit);

      accumulator.push(ranks);

      return accumulator;
    }, []);
  }
}

module.exports = FlushService;
