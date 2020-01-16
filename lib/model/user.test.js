/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const User = require('./User');


describe('User model', () => {
  it('has a required username', () => {
    const user = new User();
    const { errors } = user.validateSync();
    expect(errors.username.message).toEqual('Please add a name');
  });
  it('has a title less than 25 characters', () => {
    const user = new User({
      username: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    });
    const { errors } = user.validateSync();
    expect(errors.username.message).toEqual('Username should be less than 25 characters');
  });
  it('has a required password', () => {
    const user = new User({
      username: 'eve'

    });
    const { errors } = user.validateSync();
    expect(errors.passwordHash.message).toEqual('Please enter a password');
  });
});



