// Generates a static deck object taken from deck of cards api
function newDeck() {
  const staticDeck = [
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
      'value': 'T',
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
      'value': 'T',
      'code': 'Tc'
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
      'value': 'T',
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
      'value': 'T',
      'code': 'Th'
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
  ];

  return staticDeck;
}

// Takes a deck object shaped like staticDeck and a number of swaps to perform, and randomly swaps cards within the deck to generate a freshly shuffled deck. Void method.
function shuffle(deck, swaps) {
  for(let i = 0; i < swaps; i++)
  {
    let firstSwap = Math.floor((Math.random() * deck.length));
    let secondSwap = Math.floor((Math.random() * deck.length));
    let temp = deck[firstSwap];
    deck[firstSwap] = deck[secondSwap];
    deck[secondSwap] = temp;
  }
}

module.exports = { newDeck, shuffle };
