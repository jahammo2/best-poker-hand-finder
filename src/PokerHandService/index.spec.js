const PokerHandService = require('./index.js');

function returnsRoyalFlush(deck) {
  let pokerHandService;

  beforeEach(() => {
    pokerHandService = new PokerHandService(deck);
  });

  it('outputs royal flush', () => {
    expect(pokerHandService.findBestHand()).toEqual('royal flush');
  });
}

describe('PokerHandService', () => {
  describe('findBestHand', () => {
    let pokerHandService;

    describe('with a royal flush in the deck', () => {
      const deck = {
        spades : {
          8  : true,
          9  : true,
          10 : true,
          11 : true,
          12 : true,
        },
      };

      returnsRoyalFlush(deck);
    });

    describe('with a straight flush in the deck', () => {
      describe('with a lower ranked hand in the deck as well', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              7  : true,
              8  : true,
              9  : true,
              10 : true,
              11 : true,
            },

            // four of a kind
            clubs    : { 8 : true },
            diamonds : { 8 : true },
            hearts   : { 8 : true },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs straight flush', () => {
          expect(pokerHandService.findBestHand()).toEqual('straight flush');
        });
      });

      describe('with a higher ranked hand in the deck as well', () => {
        const deck = {
          spades : {
            7  : true,
            8  : true,
            9  : true,
            10 : true,
            11 : true,
            12 : true,
          },
        };

        returnsRoyalFlush(deck);
      });
    });

    describe('with a four of a kind in the deck', () => {
      describe('with a lower ranked hand in the deck as well', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              7 : true,
              8 : true,
            },

            clubs : {
              8 : true,
              9 : true,
            },

            // full house between here, clubs, and spades
            diamonds : {
              8 : true,
              9 : true,
            },

            hearts : {
              1 : true,
              2 : true,
              3 : true,
              4 : true,
              8 : true,
            },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs four of a kind', () => {
          expect(pokerHandService.findBestHand()).toEqual('four of a kind');
        });
      });

      describe('with a higher ranked hand in the deck as well', () => {
        const deck = {
          // royal flush
          spades : {
            7  : true,
            8  : true,
            9  : true,
            10 : true,
            11 : true,
            12 : true,
          },

          clubs : {
            8 : true,
            9 : true,
          },

          diamonds : {
            8 : true,
            9 : true,
          },

          hearts : {
            1 : true,
            2 : true,
            3 : true,
            4 : true,
            8 : true,
          },
        };

        returnsRoyalFlush(deck);
      });
    });

    describe('with a full house in the deck', () => {
      describe('with a lower ranked hand in the deck as well', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              7 : true,
              8 : true,
            },

            clubs : {
              8 : true,
              9 : true,
            },

            // full house between here, clubs, and spades
            diamonds : {
              8 : true,
              9 : true,
            },

            // flush
            hearts : {
              1 : true,
              2 : true,
              3 : true,
              4 : true,
              6 : true,
            },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs full house', () => {
          expect(pokerHandService.findBestHand()).toEqual('full house');
        });
      });

      describe('with a higher ranked hand in the deck as well', () => {
        const deck = {
          // royal flush
          spades : {
            7  : true,
            8  : true,
            9  : true,
            10 : true,
            11 : true,
            12 : true,
          },

          clubs : {
            8 : true,
            9 : true,
          },

          // full house between here, clubs, and spades
          diamonds : {
            8 : true,
            9 : true,
          },
        };

        returnsRoyalFlush(deck);
      });
    });

    describe('with a flush in the deck', () => {
      describe('with a lower ranked hand in the deck as well', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              1 : true,
              2 : true,
            },

            clubs : {
              3 : true,
              4 : true,
            },

            // straight between here, clubs, and spades
            diamonds : {
              5 : true,
              9 : true,
            },

            // flush
            hearts : {
              1 : true,
              2 : true,
              3 : true,
              4 : true,
              6 : true,
            },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs flush', () => {
          expect(pokerHandService.findBestHand()).toEqual('flush');
        });
      });
    });

    describe('with a straight in the deck', () => {
      describe('with a lower ranked hand in the deck as well', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              1 : true,
              2 : true,
              3 : true,
            },

            clubs : {
              3 : true,
              4 : true,
            },

            // straight between here, clubs, and spades
            diamonds : {
              5 : true,
              9 : true,
            },

            // three of a kind between here, spades, and clubs
            hearts : {
              3  : true,
              10 : true,
              11 : true,
              12 : true,
            },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs straight', () => {
          expect(pokerHandService.findBestHand()).toEqual('straight');
        });
      });
    });

    describe('with a three of a kind in the deck', () => {
      describe('with a lower ranked hand in the deck as well', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              2 : true,
              9 : true,
            },

            // pair between here and spades
            diamonds : {
              1 : true,
              9 : true,
            },

            // three of a kind between here, spades, and diamonds
            hearts : {
              3 : true,
              9 : true,
            },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs three of a kind', () => {
          expect(pokerHandService.findBestHand()).toEqual('three of a kind');
        });
      });
    });

    describe('with a two pair in the deck', () => {
      describe('with a lower ranked hand in the deck as well', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              2 : true,
              9 : true,
            },

            // high card here
            diamonds : {
              1  : true,
              10 : true,
            },

            // two pair between here, spades, and diamonds
            hearts : {
              1 : true,
              2 : true,
            },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs two pair', () => {
          expect(pokerHandService.findBestHand()).toEqual('two pair');
        });
      });
    });

    describe('with a pair in the deck', () => {
      describe('with a lower ranked hand in the deck as well', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              3 : true,
              4 : true,
              8 : true,
              9 : true,
            },

            // high card here
            diamonds : {
              1  : true,
              10 : true,
            },

            // pair between here and diamonds
            hearts : {
              1 : true,
              2 : true,
            },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs pair', () => {
          expect(pokerHandService.findBestHand()).toEqual('pair');
        });
      });
    });

    describe('with just a high card', () => {
      beforeEach(() => {
        const deck = {
          // randomly bad cards
          clubs : {
            6 : true,
          },
          diamonds : {
            2 : true,
          },
          hearts : {
            3 : true,
          },
          spades : {
            7  : true,
            10 : true,
            12 : true,
          },
        };

        pokerHandService = new PokerHandService(deck);
      });

      it('returns high card by default', () => {
        expect(pokerHandService.findBestHand()).toEqual('high card');
      });
    });

    // More complex combos

    describe('with many cards in the deck 18+', () => {
      describe('with a full house in the deck', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              1  : true,
              2  : true,
              10 : true,
              11 : true,
            },

            clubs : {
              0  : true,
              4  : true,
              10 : true,
              12 : true,
            },

            diamonds : {
              0  : true,
              2  : true,
              5  : true,
              7  : true,
              9  : true,
              11 : true,
            },

            hearts : {
              1 : true,
              2 : true,
              3 : true,
              4 : true,
              6 : true,
            },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs full house', () => {
          expect(pokerHandService.findBestHand()).toEqual('full house');
        });
      });

      describe('with a four of a kind in the deck', () => {
        beforeEach(() => {
          const deck = {
            spades : {
              1  : true,
              2  : true,
              7  : true,
              8  : true,
              10 : true,
              11 : true,
            },

            clubs : {
              0  : true,
              2  : true,
              6  : true,
              7  : true,
              8  : true,
              10 : true,
              12 : true,
            },

            diamonds : {
              0  : true,
              2  : true,
              5  : true,
              7  : true,
              9  : true,
              11 : true,
              12 : true,
            },

            hearts : {
              1  : true,
              2  : true,
              3  : true,
              5  : true,
              6  : true,
              9  : true,
              10 : true,
              11 : true,
            },
          };

          pokerHandService = new PokerHandService(deck);
        });

        it('outputs four of a kind', () => {
          expect(pokerHandService.findBestHand()).toEqual('four of a kind');
        });
      });
    });
  });
});
