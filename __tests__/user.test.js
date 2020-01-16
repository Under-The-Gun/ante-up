require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const User = require('../lib/model/User');

describe('user signup/in routes', () => {
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

  it('can signup a user with a name and password', () => {
    return request(app)
      .post('/api/v1/user/signup')
      .send({ name: 'MaryJane', password: 'Puppies', bank: 1000 })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'MaryJane',
          bank: 1000,
          passwordHash: expect.any(String),
          __v: 0
        });
      });
  });
  it('fails when no username is used', async () => {
    await User.create({ name: 'MarySue', password: 'Puppies', bank: 1000 });
    return request(app)
      .post('/api/v1/user/login')
      .send({ name: 'Mary', password: 'Puppies', bank: 1000 })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Invalid Name/Password',
          status: (401)
        });
      });
  });
  it('fails when invalid password is used', async () => {
    await User.create({ name: 'MarySue', password: 'Dogs', bank: 1000 });
    return request(app)
      .post('/api/v1/user/login')
      .send({ name: 'Mary', password: 'Puppies', bank: 1000 })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Invalid Name/Password',
          status: (401)
        });
      });
  });
});

