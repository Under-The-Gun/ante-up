const cleanUpCards = (data, type) => {
  switch(type) {
    case 'hold':
      data.cardOne.visual.forEach((line, index) => console.log(`${data.cardOne.visual[index]} ${data.cardTwo.visual[index]}`));
      break;

    case 'board':
      data.cardThree.visual.forEach((line, index) => console.log(`${data.cardThree.visual[index]}${data.cardFour.visual[index]}${data.cardFive.visual[index]}${data.cardSix.visual[index]}${data.cardSeven.visual[index]}`));
      break;

    case 'winner':
      data.winningUserNames.forEach(user => console.log(`${user} has won!`));
      console.log(`The winning hand was a ${data.winningHandDescription}.`);
      break;
  }
};

module.exports = { cleanUpCards };
