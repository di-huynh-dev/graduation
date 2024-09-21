<?php
$koneksi = mysqli_connect("localhost", "devtier1_eriska", "eriska@devtier1337", "devtier1_eriskawed");

// Check connection
if ($koneksi->connect_error) {
    die("Connection failed: " . $koneksi->connect_error);
}
?>