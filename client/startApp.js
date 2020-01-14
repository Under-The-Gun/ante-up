const inquirer = require('inquirer');
const socket = require('socket.io-client')('http://localhost:7890');
const { signUpPrompt, logInPrompt } = require('./userLoginSignUp');
socket.on('disconnect', function() {
  socket.emit('disconnect');
});

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
module.exports = { pokerApp };
