
<?php
	header("Content-type:application/json;charset=utf-8");
	// $link = mysqli_connect('localhost', 'root', 'root','bdNews',3306);
	require_once('db.php');

		$newsid = $_POST{'newsid'};		
		$sql = "UPDATE `news` SET `news`.`deleted`='1' WHERE `id`='{$newsid}'";
		mysqli_query($link, $sql);


		echo json_encode(array('successDeletedID:'=>$newsid));

	mysqli_close($link);
?>
