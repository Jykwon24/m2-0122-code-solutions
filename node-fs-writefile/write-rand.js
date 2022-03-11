const fs = require('fs');

const randomNum = Math.random();
const stringNum = randomNum.toString();

fs.writeFile('random.txt', stringNum, err => {
  if (err) throw err;
});
