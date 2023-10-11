const fs = require('fs')
const Pool = require('pg').Pool
const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'ibnu',
    password: '140421',
    port: 5432,
})
const seedQuery = fs.readFileSync('db/seeding.sql', { encoding: 'utf-8'})
pool.query(seedQuery,(err,res) =>{
    console.log (err,res)
    pool.end()
})