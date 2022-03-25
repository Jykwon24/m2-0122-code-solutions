const express = require('express');
const app = express();
const fs = require('fs');

const jsonMethod = express.json();
app.use(jsonMethod);

const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const key in data.notes) {
    if (data.notes[key]) {
      dataArray.push(data.notes[key]);
    }
  }
  res.status(200).json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  const iD = req.params.id;
  if (data.notes[iD]) {
    if ((Math.sign(iD) === 1) && Number.isInteger(parseInt(iD)) && iD !== '0') {
      res.status(200).send(data.notes[iD]);
    }
    res.status(404).send({ error: `cannot find note with id ${iD}` });
  }
  res.status(400).send({ error: 'id must be a positive integer' });
}
);

app.post('/api/notes', (req, res) => {
  const postBody = req.body;
  const iD = data.nextId;
  if (!postBody.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (postBody.content) {
    postBody.id = iD;
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

app.delete('/api/notes/:id', (req, res) => {
  const iD = req.params.id;
  if (isNaN(parseInt(iD))) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[iD]) {
    res.status(404).send({ error: `cannot find note with id ${iD}` });
  } else if (data.notes[iD]) {
    delete data.notes[parseInt(iD)];
    const newDataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newDataJSON, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const iD = req.params.id;
  const putBody = req.body;
  if (isNaN(parseInt(iD))) {
    res.status(400).send({ error: 'id must be a postive integer' });
  } else if (!putBody.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (!data.notes[iD]) {
    res.status(404).send({ error: `cannot find note with id ${iD}` });
  } else if (data.notes[iD]) {
    putBody.id = parseInt(iD);
    data.notes[iD] = putBody;
    const newDataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newDataJSON, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured.' });
      } else {
        res.status(200).send(putBody);
      }
    });
  }
});

app.listen('3000', () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
