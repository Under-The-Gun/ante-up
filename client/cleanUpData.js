const colors = require('colors');

const colorCard = (card) => {
  switch(card.suit) {
    case 'HEARTS': 
      card.visual.forEach(line => line = line.brightMagenta);
      break;

    case 'DIAMONDS': 
      card.visual.forEach(line => line = line.brightRed);
      break;

    case 'CLUBS': 
      card.visual.forEach(line => line = line.brightYellow);
      break;

    case 'SPADES': 
      card.visual.forEach(line => line = line.brightGreen);
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
      console.log(`The winning hand was a ${data.winningHandDescription}.`);
      break;
  }
};

module.exports = { cleanUpCards };
