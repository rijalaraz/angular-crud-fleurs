const mysql = require('mysql');

const pool  = mysql.createPool({
    host     : 'db.dorianpharmatech.com',
    user     : 'lalaina',
    password : 'lalainalalaina',
    database : 'lalaina'
});

module.exports = pool;