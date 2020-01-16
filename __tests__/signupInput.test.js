require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const signupInput = require('../client/signupInput');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const User = require('../lib/model/User');

describe('user signupInput/in routes', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  afterAll(() => {
    mongoose.connection.dropDatabase();
    // return mongoose.connection.close();
  });

  it('can signupInput a user with a username and password', () => {
    return request(app)
      .post('/api/v1/user/signupInput')
      .send({ username: 'MaryJane', password: 'Puppies' })//bank: 1000 })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'MaryJane',
          // bank: 1000,
          passwordHash: expect.any(String),
          __v: 0
        });
      });
  });
  it('fails when no username is used', async () => {
    await User.create({ username: 'MarySue', password: 'Puppies', bank: 1000 });
    return request(app)
      .post('/api/v1/user/login')
      .send({ username: 'Mary', password: 'Puppies', bank: 1000 })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Invalid Name/Password',
          status: (401)
        });
      });
  });
  it('fails when invalid password is used', async () => {
    await User.create({ username: 'MarySue', password: 'Dogs', bank: 1000 });
    return request(app)
      .post('/api/v1/user/login')
      .send({ username: 'Mary', password: 'Puppies', bank: 1000 })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Invalid Name/Password',
          status: (401)
        });
      });
  });
});

