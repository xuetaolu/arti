<?php
 $start=$_GET["start"] ;//index = 20
 $len=$_GET["len"];     //  len = 10   // index: 20 ~ 29 
 									   // MySQL: 21 ~ 30
 if($start >= 0 && $len > 0) {
 	 $firstPick = $start + $len;
	 $secondPick = $len;

	 header("charset=utf-8");

	 $conn = mysqli_connect("172.16.0.12", "root", "jnuzhxy-1s", "zhxy", "3333");//连接MYSQL数据库
	 
	if (!$conn) 
	{ 
	    die("连接错误: " . $conn->connect_error); 
	}

	 $sql = "SELECT * FROM (SELECT TOP $secondPick * FROM (SELECT TOP $firstPick * FROM news order by id desc) order by id desc) order by id desc";//响应请求
	 
	 $result = $conn->query($sql);

	 if ($result->num_rows > 0) {// 输出数据
	 
	    while($row = $result->fetch_assoc()) {
	 
	        echo json_encode($row);//将请求结果转换为json格式
	 
	    }
	 }
	 else {
	 	echo '';
	 }
 }
?>