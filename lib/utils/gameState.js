const Hand = require('pokersolver').Hand;
const { newDeck, shuffle } = require('../deck/deck');

module.exports = class GameState {
  constructor() {
    this.users = {};
    this.hands = {};
    this.board = {};
    this.deck = [];
    this.readiedUp = [];
    this.inLobby = true;
  }

  reshuffle() {
    let tempDeck = newDeck();
    shuffle(tempDeck, 1500);
    this.deck = tempDeck;
  }

  dealCards() {
    // Declare a hand for each user and assign in gameState.hands
    Object.keys(this.users).forEach(socketId => {
      this.hands[socketId] = { cardOne: this.deck.pop(), cardTwo: this.deck.pop() };
    });
    
    this.board = { cardThree: this.deck.pop(), cardFour: this.deck.pop(), cardFive: this.deck.pop(), cardSix: this.deck.pop(), cardSeven: this.deck.pop() };
  }

  solveHands() {
    const winningData = {
      winningSockets: [],
      winningHandDescription: ''
    };
    // Extract the card strings from each two hold cards and the card strings from the entire board
    const socketIdArray = Object.keys(this.hands);
    const holdCardArray = Object.values(this.hands).map(hand => Object.values(hand));
    const boardCardArray = Object.values(this.board);

    // Combine into an array of arrays of holds + board cards
    const sevenCardArray = holdCardArray.map(holdCards => [...holdCards, ...boardCardArray]);

    // Transform that array of raw strings into Hand objects that pokersolver can use
    const sevenCardHandArray = sevenCardArray.map(sevenCards => Hand.solve(sevenCards));

    const winners = Hand.winners(sevenCardHandArray);

    winningData.winningHandDescription = winners[0].descr;

    for(let i = 0; i < socketIdArray.length; i++) {
      if(sevenCardHandArray[i].descr === winningData.winningHandDescription) {
        winningData.winningSockets.push(socketIdArray[i]);
      }
    }

    return winningData;
  }
};

// We want to also have a GameState instance method like solveHands that returns each socketId as a key and each two hold cards + five public cards as a value
// Now we are returning the winning socketIds and the winning hand
