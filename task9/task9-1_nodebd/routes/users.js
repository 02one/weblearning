var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'root',
	database:'bdnews'
});
/* 管理员界面 */
router.get('/admin', function(req, res, next) {

  connection.connect();
  connection.query('SELECT * FROM `news`  WHERE (`deleted` = 0)',[newstype],function(err,rows,fields){
			// console.log(newstype);
			res.json(rows);
		});
});

module.exports = router;
