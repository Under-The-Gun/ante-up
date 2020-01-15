const Hand = require('pokersolver').Hand;

module.exports = class GameState {
  constructor() {
    this.hands = {};
    this.board = {};
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

// Winners is an array of all the winning hands. If length = 1, only one winning hand. If length is more than one, multiple winners, send back all of the winners, and eventually split the pot
// We find the winning hand
// We can print out or grab the cardPool property which is all seven cards
// Now we need to match the two cards in each hold to the seven cardPool cards
// return that socketId as the winner + return that winning hands hand.descr
// go through each Hand's cardPool and find the one that contains the two hold cards and that is the socketId we return

// ready for next = everyone's bet = betsize which starts at big blind each round of betting
// 1. Emit each player's hold cards
// ready for next = everyone's bet = betsize which starts at big blind each round of betting
// 2. Emit cardThree, cardFour, cardFive
// ready for next = everyone's bet = betsize which starts at big blind each round of betting
// 3. Emit cardSix
// ready for next = everyone's bet = betsize which starts at big blind each round of betting
// 4. Emit cardSeven
// ready for next = everyone's bet = betsize which starts at big blind each round of betting
// 5. Emit the winning hands, considering that some hands will have folded

// Immediate goal: socketId of the winner (which could be 2+) and the one winning hand
// Return an array of the winning sockets and the one winning hand

// hands is a set of socketId:holdCards
// sevenCardHandArray[item].cardPool is the seven cards in each hand
// We want to filter hands down to the hands where the hold cards are inside that cardpool of the winning hands and push the socketId into the winningData object
