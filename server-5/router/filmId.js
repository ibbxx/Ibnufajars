const express = require ('express');
const router = express.Router();
const pool = require('../config/db')



router.get('/filmId/:id', (req, res)=>{
    const film_id = req.params.id
    pool.query('SELECT * FROM film WHERE film_id=$1', [film_id], (error, result)=>{
        if(error) throw error
        res.send(result.rows).status(200)
    })
})

module.exports = router