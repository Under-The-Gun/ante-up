const inquirer = require('inquirer');
const { signUpPrompt, logInPrompt } = require('./userLoginSignUp');

const startApp = [{
  type: 'list',
  name: 'start',
  message: 'Ante-Up: A Terminal Based Multiplayer Texas Holdem Game',
  choices: ['log-in', 'sign-up']
}];

const startAppPrompt = (socket) =>
  inquirer.prompt(startApp)
    .then(choice => {
      switch(choice.start) {
        case 'log-in' :
          return logInPrompt(socket);
        case 'sign-up': 
          return signUpPrompt(socket);
      }
    });
module.exports = { startAppPrompt };
