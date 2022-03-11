const fs = require('fs');

const randomNum = Math.random();
const stringNum = randomNum.toString();

const data = new Uint8Array(Buffer.from(stringNum));

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
