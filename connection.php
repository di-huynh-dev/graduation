<?php
$koneksi = mysqli_connect("localhost", "root", "", "eriskawed_db");

// Check connection
if ($koneksi->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>