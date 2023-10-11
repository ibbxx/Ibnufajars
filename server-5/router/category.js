const express = require ('express');
const router = express.Router();
const pool = require('../config/db')

router.get('/', function (request, response) {
    pool.query('SELECT * FROM category', (error, results) => {
        if (error) {
            throw error;
        }
        response.send(results.rows);
    });
});

router.get('/:categoryId/film', function (request, response) {
    response.send(`kategori ${request.params.categoryId} punya list film ....`);
});

module.exports = router;
