-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 20, 2024 at 11:56 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eriskawed_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `rsvp`
--

CREATE TABLE `rsvp` (
  `id` int NOT NULL,
  `nama_lengkap` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ucapan` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `rsvp`
--

INSERT INTO `rsvp` (`id`, `nama_lengkap`, `status`, `ucapan`) VALUES
(1, 'Bambang', 'Hadir', 'Selamat'),
(2, 'Sutejo', 'Tidak Hadir', 'Selamat yaa, maaf tidak hadir'),
(3, 'Sutejo', 'Tidak Hadir', 'Selamat yaa, maaf tidak hadir'),
(4, 'Marni', 'Hadir', 'asddsa'),
(5, 'Sukma', 'Hadir', 'asaasd'),
(6, 'Sukma', 'Hadir', 'asaasd'),
(7, 'Bambang Rojaq', 'Hadir', 'yeah'),
(10, 'Rah', 'Hadir', 'urahhh'),
(11, 'Nami Swan', 'Tidak Hadir', 'cuwk giloo'),
(12, 'Jhon', 'Tidak Hadir', 'hhhh'),
(13, 'Helo', 'Hadir', 'go go'),
(14, 'Sukma sss', 'Hadir', 'sasadds'),
(15, 'Sukma', 'Hadir', 'dssdsd'),
(16, 'hhhhh', 'Hadir', 'gjhgjhjhg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rsvp`
--
ALTER TABLE `rsvp`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rsvp`
--
ALTER TABLE `rsvp`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
