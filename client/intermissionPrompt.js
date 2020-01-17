/* eslint-disable no-unused-vars */
const inquirer = require('inquirer');
const colors = require('colors');

const intermissionInput = [{
  type: 'list',
  name: 'intermission',
  message: 'Play another game'.cyan.bold,
  choices: ['play-again', 'leave-table']
}];

const intermissionPrompt = (socket) =>
  inquirer.prompt(intermissionInput)
    .then(choice => {
      switch(choice.intermission) {
        case 'play-again' :
            
          socket.emit('deal-player-cards');
          break;
        case 'leave-table': 
          return new Promise((resolve, reject) => {
            socket.disconnect();
            reject();
          }); 
      }
    });

module.exports = { intermissionPrompt };
