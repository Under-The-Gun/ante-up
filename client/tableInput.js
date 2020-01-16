/* eslint-disable no-unused-vars */
const colors = require('colors');
const turnInputs = [
  {
    type: 'list',
    name: 'turn-choice',
    message: 'It\'s your turn, choose from the following options.'.yellow.bgWhite,
    choices: ['table-status', 'call'.yellow, 'raise'.red, 'check'.green, 'fold'.white]
  }
];

const outOfTurnInputs = [
  {
    type: 'list',
    name: 'out-of-turn-choice',
    message: 'You may choose from the following options.',
    choices: ['table-status', 'chat', 'leave-table'.red]
  }
];

const startHandInputs = [
  {
    type: 'list',
    name: 'deal-hands',
    message: 'You may choose from the following options.'.cyan.bold,
    choices: ['deal-hands']
  }
];
const lobbyInputs = [
  {
    type: 'list',
    name: 'lobby',
    message: 'Enter the game here.',
    choices: ['start-game']
  }
];



module.exports = { turnInputs, outOfTurnInputs, startHandInputs, lobbyInputs  }
;
