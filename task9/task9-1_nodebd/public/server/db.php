
<?php
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('localhost', 'root', 'root','bdNews',3306);
	if (!$link) {
		die("数据库连接失败");
	}
	mysqli_query($link, "set names utf8");
?>