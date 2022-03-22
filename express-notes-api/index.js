const express = require('express');
const app = express();

const jsonMethod = express.json();
app.use(jsonMethod);

const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const key in data.notes) {
    if (!data.notes[key]) {
      res.status(200).json(dataArray);
    } else {
      dataArray.push(data.notes[key]);
    }
  }
  res.status(200).json(dataArray);
});

app.listen('3000', () => {

});
