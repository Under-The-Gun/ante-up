const inquirer = require('inquirer');
const { turnInputs, outOfTurnInputs, startHandInputs } = require('./tableInput');

const playerTurnPrompt = () => 
  inquirer.prompt(turnInputs)
    .then(userChoice => userChoice);
    
const playerOutOfTurnPrompt = () => 
  inquirer.prompt(outOfTurnInputs)
    .then(userChoice => userChoice);
// const proceed = () => {
//         inquirer.prompts
// };
const firstHandPrompt = () => 
  inquirer.prompt(startHandInputs)
    .then(userChoice => userChoice);

module.exports = { playerTurnPrompt, playerOutOfTurnPrompt, firstHandPrompt };
