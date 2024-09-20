<?php
if (isset($_POST['method'])) {
   $_POST['method']();
}

function read()
{
   include "connection.php";
   $query = "SELECT * FROM rsvp ORDER BY id DESC";
   $hasil_query = mysqli_query($koneksi, $query);
   while($data = mysqli_fetch_assoc($hasil_query)){
      $response[] = $data;
   }
   echo json_encode($response);
}

function store()
{
    include "connection.php";
    $response = ['success' => false];

    $nama = $_POST['nama_lengkap'];
    $status = $_POST['status'];
    $ucapan = $_POST['ucapan'];

    if($nama == "" || $status == "" | $ucapan == ""){
      echo json_encode($response);
      exit;
    }

    $query = "INSERT INTO rsvp VALUES (null, '$nama', '$status', '$ucapan')";
    $hasil_query = mysqli_query($koneksi, $query);
    $response = ($hasil_query) ? ['success' => true] : ['success' => false];
    echo json_encode($response);
}
?>