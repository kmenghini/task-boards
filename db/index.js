const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllBoardsForUser = function(userName, callback) {
  const queryString = `SELECT boards.id, boards.name, boards.is_favorite FROM boards INNER JOIN users ON boards.user_id=users.id AND users.name=?;`;
  connection.query(queryString, userName, function (err, res) {
    if (err) {
      console.log(err);
      callback(err);
    } else if (res) {
      callback(res);
    }
  });
}

module.exports = {
  getAllBoardsForUser
};