const inquirer = require('inquirer');
const { turnInputs, outOfTurnInputs, startHandInputs } = require('./tableInput');

const playerTurnPrompt = (socket) => 
  inquirer.prompt(turnInputs)
    .then(userChoice => userChoice);
    
const playerOutOfTurnPrompt = (socket) => 
  inquirer.prompt(outOfTurnInputs)
    .then(userChoice => userChoice);
    
const firstHandPrompt = (socket) => 
  inquirer.prompt(startHandInputs)
    .then(userChoice => userChoice);


module.exports = { playerTurnPrompt, playerOutOfTurnPrompt, firstHandPrompt };
