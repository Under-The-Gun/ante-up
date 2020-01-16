const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a name'],
    unique: [true, 'name already taken'],
    maxlength: [25, 'Username should be less than 25 characters']
  },
  passwordHash: {
    type: String,
    required: [true, 'Please enter a password']
  }
  // bank: {
  //   type: Number,
  //   required: true,
  //   default: 1000
  // }
});

schema.virtual('password').set(function(password) {
  this.passwordHash = bcrypt.hashSync(password, 14);
});

schema.statics.authorize = async function({ name, password }) {
  const user = await this.findOne({ name });
  if(!user) {
    const err = new Error('Invalid Name/Password');
    err.status = 401;
    throw err;
  }

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if(!validPassword) {
    const err = new Error('Invalid name/Password');
    err.status = 401;
    throw err;
  }
  return user;
};

module.exports = mongoose.model('User', schema);
