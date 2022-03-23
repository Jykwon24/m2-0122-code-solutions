const express = require('express');
const app = express();
const fs = require('fs');

const jsonMethod = express.json();
app.use(jsonMethod);

const data = require('./data.json');
const dataArray = [];

app.get('/api/notes', (req, res) => {
  for (const key in data.notes) {
    if (!data.notes[key]) {
      res.status(200).json(dataArray);
    } else {
      dataArray.push(data.notes[key]);
    }
  }
  res.status(200).json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const iD = req.params.id;
  if (isNaN(parseInt(iD))) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[iD]) {
    res.status(200).send(data.notes[iD]);
  } else if (!data.notes[iD]) {
    res.status(404).send({ error: `cannot find note with id ${iD}` });
  }
}
);

app.post('/api/notes', (req, res) => {
  const postBody = req.body;
  const iD = data.nextId;
  if (!postBody.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (postBody.content) {
    postBody.id = iD;
    dataArray.push(postBody);
    data.notes[iD] = postBody;
    data.nextId++;
    const newDataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newDataJSON, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).send(postBody);
      }
    });
  }
});

app.listen('3000', () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
