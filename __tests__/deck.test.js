const { newDeck, shuffle } = require('../lib/deck/deck');

describe('deck methods', () => {
  it('can generate a static deck array', () => {
    const testDeck = newDeck();
    expect(testDeck).toEqual([
      {
        'suit': 'DIAMONDS',
        'value': '6',
        'code': '6d'
      },
      {
        'suit': 'CLUBS',
        'value': 'QUEEN',
        'code': 'Qc'
      },
      {
        'suit': 'CLUBS',
        'value': '6',
        'code': '6c'
      },
      {
        'suit': 'SPADES',
        'value': '5',
        'code': '5s'
      },
      {
        'suit': 'SPADES',
        'value': 'QUEEN',
        'code': 'Qs'
      },
      {
        'suit': 'CLUBS',
        'value': 'KING',
        'code': 'Kc'
      },
      {
        'suit': 'CLUBS',
        'value': '5',
        'code': '5c'
      },
      {
        'suit': 'HEARTS',
        'value': 'JACK',
        'code': 'Jh'
      },
      {
        'suit': 'SPADES',
        'value': 'ACE',
        'code': 'As'
      },
      {
        'suit': 'DIAMONDS',
        'value': '10',
        'code': 'Td'
      },
      {
        'suit': 'SPADES',
        'value': '3',
        'code': '3s'
      },
      {
        'suit': 'DIAMONDS',
        'value': '3',
        'code': '3d'
      },
      {
        'suit': 'DIAMONDS',
        'value': '2',
        'code': '2d'
      },
      {
        'suit': 'CLUBS',
        'value': '10',
        'code': '10c'
      },
      {
        'suit': 'DIAMONDS',
        'value': '7',
        'code': '7d'
      },
      {
        'suit': 'DIAMONDS',
        'value': '4',
        'code': '4d'
      },
      {
        'suit': 'HEARTS',
        'value': '9',
        'code': '9h'
      },
      {
        'suit': 'HEARTS',
        'value': '7',
        'code': '7h'
      },
      {
        'suit': 'HEARTS',
        'value': '6',
        'code': '6h'
      },
      {
        'suit': 'HEARTS',
        'value': 'QUEEN',
        'code': 'Qh'
      },
      {
        'suit': 'CLUBS',
        'value': 'ACE',
        'code': 'Ac'
      },
      {
        'suit': 'DIAMONDS',
        'value': 'ACE',
        'code': 'Ad'
      },
      {
        'suit': 'HEARTS',
        'value': 'ACE',
        'code': 'Ah'
      },
      {
        'suit': 'SPADES',
        'value': '10',
        'code': 'Ts'
      },
      {
        'suit': 'CLUBS',
        'value': '2',
        'code': '2c'
      },
      {
        'suit': 'HEARTS',
        'value': '5',
        'code': '5h'
      },
      {
        'suit': 'SPADES',
        'value': '2',
        'code': '2s'
      },
      {
        'suit': 'CLUBS',
        'value': '4',
        'code': '4c'
      },
      {
        'suit': 'DIAMONDS',
        'value': '8',
        'code': '8d'
      },
      {
        'suit': 'DIAMONDS',
        'value': 'KING',
        'code': 'Kd'
      },
      {
        'suit': 'HEARTS',
        'value': '4',
        'code': '4h'
      },
      {
        'suit': 'HEARTS',
        'value': '10',
        'code': '10h'
      },
      {
        'suit': 'SPADES',
        'value': '9',
        'code': '9s'
      },
      {
        'suit': 'CLUBS',
        'value': '7',
        'code': '7c'
      },
      {
        'suit': 'SPADES',
        'value': '7',
        'code': '7s'
      },
      {
        'suit': 'SPADES',
        'value': '8',
        'code': '8s'
      },
      {
        'suit': 'DIAMONDS',
        'value': 'QUEEN',
        'code': 'Qd'
      },
      {
        'suit': 'HEARTS',
        'value': '3',
        'code': '3h'
      },
      {
        'suit': 'HEARTS',
        'value': '8',
        'code': '8h'
      },
      {
        'suit': 'CLUBS',
        'value': '8',
        'code': '8c'
      },
      {
        'suit': 'SPADES',
        'value': '6',
        'code': '6s'
      },
      {
        'suit': 'SPADES',
        'value': 'JACK',
        'code': 'Js'
      },
      {
        'suit': 'SPADES',
        'value': 'KING',
        'code': 'Ks'
      },
      {
        'suit': 'CLUBS',
        'value': '3',
        'code': '3c'
      },
      {
        'suit': 'DIAMONDS',
        'value': '5',
        'code': '5d'
      },
      {
        'suit': 'DIAMONDS',
        'value': '9',
        'code': '9d'
      },
      {
        'suit': 'CLUBS',
        'value': '9',
        'code': '9c'
      },
      {
        'suit': 'DIAMONDS',
        'value': 'JACK',
        'code': 'Jd'
      },
      {
        'suit': 'HEARTS',
        'value': '2',
        'code': '2h'
      },
      {
        'suit': 'SPADES',
        'value': '4',
        'code': '4s'
      },
      {
        'suit': 'CLUBS',
        'value': 'JACK',
        'code': 'Jc'
      },
      {
        'suit': 'HEARTS',
        'value': 'KING',
        'code': 'Kh'
      }
    ]);
  });

  it('can shuffle a deck array', () => {
    const testDeckOne = newDeck();
    shuffle(testDeckOne, 1000);

    expect(testDeckOne).not.toEqual([
      {
        'suit': 'DIAMONDS',
        'value': '6',
        'code': '6d'
      },
      {
        'suit': 'CLUBS',
        'value': 'QUEEN',
        'code': 'Qc'
      },
      {
        'suit': 'CLUBS',
        'value': '6',
        'code': '6c'
      },
      {
        'suit': 'SPADES',
        'value': '5',
        'code': '5s'
      },
      {
        'suit': 'SPADES',
        'value': 'QUEEN',
        'code': 'Qs'
      },
      {
        'suit': 'CLUBS',
        'value': 'KING',
        'code': 'Kc'
      },
      {
        'suit': 'CLUBS',
        'value': '5',
        'code': '5c'
      },
      {
        'suit': 'HEARTS',
        'value': 'JACK',
        'code': 'Jh'
      },
      {
        'suit': 'SPADES',
        'value': 'ACE',
        'code': 'As'
      },
      {
        'suit': 'DIAMONDS',
        'value': '10',
        'code': 'Td'
      },
      {
        'suit': 'SPADES',
        'value': '3',
        'code': '3s'
      },
      {
        'suit': 'DIAMONDS',
        'value': '3',
        'code': '3d'
      },
      {
        'suit': 'DIAMONDS',
        'value': '2',
        'code': '2d'
      },
      {
        'suit': 'CLUBS',
        'value': '10',
        'code': '10c'
      },
      {
        'suit': 'DIAMONDS',
        'value': '7',
        'code': '7d'
      },
      {
        'suit': 'DIAMONDS',
        'value': '4',
        'code': '4d'
      },
      {
        'suit': 'HEARTS',
        'value': '9',
        'code': '9h'
      },
      {
        'suit': 'HEARTS',
        'value': '7',
        'code': '7h'
      },
      {
        'suit': 'HEARTS',
        'value': '6',
        'code': '6h'
      },
      {
        'suit': 'HEARTS',
        'value': 'QUEEN',
        'code': 'Qh'
      },
      {
        'suit': 'CLUBS',
        'value': 'ACE',
        'code': 'Ac'
      },
      {
        'suit': 'DIAMONDS',
        'value': 'ACE',
        'code': 'Ad'
      },
      {
        'suit': 'HEARTS',
        'value': 'ACE',
        'code': 'Ah'
      },
      {
        'suit': 'SPADES',
        'value': '10',
        'code': 'Ts'
      },
      {
        'suit': 'CLUBS',
        'value': '2',
        'code': '2c'
      },
      {
        'suit': 'HEARTS',
        'value': '5',
        'code': '5h'
      },
      {
        'suit': 'SPADES',
        'value': '2',
        'code': '2s'
      },
      {
        'suit': 'CLUBS',
        'value': '4',
        'code': '4c'
      },
      {
        'suit': 'DIAMONDS',
        'value': '8',
        'code': '8d'
      },
      {
        'suit': 'DIAMONDS',
        'value': 'KING',
        'code': 'Kd'
      },
      {
        'suit': 'HEARTS',
        'value': '4',
        'code': '4h'
      },
      {
        'suit': 'HEARTS',
        'value': '10',
        'code': '10h'
      },
      {
        'suit': 'SPADES',
        'value': '9',
        'code': '9s'
      },
      {
        'suit': 'CLUBS',
        'value': '7',
        'code': '7c'
      },
      {
        'suit': 'SPADES',
        'value': '7',
        'code': '7s'
      },
      {
        'suit': 'SPADES',
        'value': '8',
        'code': '8s'
      },
      {
        'suit': 'DIAMONDS',
        'value': 'QUEEN',
        'code': 'Qd'
      },
      {
        'suit': 'HEARTS',
        'value': '3',
        'code': '3h'
      },
      {
        'suit': 'HEARTS',
        'value': '8',
        'code': '8h'
      },
      {
        'suit': 'CLUBS',
        'value': '8',
        'code': '8c'
      },
      {
        'suit': 'SPADES',
        'value': '6',
        'code': '6s'
      },
      {
        'suit': 'SPADES',
        'value': 'JACK',
        'code': 'Js'
      },
      {
        'suit': 'SPADES',
        'value': 'KING',
        'code': 'Ks'
      },
      {
        'suit': 'CLUBS',
        'value': '3',
        'code': '3c'
      },
      {
        'suit': 'DIAMONDS',
        'value': '5',
        'code': '5d'
      },
      {
        'suit': 'DIAMONDS',
        'value': '9',
        'code': '9d'
      },
      {
        'suit': 'CLUBS',
        'value': '9',
        'code': '9c'
      },
      {
        'suit': 'DIAMONDS',
        'value': 'JACK',
        'code': 'Jd'
      },
      {
        'suit': 'HEARTS',
        'value': '2',
        'code': '2h'
      },
      {
        'suit': 'SPADES',
        'value': '4',
        'code': '4s'
      },
      {
        'suit': 'CLUBS',
        'value': 'JACK',
        'code': 'Jc'
      },
      {
        'suit': 'HEARTS',
        'value': 'KING',
        'code': 'Kh'
      }
    ]);
  });
});
