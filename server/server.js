const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).send('Pong! 🏓')
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});