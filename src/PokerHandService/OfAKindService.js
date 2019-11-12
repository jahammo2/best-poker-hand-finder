class OfAKindService {
  constructor(deck) {
    this._setRankAmounts(deck);
  }

  containsFourOfAKind() {
    return this.rankAmounts.indexOf(4) > -1;
  }

  containsFullHouse() {
    return this.rankAmounts.indexOf(3) > -1 &&
      this.rankAmounts.indexOf(2) > -1;
  }

  containsPair() {
    return this.rankAmounts.indexOf(2) > -1;
  }

  containsThreeOfAKind() {
    return this.rankAmounts.indexOf(3) > -1;
  }

  containsTwoPair() {
    const firstIndex = this.rankAmounts.indexOf(2);
    const lastIndex = this.rankAmounts.lastIndexOf(2);

    return firstIndex > -1 &&
      lastIndex > -1 &&
      firstIndex !== lastIndex;
  }

  // private

  _setRankAmounts(deck) {
    const suits = Object.keys(deck);

    // {
    //   '1': 3, // 3 threes in the deck
    //   '5': 4, // 4 sevens in the deck
    //   '6': 1, // 1 eight in the deck
    // }
    const hashOfRankAmounts = suits.reduce((accumulator, parentKey) => {
      const ranks = Object.keys(deck[parentKey]);

      for (let i = 0; i < ranks.length; i += 1) {
        const rank = ranks[i];

        if (accumulator[rank]) {
          accumulator[rank] += 1;
        } else {
          accumulator[rank] = 1;
        }
      }

      return accumulator;
    }, {});

    // [3, 4, 1]
    this.rankAmounts = Object.values(hashOfRankAmounts);
  }
}

module.exports = OfAKindService;
