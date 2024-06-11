const express = require('express');
const db = require('./db');
const PersonRouter = require('./router/personRouters');
const app = express();
const bodyParser = require('body-parser');
const { parse } = require('path');
app.use(bodyParser.json());
require('dotenv').config();
app.use('/person', PersonRouter);
const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
