const express = require('express');
const app = express();

let nextId = 1;
let grades = {};
const arr = [];

const jsonMethod = express.json();
app.use(jsonMethod);

app.post('/api/grades', (req, res) => {
  grades = req.body;
  req.body.id = nextId;
  arr.push(grades);
  nextId++;
  res.status(201).json(grades);
});

app.get('/api/grades', (req, res) => {
  res.json(arr);
});

app.listen(3000, () => {

}
);
