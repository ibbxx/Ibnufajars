const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Rute GET untuk menampilkan film berdasarkan kategori
router.get('/categoryFilm/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  pool.query('SELECT * FROM film f INNER JOIN film_category fc ON fc.film_id = f.film_id WHERE fc.category_id = $1',
    [categoryId],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.json(results.rows);
    }
  );
});

module.exports = router;
