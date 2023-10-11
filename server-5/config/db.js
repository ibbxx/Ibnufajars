const Pool = require('pg').Pool
const pool = new Pool ({
    user : 'postgres',
    host : 'localhost',
    database: 'ibnu',
    password: '140421',
    port : 5432,
})

module.exports = pool