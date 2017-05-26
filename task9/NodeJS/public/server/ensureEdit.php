
<?php
	header("Content-type:application/json;charset=utf-8");
	// $link = mysqli_connect('localhost', 'root', 'root','bdNews',3306);
	require_once('db.php');

		//插入新闻
		$newsId = $_POST['newsId'];
		$newsType = $_POST['newsType'];
		$newsTopic = $_POST['newsTopic'];
		$newsImg = $_POST['newsImg'];
		$newsDate = $_POST['newsDate'];

		//sql语句的书写格式要注意，大小写敏感，单引号，单斜引号要特别注意！！
		// (`newstype`,`newstitle`,`newsimg`,`newstime`) VALUES ('{$newsType}','{$newsTopic}','{$newsImg}','{$newsDate}') 
		$sql = "UPDATE `news` SET `newstype` = '{$newsType}', `newstitle` = '{$newsTopic}' ,`newsimg` = '{$newsImg}' ,`newstime` = '{$newsDate}' WHERE id={$newsId}";
		$result = mysqli_query($link, $sql);

		echo json_encode(array('success'=>$result ));



?>