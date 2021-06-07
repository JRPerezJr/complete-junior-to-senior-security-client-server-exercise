const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const winston = require('winston');

const PORT = 3000;

const bodyParser = require('body-parser');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(helmet());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));

app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'index.html'))
);

app.post('/secret', (req, res) => {
  let forwarded = req.headers['x-forwarded-for'];
  let ip = forwarded ? forwarded.split(/, /)[0] : req.socket.remoteAddress;
  const { userInput } = req.body;
  console.log(userInput);
  if (userInput) {
    winston.log('info', `user ip: ${ip} with user input: ${userInput}`);
    res.status(200).json('success');
  } else {
    winston.error('This guy at ' + ip + ' is messing with us:' + userInput);
    res.status(400).json('incorrect submission');
  }
});

app.listen(PORT, () => console.log(`🦄 Flying high on port ${PORT}`));
