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
    //   console.log(res);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
  });