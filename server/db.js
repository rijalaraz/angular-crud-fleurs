const mysql = require('mysql');

const pool  = mysql.createPool({
    //host     : 'localhost',
    //user     : 'root',
    //password : '',
    //database : 'test'

    host     : 'db.dorianpharmatech.com',
    user     : 'lalaina',
    password : 'lalainalalaina',
    database : 'lalaina'
});

module.exports = pool;