const inquirer = require('inquirer');
const { signUpPrompt, logInPrompt } = require('./userLoginSignUp');

const startApp = [{
  type: 'list',
  name: 'start',
  message: 'Ante-Up: A Terminal Based Multiplayer Texas Holdem Game',
  choices: ['Log In', 'Sign Up']
}];


const pokerApp = () => {
  inquirer.prompt(startApp)
    .then(choice => {
      switch(choice.start) {
        case 'Log In' :
          logInPrompt().then(pokerApp);
          break;
        case 'Sign Up': 
          signUpPrompt().then(pokerApp);
          break;
      }
    })
    .catch(err => {
      console.log('error:', err);
    });
};

module.exports = pokerApp;
