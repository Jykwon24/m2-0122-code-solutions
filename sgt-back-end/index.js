const express = require('express');
const app = express();

const jsonMethod = express.json();
app.use(jsonMethod);

const pg = require('pg');
// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    SELECT *
    FROM  "grades"`;
  const gradesArray = [];
  db.query(sql)
    .then(result => {
      for (const key in result.rows) {
        if (result.rows[key]) {
          gradesArray.push(result.rows[key]);
        }
      }
      res.status(200).json(gradesArray);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred.'
      });
    });
});

app.listen('3000', () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
