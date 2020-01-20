/* eslint-disable no-unused-vars */
const inquirer = require('inquirer');
const { signUpPrompt, logInPrompt } = require('./userLoginSignUp');
const colors = require('colors');


const devsInput = [
  {
    type: 'list',
    name: 'developers',
    message: 'Developers: Seth Ripman, Matt Munch, Eve Stockstill, Caleb Pendergraft',
    choices: ['log-in', 'sign-up']
  }
];

const devsPrompt = (socket) =>
  inquirer.prompt(devsInput)
    .then(choice => {
      switch(choice.developers) {
        case 'log-in' :
          return logInPrompt(socket);
        case 'sign-up': 
          return signUpPrompt(socket);
      }
    });
module.exports = { devsPrompt };
