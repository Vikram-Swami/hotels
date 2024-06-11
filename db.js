const mongoose = require('mongoose');
require('dotenv').config();


// const mongodbURL = process.env.MONGO_DB_LOCAL_URL;
const mongodbURL = process.env.MONGO_DB_URL;

mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('connected');
});
db.on('disconnected', () => {
  console.log('disconnected');
});
db.on('error', (err) => {
  console.log('error:', err);
});

module.exports = db;
