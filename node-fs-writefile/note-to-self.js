const fs = require('fs');

const txtContent = process.argv[2];

fs.writeFile('note.txt', txtContent, err => {
  if (err) throw err;
});
