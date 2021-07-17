const mysql = require('./connect');
const log = require('../log');

async function setData(key, value) {
    var sql = "INSERT INTO short_link (short_key, link) VALUES ('"+key+"', '"+value+"')";
    mysql.connection.query(sql, (error) => {
        if(error) throw error;
    });
}

async function getData(key, callback) {
    var sql = "SELECT * FROM short_link WHERE link='"+key+"'";
    mysql.connection.query(sql, (error, result) => {
        if(error) throw error;
        if(result == '') {
            return callback(null, null);
        } else {
            return callback(null, result[0].short_key);
        }
    });
}

module.exports = {setData,getData};