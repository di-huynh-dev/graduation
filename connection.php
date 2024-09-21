<?php
$koneksi = mysqli_connect("localhost", "root", "", "devtier1_eriskawed");

// Check connection
if ($koneksi->connect_error) {
    die("Connection failed: " . $koneksi->connect_error);
}
?>