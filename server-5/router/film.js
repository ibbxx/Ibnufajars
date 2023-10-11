const express = require ('express');
const router = express.Router();
const pool = require  ('../config/db')

router.get('/film', function (request, response) {
    {
        pool.query('SELECT * FROM public.film ORDER BY film_id ASC', (error,results) =>{
            if(error){
                throw error; 
            }
            response.status(200).json(results.rows)
        })
    }
});

module.exports = router; 
 