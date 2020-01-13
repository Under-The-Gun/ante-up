
const turnOptions = [
  {
    type: 'list',
    name: 'turn-choice',
    message: 'It\'s your turn, choose from the following options.',
    choices: ['call', 'raise', 'check', 'fold', 'table status']
  }
];
const outOfTurnOptions = [
  {
    type: 'list',
    name: 'out-of-turn-choice',
    message: 'You may choose from the following.',
    choices: ['chat', 'table status', 'leave table']
  }
];


module.exports = { turnOptions, outOfTurnOptions }
;
