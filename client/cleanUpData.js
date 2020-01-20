/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const colors = require('colors');

const colorCard = (card) => {
  switch(card.suit) {
    case 'HEARTS': 
      card.visual = card.visual.map(line => line = line.brightRed.bold);
      break;

    case 'DIAMONDS': 
      card.visual = card.visual.map(line => line = line.brightCyan.bold);
      break;

    case 'CLUBS': 
      card.visual = card.visual.map(line => line.brightGreen.bold);
      break;

    case 'SPADES': 
      card.visual = card.visual.map(line => line = line.brightYellow.bold);
      break;
  }
};

const cleanUpCards = (data, type) => {
  switch(type) {
    case 'hold':
      colorCard(data.cardOne);
      colorCard(data.cardTwo);
      data.cardOne.visual.forEach((line, index) => console.log(`                           ${data.cardOne.visual[index]}` + '  ' + `${data.cardTwo.visual[index]}`));
      break;

    case 'board':
      colorCard(data.cardThree);
      colorCard(data.cardFour);
      colorCard(data.cardFive);
      colorCard(data.cardSix);
      colorCard(data.cardSeven);
      data.cardThree.visual.forEach((line, index) => console.log(`      ${data.cardThree.visual[index]}` + `  ${data.cardFour.visual[index]}` + `  ${data.cardFive.visual[index]}` + `  ${data.cardSix.visual[index]}` + `  ${data.cardSeven.visual[index]}`));
      break;

    case 'winner':
      data.winningUserNames.forEach(user => console.log(`${user} has won!`));
      console.log(`The winning hand was a ${data.winningHandDescription}.`.bold);
      break;
  }
};

module.exports = { cleanUpCards };
