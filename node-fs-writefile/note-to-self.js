const fs = require('fs');

const txtContent = process.argv[2];

const data = new Uint8Array(Buffer.from(txtContent));

fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});
