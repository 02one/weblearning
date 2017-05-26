
<?php
	header("Content-type:application/json;charset=utf-8");
	// $link = mysqli_connect('localhost', 'root', 'root','bdNews',3306);
	require_once('db.php');

	$newsid = $_GET['newsid'];
	mysqli_query($link, "set names utf8");
	//注意sql语句要用“”括起来！！
	$sql = "SELECT * FROM `news` WHERE `id` = {$newsid}" ;		
	$result = mysqli_query($link,$sql);
	$senddata = array();
	while($row = mysqli_fetch_assoc($result)){
		array_push($senddata, array(
									'id'=>$row['id'],
									'newstype'=>$row['newstype'],
									'newsimg'=>$row['newsimg'],
									'newstime'=>$row['newstime'],
									'newstitle'=>$row['newstitle']

			));
	}
	echo json_encode($senddata);
?>