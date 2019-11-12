class StraightService {
  constructor(deck) {
    this.deck = deck;
  }

  containsStraight() {
    const onlyRanksHash = Object.keys(this.deck).reduce((accumulator, parentKey) => {
      return Object.assign(accumulator, this.deck[parentKey]);
    }, {});

    return Object.keys(onlyRanksHash).some(value => {
      if (value > 8) return false;

      const number = Number(value);

      return onlyRanksHash[number + 1] &&
        onlyRanksHash[number + 2] &&
        onlyRanksHash[number + 3] &&
        onlyRanksHash[number + 4];
    });
  }
}

module.exports = StraightService;
