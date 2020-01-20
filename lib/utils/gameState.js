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
  
    const holdCardArray = Object.values(this.hands).map(hand => Object.values(hand));
    const boardCardArray = Object.values(this.board);
    const sevenCardArray = holdCardArray.map(holdCards => [...holdCards, ...boardCardArray]
      .map(holdCards => holdCards.code));

    const sevenCardHandArray = sevenCardArray.map(sevenCards => Hand.solve(sevenCards));

    const winners = Hand.winners(sevenCardHandArray);

    winningData.winningHandDescription = winners[0].descr;

    const makeSocketAndOneCardObj = user => {
      const key = user[0];
      const thisname = this.users[key].username;
      const value = user[1].cardOne;
      return { userId: key, username: thisname, cardOne: value };
    };

    const mungeHandData = hand => hand.cardPool.map(card => card.value + card.suit);
    
    const mungeHandArray = handArray => handArray.map(hand => mungeHandData(hand));

    const matchUsersToWinningHands = user => {
      const handDataArray = mungeHandArray(winners);
      let winMatcher = false;
      handDataArray.forEach(hand => {
        if(hand.includes(user.cardOne.code)) winMatcher = true; 
      });
      return winMatcher;
    };
    
    winningData.winningSockets = Object.entries(this.hands)
      .map(makeSocketAndOneCardObj)
      .filter(matchUsersToWinningHands)
      .map(userObj => userObj.userId);

    winningData.winningUserNames = winningData.winningSockets.map(socketId => this.users[socketId].username);
    return winningData;
  }
};
