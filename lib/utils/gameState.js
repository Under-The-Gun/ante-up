const Hand = require('pokersolver').Hand;
const { newDeck, shuffle } = require('../deck/deck');

module.exports = class GameState {
  constructor() {
    this.users = {};
    this.hands = {};
    this.board = {};
    this.deck = [];
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
      winningUserNames: [],
      winningHandDescription: ''
    };
    // Extract the card strings from each two hold cards and the card strings from the entire board
    const holdCardArray = Object.values(this.hands).map(hand => Object.values(hand));
    const boardCardArray = Object.values(this.board);

    // Combine into an array of arrays of holds + board cards
    const sevenCardArray = holdCardArray.map(holdCards => [...holdCards, ...boardCardArray]);

    // Transform that array of raw strings into Hand objects that pokersolver can use
    const sevenCardHandArray = sevenCardArray.map(sevenCards => Hand.solve(sevenCards));

    const winners = Hand.winners(sevenCardHandArray);

    // Set the description of the winning hand
    winningData.winningHandDescription = winners[0].descr;

    // Pure functions to find winning sockets
    const makeSocketAndOneCardObj = user => {
      const key = user[0];
      const value = user[1].cardOne;
      return { userId: key, cardOne: value };
    };

    const mungeHandData = hand => {
      let mungedCardValues = [];
      hand.cardPool.forEach(card => mungedCardValues.push(card.value + card.suit));
      return mungedCardValues;
    };
    
    const mungeHandArray = handArray => {
      return handArray.map(hand => mungeHandData(hand));
    };

    const matchUsersToWinningHands = user => {
      const handDataArray = mungeHandArray(winners);
      let winMatcher = false;
      handDataArray.forEach(hand => {
        if(hand.includes(user.cardOne)) winMatcher = true; 
      });
      return winMatcher;
    };

    // Run the hands through the pipe and retrieve the winning socketIds
    winningData.winningSockets = Object.entries(this.hands)
      .map(makeSocketAndOneCardObj)
      .filter(matchUsersToWinningHands)
      .map(userObj => userObj.userId);

    // Add the winning user names to the winning data object
    winningData.winningUserNames = winningData.winningSockets.map(socketId => this.users[socketId].username);

    return winningData;
  }
};
