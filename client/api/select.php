<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "blog";
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM blogs ORDER BY id DESC";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 results";
}
echo json_encode($data);
$conn->close();
?>
