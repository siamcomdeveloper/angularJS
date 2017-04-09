<?php
$data = json_decode(file_get_contents("php://input"));
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "blog";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "UPDATE blogs SET
topic ='$data->topic', content ='$data->content' WHERE id = $data->id ";

$qry = $conn->query($sql);
$conn->close();
?>
