const fs = require('fs');
const txt = process.argv[2];

fs.readFile(txt, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
