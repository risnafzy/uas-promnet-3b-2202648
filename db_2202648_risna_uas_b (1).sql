-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jan 2024 pada 11.17
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2202648_risna_uas_b`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi_keuangan_risna`
--

CREATE TABLE `transaksi_keuangan_risna` (
  `id` int(100) NOT NULL,
  `date` date NOT NULL,
  `description` text NOT NULL,
  `amount` bigint(20) NOT NULL,
  `status` enum('debit','kredit') NOT NULL,
  `receiver` varchar(50) NOT NULL,
  `jk` enum('P','L') NOT NULL,
  `no_telp` varchar(13) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `transaksi_keuangan_risna`
--

INSERT INTO `transaksi_keuangan_risna` (`id`, `date`, `description`, `amount`, `status`, `receiver`, `jk`, `no_telp`, `address`) VALUES
(3, '2023-01-03', 'Pemasukan donasi', 3000000, 'debit', 'Risna nurfauzii', 'L', '081219893075', 'Jln. tanjungsiang no. 14 kota. Subang'),
(4, '2024-01-02', 'Pembelian Bahan Baku', 2000000, 'kredit', 'Agus', 'L', '081234567843', 'Jln. gegerkalong no. 100 kota. Bandung'),
(5, '2023-01-26', 'Sewa ruangan', 500000, 'kredit', 'Clara', 'P', '098212348954', 'Jln. cimahi no. 23 kota. cimahi'),
(12, '2024-01-06', 'kebutuhan mendesak', 150000, 'debit', 'jesica', 'P', '0981234543', 'setiabudhi'),
(14, '2024-01-07', 'sewa audit', 1500000, 'debit', 'feri rotin', 'L', '085212345432', 'setiabudhi');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `transaksi_keuangan_risna`
--
ALTER TABLE `transaksi_keuangan_risna`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `transaksi_keuangan_risna`
--
ALTER TABLE `transaksi_keuangan_risna`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
