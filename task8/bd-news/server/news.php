<?php
	header("Content-type:application/json;charset=utf-8");
	// $link = mysqli_connect('localhost', 'root', 'root','bdNews',3306);
	require_once("db.php");
	
		// refreshNews()有无带参数：带参数的用来区分显示导航条目
		// 						没带参数则有用来刷新新闻列表
		if (@$_GET["newsType"]) {
			$newstype = $_GET["newsType"];
			$sql = "SELECT * FROM `news` WHERE `newstype` = '{$newstype}' and `deleted`='0' ";
		}else{
			$sql = "SELECT * FROM news WHERE `deleted`='0'";
		}
		// 中文显示
		// mysqli_query($link, "set names utf8");
		// 执行sql语句
		$result = mysqli_query($link, $sql);
		$senddata = array();
		while($row = mysqli_fetch_assoc($result)){
			array_push($senddata, array(
										'id'=>$row['id'],
										'newstype'=>$row['newstype'],
										'newsimg'=>$row['newsimg'],
										'newstime'=>$row['newstime'],
										'newstitle'=>$row['newstitle'],
										'newsdeleted'=>$row['deleted']


				));
		}
		// 返回数据
		echo json_encode($senddata);	


?>