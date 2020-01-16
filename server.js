/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require('dotenv').config();
require('./lib/utils/connect')();
const colors = require('colors');
const app = require('./lib/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Started on ${PORT} ♠ ♥ ♣ ♦`.cyan.bold);
});
