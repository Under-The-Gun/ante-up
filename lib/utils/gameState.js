const Hand = require('pokersolver').Hand;

module.exports = class GameState {
  constructor() {
    this.hands = {};
    this.board = {};
  }

  solveHands() {
    // Extract the card strings from each two hold cards and the card strings from the entire board
    const holdCardArray = Object.values(this.hands).map(hand => Object.values(hand));
    const boardCardArray = Object.values(this.board);

    // Combine into an array of arrays of holds + board cards
    const sevenCardArray = holdCardArray.map(holdCards => [...holdCards, ...boardCardArray]);

    // Transform that array of raw strings into Hand objects that pokersolver can use
    const sevenCardHandArray = sevenCardArray.map(sevenCards => Hand.Solve(sevenCards));

    const winners = Hand.winners(sevenCardHandArray);

    return winners[0].toString();

  }
};

// Winners is an array of all the winning hands. If length = 1, only one winning hand. If length is more than one, multiple winners, send back all of the winners, and eventually split the pot
// We find the winning hand
// We can print out or grab the cardPool property which is all seven cards
// Now we need to match the two cards in each hold to the seven cardPool cards
// return that socketId as the winner + return that winning hands hand.descr
// go through each Hand's cardPool and find the one that contains the two hold cards and that is the socketId we return
