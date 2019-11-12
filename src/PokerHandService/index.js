const FlushService = require('./FlushService');
const OfAKindService = require('./OfAKindService');
const StraightService = require('./StraightService');

class PokerHandService {
  constructor(deck) {
    this.deck = deck;
    this.flushService = new FlushService(deck);
    this.ofAKindService = new OfAKindService(deck);
    this.straightService = new StraightService(deck);
  }

  findBestHand() {
    if (this.flushService.containsRoyalFlush()) return 'royal flush';
    if (this.flushService.containsStraightFlush()) return 'straight flush';
    if (this.ofAKindService.containsFourOfAKind()) return 'four of a kind';
    if (this.ofAKindService.containsFullHouse()) return 'full house';
    if (this.flushService.containsFlush()) return 'flush';
    if (this.straightService.containsStraight()) return 'straight';
    if (this.ofAKindService.containsThreeOfAKind()) return 'three of a kind';
    if (this.ofAKindService.containsTwoPair()) return 'two pair';
    if (this.ofAKindService.containsPair()) return 'pair';

    return 'high card';
  }
}

module.exports = PokerHandService;
