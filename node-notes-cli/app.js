const dataList = require('./data.json');
const fs = require('fs');

const key = process.argv[2];
const newValue = process.argv[3];
const keyValue = parseInt(newValue);
const updateValue = process.argv[4];

if (key === 'read') {
  for (const prop in dataList.notes) {
    console.log(`${prop}: ${dataList.notes[prop]}`);
  }
} else if (key === 'create') {
  dataList.notes[dataList.nextId] = newValue;
  dataList.nextId++;
  const newDataJSON = JSON.stringify(dataList, null, 2);
  fs.writeFile('./data.json', newDataJSON, err => {
    if (err) throw err;
  });
} else if (key === 'update') {
  for (const prop in dataList.notes) {
    if (newValue === prop) {
      dataList.notes[newValue] = updateValue;
    }
  }
  const newDataJSON = JSON.stringify(dataList, null, 2);
  fs.writeFile('./data.json', newDataJSON, err => {
    if (err) throw err;
  });
} else if (key === 'delete') {
  delete dataList.notes[keyValue];
  const newDataJSON = JSON.stringify(dataList, null, 2);
  fs.writeFile('./data.json', newDataJSON, err => {
    if (err) throw err;
  });
}
