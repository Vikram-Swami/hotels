const mongoose = require('mongoose');
const { type } = require('os');

const personSchma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
});

const Person = mongoose.model('person', personSchma);
module.exports = Person;
