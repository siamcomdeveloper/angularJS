<?php
$data = json_decode(file_get_contents("php://input"));
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "blog";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "INSERT INTO blogs (topic, content, user_id)
VALUES ('$data->topic', '$data->content', 9)";
$qry = $conn->query($sql);
$conn->close();
?>
