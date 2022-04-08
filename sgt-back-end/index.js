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

app.post('/api/grades', (req, res) => {
  const postBody = req.body;
  const sql = `
    INSERT INTO "grades" ("name", "course", "score")
    VALUES ($1, $2, $3)
    RETURNING *;`;
  const values = [postBody.name, postBody.course, postBody.score];
  if (!postBody.name || !postBody.course || !postBody.score) {
    res.status(400).json({
      error: 'Must have a name, course and score field'
    });
  } else {
    if (postBody.score >= 0 && postBody.score <= 100 && Number.isInteger(Number(postBody.score))) {
      db.query(sql, values)
        .then(result => {
          res.status(201).json(result.rows);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({
            error: 'An unexpected error ocurred.'
          });
        });
    } else {
      res.status(400).json({
        error: 'score needs to be an integer from 0 to 100'
      });
    }
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const putBody = req.body;
  if (!Number.isInteger(gradeId) || gradeId <= 0 || !putBody.name || !putBody.course || !putBody.score) {
    res.status(400).json({
      error: 'Invalid gradeId or missing name, course or score field'
    });
    return;
  }
  const sql = `
  UPDATE "grades"
  SET "name" = $1,
      "course" = $2,
      "score" = $3
  WHERE "gradeId" = $4
  RETURNING *;
  `;
  const values = [putBody.name, putBody.course, putBody.score, gradeId];
  db.query(sql, values)
    .then(result => {
      const gradesArray = result.rows[0];
      if (!gradesArray) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'Invalid gradeId cannot delete'
    });
    return;
  }
  const sql = `
  DELETE FROM "grades"
  WHERE "gradeId" = $1
  RETURNING *`;
  const values = [gradeId];
  db.query(sql, values)
    .then(result => {
      const gradesArray = result.rows[0];
      if (!gradesArray) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.listen('3000', () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
