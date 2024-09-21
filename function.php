<?php
session_start();

// Function to generate a CSRF token
function generateCsrfToken() {
    return bin2hex(random_bytes(32));
}

// If there's no CSRF token in the session, create one
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = generateCsrfToken();
}

// Set security headers
header("Content-Security-Policy: default-src 'self'; script-src 'self';");
header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header("X-Content-Type-Options: nosniff");
header("Content-Security-Policy: default-src 'self';");
header_remove("X-Powered-By"); // Remove the X-Powered-By header

if (isset($_POST['method']) && in_array($_POST['method'], ['read', 'store'])) {
   call_user_func($_POST['method']);
} else {
   echo json_encode(['success' => false, 'message' => 'Invalid method.']);
   exit;
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

    $nama = mysqli_real_escape_string($koneksi, $_POST['nama_lengkap']);
    $nama = trim($nama);
    $status = mysqli_real_escape_string($koneksi, $_POST['status']);
    $status = trim($status);
    $ucapan = mysqli_real_escape_string($koneksi, $_POST['ucapan']);
    $ucapan = trim($ucapan);

   if (empty($nama) || empty($status) || empty($ucapan)) {
      echo json_encode(['success' => false, 'message' => 'All fields are required.']);
      exit;
    }

    $query = "INSERT INTO rsvp VALUES (null, '$nama', '$status', '$ucapan')";
    $hasil_query = mysqli_query($koneksi, $query);
    $response = ($hasil_query) ? ['success' => true] : ['success' => false];
    echo json_encode($response);
}
?>