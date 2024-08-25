const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

//connct mongodb
mongoose
  .connect('mongodb://localhost:27017/student')
  .then(() => console.log('Connected!'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//initilize route
app.use('/api', require('./router/router'));

//error handeling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err.message });
});

app.listen(3001, () => console.log('how listnning your request'));
