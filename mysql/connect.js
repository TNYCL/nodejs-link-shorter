const mysql = require('mysql');
const log = require('../log');

var connection = mysql.createConnection({
    host: null,
    user: 'TNYCL',
    password: null,
    database: null,
    port: '3306'
});

connection.connect(function(error) {
    if(error) throw error;
});

module.exports = {connection};
