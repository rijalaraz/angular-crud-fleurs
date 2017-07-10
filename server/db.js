const mysql = require('mysql');

const pool  = mysql.createPool({
    host     : 'db.dorianpharmatech.com',
    user     : 'lalaina',
    password : 'lalainalalaina',
    database : 'lalaina'


    //host     : 'localhost',
    //user     : 'root',
    //password : '',
    //database : 'test'
});

module.exports = pool;