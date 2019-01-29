const mongoose = require('mongoose');
const City = require('./models/City.js');

mongoose.connect('mongodb://localhost/cities', (err) => {
  if (err) {
    throw err;
  }
  console.log('connected to mongoDB');
});

const find = (callback) => {
  City.find((err, res) => {
    if (err) {
      throw err;
    }
    callback(null, res);
  }).lean();
};

module.exports = { find };
