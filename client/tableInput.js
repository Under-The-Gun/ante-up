
const turnInputs = [
  {
    type: 'list',
    name: 'turn-choice',
    message: 'It\'s your turn, choose from the following options.',
    choices: ['table-status', 'call', 'raise', 'check', 'fold']
  }
];

const outOfTurnInputs = [
  {
    type: 'list',
    name: 'out-of-turn-choice',
    message: 'You may choose from the following options.',
    choices: ['table-status', 'chat', 'leave-table']
  }
];

const startHandInputs = [
  {
    type: 'list',
    name: 'deal-hands',
    message: 'You may choose from the following options.',
    choices: ['deal-hands']
  }
];



module.exports = { turnInputs, outOfTurnInputs, startHandInputs  }
;
