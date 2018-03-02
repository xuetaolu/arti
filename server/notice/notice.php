<?php
 $startRow=$_GET["startRow"] ;//接收参数
 $endRow=$_GET["endRow"];
 
 header("charset=utf-8");

 $conn = mysqli_connect("localhost", "root", "jnuzhxy-1s", "zhxy", "3333");//连接MYSQL数据库
 
if (!$conn) 
{ 
    die("连接错误: " . $conn->connect_error); 
} 

 $sql = "SELECT * FROM news";//响应请求
 
 $result = $conn->query($sql);

 if ($result->num_rows > 0) {// 输出数据
 
    while($row = $result->fetch_assoc()) {
 
        echo json_encode($row);//将请求结果转换为json格式
 
    }
}
?>