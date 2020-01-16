const { Router } = require('express');
const User = require('../model/User');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    console.log('it works!!');
    User
      .create(req.body)
      .then(user => {
        res.send(user);
      })
      .catch(next);
  })

  .post('/login', (req, res, next) => {
    console.log('it works!!');
    User
      .authorize(req.body)
      .then(user => {
        res.send(user);
      })
      .catch(next);
  });

