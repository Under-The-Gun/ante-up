const suits = [
  { name: 'DIAMONDS', code: 'd', icon: '♦' },
  { name: 'CLUBS', code: 'c', icon: '♣' },
  { name: 'SPADES', code: 's', icon: '♠' },
  { name: 'HEARTS', code: 'h', icon: '♥' }
];

const values = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'J',
  'Q',
  'K',
  'A'
];

const createCard = (icon, value) => [
  '┌───────────┐',
  `│ ${value}       ${icon} │`,
  '│           │',
  '│           │',
  `│     ${icon}     │`,
  '│           │',
  '│           │',
  `│ ${icon}       ${value} │`,
  '└───────────┘'
]

function newDeck() {
  return suits.flatMap(suit => values.map(value => ({
    suit: suit.name,
    value,
    code: `${value}${suit.code}`,
    'visual': createCard(suit.icon, value)
  })));
}

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

console.log(newDeck());
