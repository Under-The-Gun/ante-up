
const turnInputs = [
  {
    type: 'list',
    name: 'turn-choice',
    message: 'It\'s your turn, choose from the following Inputs.',
    choices: ['call', 'raise', 'check', 'fold', 'table status']
  }
];

const outOfTurnInputs = [
  {
    type: 'list',
    name: 'out-of-turn-choice',
    message: 'You may choose from the following.',
    choices: ['chat', 'table status', 'leave table']
  }
];

const startHandInputs = [
  {
    type: 'list',
    name: 'start-hand',
    message: 'You may choose from the following.',
    choices: ['deal hands', 'chat', 'leave table']
  }
];



module.exports = { turnInputs, outOfTurnInputs, startHandInputs  }
;
