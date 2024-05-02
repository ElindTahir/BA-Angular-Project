const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bachelordatabase',
  password: 'root',
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Der Server läuft und ist bereit, Anfragen zu empfangen!');
  });
  
  app.get('/api/items', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM bachelorDummyData');
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get('/age-data', async (req, res) => {
    try {
      const query = `
        SELECT CASE
          WHEN alter BETWEEN 18 AND 23 THEN '18-23'
          WHEN alter BETWEEN 24 AND 28 THEN '24-28'
          WHEN alter BETWEEN 29 AND 38 THEN '29-38'
          WHEN alter BETWEEN 39 AND 47 THEN '39-47'
          WHEN alter BETWEEN 48 AND 60 THEN '48-60'
          ELSE 'Other'
        END AS age_group,
        COUNT(*) AS count
        FROM bachelordummydata
        GROUP BY age_group
        ORDER BY age_group;
      `;
      const result = await pool.query(query);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  
  app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
  });