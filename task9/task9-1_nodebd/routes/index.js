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
/* 百度新闻界面 */
router.get('/', function(req, res, next) {
	  var newstype = req.query.newsType;

	connection.connect();
	// if (newstype) {
		connection.query('SELECT * FROM `news`  WHERE (`deleted` = 0)  AND (`newstype` = ?)',[newstype],function(err,rows,fields){
			// console.log(newstype);
			res.json(rows);
		});
	// }
	// else if(newstype == 0){
	// 	connection.query('SELECT * FROM news WHERE `deleted` = 0 ',function(err,rows,fields){
	// 	// console.log(rows);
	// 	// console.log("newstype:"+newstype);
	// 	res.json(rows);
	// 	});
	// }


});

module.exports = router;



// 文件结构是这么个结构。然后现在要实现在前端'bd-news.js'文件中把要请求的数据发给后端，后端app.js和rotes/index.js两个文件用来处理接收前端的请求数据，再反馈给前端。
// 问题1：前端的JS文件中的ajax的url要如何写？问题2：app.js中的绑定监听要如何实现？接收到的请求数据如何转交给index.js；问题3：index中如何获得请求的这个数据，然后反馈回去？