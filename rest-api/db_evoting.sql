-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2023 at 04:49 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_evoting`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_login` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `last_login`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'admin@admin.com', '$2a$12$yHrUJdjHuoby2hwsi83GzeSy8JqkU0AwSmMgdIH115K3hbYwgEeLi', '2023-04-20 17:36:18', '2023-04-20 10:36:18', '2023-04-20 10:36:18');

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `id_candidate` bigint(20) UNSIGNED NOT NULL,
  `id_student` bigint(20) UNSIGNED NOT NULL,
  `vision` text NOT NULL,
  `mission` text NOT NULL,
  `picture` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `candidate`
--

INSERT INTO `candidate` (`id_candidate`, `id_student`, `vision`, `mission`, `picture`, `created_at`, `updated_at`) VALUES
(4, 3, 'undefined', 'undefined', 'uploads/1685691267-ga-boleh.png', '2023-04-20 14:25:18', '2023-06-02 07:34:27'),
(6, 6, 'fadsfdf', 'fsafa', 'uploads/1685692533-FB_IMG_1683031275507.jpg', '2023-06-01 04:54:55', '2023-06-02 07:55:33'),
(7, 7, 'fdasfas', 'fdsafsad', 'uploads/1685688865-FB_IMG_1683031275507.jpg', '2023-06-02 06:54:25', '2023-06-02 06:54:25'),
(8, 8, 'fdsfdas', 'fasfads', 'uploads/1685688999-ga-boleh.png', '2023-06-02 06:56:39', '2023-06-02 06:56:39'),
(9, 9, 'fasdfads', 'fdasfdas', 'uploads/1685689042-kecewa.jpg', '2023-06-02 06:57:22', '2023-06-02 06:57:22');

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id_class` bigint(20) UNSIGNED NOT NULL,
  `id_student` bigint(20) UNSIGNED NOT NULL,
  `class_name` enum('X IPA 1','X IPA 2','X IPA 3','XI IPA 1','XI IPA 2','XI IPA 3','XII IPA 1','XII IPA 2','XII IPA 3','X IPS 1','X IPS 2','X IPS 3','XI IPS 1','XI IPS 2','XI IPS 3','XII IPS 1','XII IPS 2','XII IPS 3') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id_class`, `id_student`, `class_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'XII IPA 2', '2023-04-20 12:01:35', '2023-04-20 12:01:35'),
(3, 3, 'XII IPA 2', '2023-04-20 12:04:00', '2023-04-20 12:04:00'),
(6, 6, 'XII IPA 1', '2023-04-20 12:06:11', '2023-04-20 12:06:11'),
(7, 7, 'XII IPA 1', '2023-04-20 12:06:48', '2023-04-20 12:06:48'),
(8, 8, 'XII IPA 1', '2023-04-20 12:07:26', '2023-04-20 12:07:26'),
(9, 9, 'XII IPA 3', '2023-04-20 12:08:58', '2023-04-20 12:08:58'),
(10, 10, 'XII IPA 3', '2023-04-20 12:10:35', '2023-04-20 12:10:35'),
(11, 11, 'XII IPA 1', '2023-05-21 15:32:15', '2023-05-21 15:32:15'),
(12, 12, 'XII IPA 2', '2023-05-21 15:43:43', '2023-05-21 15:43:43'),
(13, 13, 'XII IPA 2', '2023-05-26 11:15:56', '2023-05-26 11:15:56'),
(14, 14, 'XII IPA 2', '2023-05-31 08:34:59', '2023-05-31 08:34:59');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `id_log` bigint(20) UNSIGNED NOT NULL,
  `module` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `useraccess` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`id_log`, `module`, `action`, `useraccess`, `created_at`, `updated_at`) VALUES
(1, 'register', 'register akun', 'ruth31@example.com', '2023-04-20 12:01:35', '2023-04-20 12:01:35'),
(2, 'login', 'login akun', 'ruth31@example.com', '2023-04-20 12:01:35', '2023-04-20 12:01:35'),
(3, 'register', 'register akun', 'jmorar@example.org', '2023-04-20 12:03:10', '2023-04-20 12:03:10'),
(4, 'login', 'login akun', 'jmorar@example.org', '2023-04-20 12:03:10', '2023-04-20 12:03:10'),
(5, 'register', 'register akun', 'uwehner@example.net', '2023-04-20 12:04:00', '2023-04-20 12:04:00'),
(6, 'login', 'login akun', 'uwehner@example.net', '2023-04-20 12:04:00', '2023-04-20 12:04:00'),
(7, 'register', 'register akun', 'leilani71@example.com', '2023-04-20 12:04:44', '2023-04-20 12:04:44'),
(8, 'login', 'login akun', 'leilani71@example.com', '2023-04-20 12:04:44', '2023-04-20 12:04:44'),
(9, 'register', 'register akun', 'modesto39@example.org', '2023-04-20 12:05:33', '2023-04-20 12:05:33'),
(10, 'login', 'login akun', 'modesto39@example.org', '2023-04-20 12:05:33', '2023-04-20 12:05:33'),
(11, 'register', 'register akun', 'abbigail65@example.com', '2023-04-20 12:06:11', '2023-04-20 12:06:11'),
(12, 'login', 'login akun', 'abbigail65@example.com', '2023-04-20 12:06:11', '2023-04-20 12:06:11'),
(13, 'register', 'register akun', 'carmel.roberts@example.org', '2023-04-20 12:06:48', '2023-04-20 12:06:48'),
(14, 'login', 'login akun', 'carmel.roberts@example.org', '2023-04-20 12:06:48', '2023-04-20 12:06:48'),
(15, 'register', 'register akun', 'katrina.feil@example.com', '2023-04-20 12:07:26', '2023-04-20 12:07:26'),
(16, 'login', 'login akun', 'katrina.feil@example.com', '2023-04-20 12:07:26', '2023-04-20 12:07:26'),
(17, 'register', 'register akun', 'runte.jaqueline@example.com', '2023-04-20 12:08:58', '2023-04-20 12:08:58'),
(18, 'login', 'login akun', 'runte.jaqueline@example.com', '2023-04-20 12:08:58', '2023-04-20 12:08:58'),
(19, 'register', 'register akun', 'rogelio.stoltenberg@example.com', '2023-04-20 12:10:35', '2023-04-20 12:10:35'),
(20, 'login', 'login akun', 'rogelio.stoltenberg@example.com', '2023-04-20 12:10:35', '2023-04-20 12:10:35'),
(21, 'login', 'login akun', 'rogelio.stoltenberg@example.com', '2023-04-20 12:17:44', '2023-04-20 12:17:44'),
(22, 'login', 'login akun', 'admin@admin.com', '2023-04-20 12:31:52', '2023-04-20 12:31:52'),
(23, 'login', 'login akun', 'admin@admin.com', '2023-04-20 14:24:30', '2023-04-20 14:24:30'),
(24, 'login', 'login akun', 'admin@admin.com', '2023-04-20 22:08:54', '2023-04-20 22:08:54'),
(25, 'login', 'login akun', 'rogelio.stoltenberg@example.com', '2023-04-20 22:23:24', '2023-04-20 22:23:24'),
(26, 'login', 'login akun', 'admin@admin.com', '2023-04-20 22:23:43', '2023-04-20 22:23:43'),
(27, 'login', 'login akun', 'admin@admin.com', '2023-04-20 22:41:43', '2023-04-20 22:41:43'),
(28, 'login', 'login akun', 'rogelio.stoltenberg@example.com', '2023-04-20 22:55:45', '2023-04-20 22:55:45'),
(29, 'login', 'login akun', 'rogelio.stoltenberg@example.com', '2023-04-20 23:04:48', '2023-04-20 23:04:48'),
(30, 'login', 'login akun', 'admin@admin.com', '2023-04-20 23:05:01', '2023-04-20 23:05:01'),
(31, 'login', 'login akun', 'rogelio.stoltenberg@example.com', '2023-04-20 23:05:17', '2023-04-20 23:05:17'),
(32, 'login', 'login akun', 'admin@admin.com', '2023-04-20 23:09:00', '2023-04-20 23:09:00'),
(33, 'login', 'login akun', 'rogelio.stoltenberg@example.com', '2023-04-20 23:19:28', '2023-04-20 23:19:28'),
(34, 'login', 'login akun', 'runte.jaqueline@example.com', '2023-04-20 23:20:32', '2023-04-20 23:20:32'),
(35, 'login', 'login akun', 'katrina.feil@example.com', '2023-04-20 23:43:14', '2023-04-20 23:43:14'),
(36, 'register', 'register akun', 'josephine90@example.com', '2023-05-21 15:32:15', '2023-05-21 15:32:15'),
(37, 'register', 'register akun', 'schaden.summer@example.net', '2023-05-21 15:43:43', '2023-05-21 15:43:43'),
(38, 'register', 'register akun', 'white.leanna@example.org', '2023-05-26 11:15:56', '2023-05-26 11:15:56'),
(39, 'login', 'login akun', 'white.leanna@example.org', '2023-05-26 11:15:56', '2023-05-26 11:15:56'),
(40, 'login', 'login akun', 'white.leanna@example.org', '2023-05-26 11:16:06', '2023-05-26 11:16:06'),
(41, 'login', 'login akun', 'white.leanna@example.org', '2023-05-26 11:17:09', '2023-05-26 11:17:09'),
(42, 'login', 'login akun', 'white.leanna@example.org', '2023-05-26 11:27:07', '2023-05-26 11:27:07'),
(43, 'login', 'login akun', 'white.leanna@example.org', '2023-05-29 17:06:06', '2023-05-29 17:06:06'),
(44, 'login', 'login akun', 'admin@admin.com', '2023-05-31 08:33:21', '2023-05-31 08:33:21'),
(45, 'register', 'register akun', 'rai@gmail.com', '2023-05-31 08:34:59', '2023-05-31 08:34:59'),
(46, 'login', 'login akun', 'rai@gmail.com', '2023-05-31 08:34:59', '2023-05-31 08:34:59'),
(47, 'login', 'login akun', 'admin@admin.com', '2023-05-31 08:37:07', '2023-05-31 08:37:07'),
(48, 'login', 'login akun', 'admin@admin.com', '2023-05-31 08:37:41', '2023-05-31 08:37:41'),
(49, 'login', 'login akun', 'admin@admin.com', '2023-06-01 02:16:32', '2023-06-01 02:16:32'),
(50, 'login', 'login akun', 'admin@admin.com', '2023-06-01 02:25:50', '2023-06-01 02:25:50'),
(51, 'login', 'login akun', 'admin@admin.com', '2023-06-01 03:01:37', '2023-06-01 03:01:37'),
(52, 'login', 'login akun', 'admin@admin.com', '2023-06-01 04:04:19', '2023-06-01 04:04:19'),
(53, 'login', 'login akun', 'admin@admin.com', '2023-06-01 04:54:37', '2023-06-01 04:54:37'),
(54, 'login', 'login akun', 'rai@gmail.com', '2023-06-01 05:08:53', '2023-06-01 05:08:53'),
(55, 'login', 'login akun', 'rai@gmail.com', '2023-06-01 05:09:56', '2023-06-01 05:09:56'),
(56, 'login', 'login akun', 'haikal@haikal.com', '2023-06-01 05:13:26', '2023-06-01 05:13:26'),
(57, 'login', 'login akun', 'haikal@gmail.com', '2023-06-01 05:13:59', '2023-06-01 05:13:59'),
(58, 'login', 'login akun', 'admin@admin.com', '2023-06-01 05:18:29', '2023-06-01 05:18:29'),
(59, 'login', 'login akun', 'admin@admin.com', '2023-06-01 05:21:09', '2023-06-01 05:21:09'),
(60, 'login', 'login akun', 'rai@gmail.com', '2023-06-01 05:21:23', '2023-06-01 05:21:23'),
(61, 'login', 'login akun', 'admin@admin.com', '2023-06-01 05:21:37', '2023-06-01 05:21:37'),
(62, 'login', 'login akun', 'admin@admin.com', '2023-06-02 06:29:07', '2023-06-02 06:29:07');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_04_20_140316_create_student_data_table', 1),
(6, '2023_04_20_140441_create_student_table', 1),
(7, '2023_04_20_140756_create_class_table', 1),
(8, '2023_04_20_141034_create_candidate_table', 1),
(9, '2023_04_20_141314_create_voting_table', 1),
(10, '2023_04_20_141628_create_log_table', 1),
(11, '2023_04_20_141716_create_admin_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id_student` bigint(20) UNSIGNED NOT NULL,
  `nis` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('siswa','kandidat') NOT NULL DEFAULT 'siswa',
  `last_login` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id_student`, `nis`, `email`, `password`, `status`, `last_login`, `created_at`, `updated_at`) VALUES
(1, '22572262350770', 'ruth31@example.com', '$2y$10$9BqqvNyKf7D8hwdaE92tOuZHWCBKNx2gb51Rioy2k8GGjmMR.xswm', 'siswa', '2023-04-20 19:01:35', '2023-04-20 12:01:35', '2023-04-20 22:24:43'),
(3, '22519662160612', 'uwehner@example.net', '$2y$10$Bpju6qJ.2erJMwb0nCmkOeGcG.5U1im48iflRyeqm8iWxKM3lmUZm', 'kandidat', '2023-04-20 19:04:00', '2023-04-20 12:04:00', '2023-04-20 14:25:18'),
(6, '22261368105840', 'abbigail65@example.com', '$2y$10$ejHKm4QkIIoHNbiq1esMt./pZ/UhvAQwpihYyhlpHtNznV/V.oHbu', 'kandidat', '2023-04-20 19:06:11', '2023-04-20 12:06:11', '2023-06-01 04:54:55'),
(7, '22464799946900', 'carmel.roberts@example.org', '$2y$10$JRQ1EYYvgwFfOzh5SdffkOURTb.QlvDWNap49IIv0FPBa4G6/1FBy', 'kandidat', '2023-04-20 19:06:48', '2023-04-20 12:06:48', '2023-06-02 06:54:25'),
(8, '22669786602278', 'katrina.feil@example.com', '$2y$10$1qngBciFA3b8sQRdXm1acetfN6hogPYVHUjrHtUDOMc5a4UjiYge.', 'kandidat', '2023-04-20 19:07:26', '2023-04-20 12:07:26', '2023-06-02 06:56:39'),
(9, '22940700667528', 'runte.jaqueline@example.com', '$2y$10$ejIk3uqqarkbPdOQ1HAc.u8vUK.iVy8vgAedC0uo5yeNg0Y1LT0j2', 'kandidat', '2023-04-20 19:08:58', '2023-04-20 12:08:58', '2023-06-02 06:57:22'),
(10, '22065646788621', 'rogelio.stoltenberg@example.com', '$2y$10$x0GzNDc/L9yGnZG2NZC5buXmOpdfwKcxCQbtA03b3EbVVUqzoAX7u', 'siswa', '2023-04-20 19:10:35', '2023-04-20 12:10:35', '2023-04-20 12:10:35'),
(11, '22989036260988', 'josephine90@example.com', '$2y$10$28Ru4DpLErbzE3ALTzdIKOZWGUAa4f7sl5Dl7V5.FX6GNtLlUjdSW', 'siswa', '2023-05-21 22:32:15', '2023-05-21 15:32:15', '2023-05-21 15:32:15'),
(12, '22775805560587', 'haikal@gmail.com', '$2a$12$YsaVh0W5W5EQ9AYDbphZOO.Ej036ODJiAB/aFykKPuYN/J2qNEqo2', 'siswa', '2023-05-21 22:43:43', '2023-05-21 15:43:43', '2023-05-21 15:43:43'),
(13, '22106799953712', 'haikal@haikal.com', '$2a$12$YsaVh0W5W5EQ9AYDbphZOO.Ej036ODJiAB/aFykKPuYN/J2qNEqo2', 'siswa', '2023-05-26 18:15:56', '2023-05-26 11:15:56', '2023-05-26 11:15:56'),
(14, '23989036261984', 'rai@gmail.com', '$2a$12$YsaVh0W5W5EQ9AYDbphZOO.Ej036ODJiAB/aFykKPuYN/J2qNEqo2', 'siswa', '2023-05-31 15:34:59', '2023-05-31 08:34:59', '2023-05-31 08:34:59');

-- --------------------------------------------------------

--
-- Table structure for table `student_data`
--

CREATE TABLE `student_data` (
  `id_data` bigint(20) UNSIGNED NOT NULL,
  `nis` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student_data`
--

INSERT INTO `student_data` (`id_data`, `nis`, `name`, `email`, `created_at`, `updated_at`) VALUES
(3, '22519662160612', 'Anastacio Dietrich', 'uwehner@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(6, '22261368105840', 'Corrine Moen', 'abbigail65@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(7, '22464799946900', 'Samara Erdman', 'carmel.roberts@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(8, '22669786602278', 'Heath Hand', 'katrina.feil@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(9, '22940700667528', 'Verla Koch', 'runte.jaqueline@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(10, '22572262350770', 'Ella Hoppe DDS', 'ruth31@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(11, '22065646788621', 'Arlo Schmeler Sr.', 'rogelio.stoltenberg@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(12, '22875051218947', 'Prof. Rodrick Osinski', 'amira.heathcote@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(13, '22101972521781', 'Dr. Toni Corwin II', 'king.ottilie@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(14, '22180765208730', 'Prof. Monte Spencer IV', 'theo33@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(15, '22927520888932', 'Mr. Irwin Toy I', 'senger.armando@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(16, '22500282238935', 'Vanessa Grimes', 'hlittel@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(17, '22825120158897', 'Prof. Doyle Koepp PhD', 'eschoen@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(18, '22651206466952', 'Loyce Sauer', 'frippin@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(19, '22877565560824', 'Juvenal Borer', 'ruby.jacobi@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(20, '22703864508035', 'Phoebe Ruecker', 'tpadberg@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(21, '22910484895945', 'Alexanne Wolff', 'santina.veum@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(22, '22830490074956', 'Elbert Ritchie', 'hintz.katrine@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(23, '22539802866410', 'Catherine Rowe DDS', 'wgleichner@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(24, '22169413443784', 'Dr. Jabari Medhurst Jr.', 'kuhn.sherman@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(25, '22586202190915', 'Prof. Hester Emard DDS', 'mherman@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(26, '22372883135600', 'Isadore Wintheiser DDS', 'asia.waelchi@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(27, '22978765865146', 'Flossie Williamson', 'celine.cummerata@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(28, '22273349759596', 'Prof. Greg Collins Sr.', 'sigurd.mante@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(29, '22394853246431', 'Vicenta Volkman II', 'everardo.okuneva@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(30, '22332002055537', 'Bonita Eichmann', 'kane.schumm@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(31, '22934026088381', 'Hillard Kovacek', 'daryl81@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(32, '22106428346002', 'Anabel Runolfsdottir', 'ltoy@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(33, '22144540187284', 'Sydnee Farrell III', 'schneider.savanna@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(34, '22108821978106', 'Cooper Gleichner', 'schiller.thurman@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(35, '22951799220700', 'Connie Greenholt', 'smitham.brendan@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(36, '22594016170052', 'Rollin Aufderhar', 'alicia35@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(37, '22350496298902', 'Fatima Cormier DVM', 'beatty.imani@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(38, '22484300093751', 'Polly Rath II', 'dana.moore@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(39, '22572630175670', 'Kris Carter', 'dolly50@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(40, '22423404187933', 'Fanny Ryan', 'jacobs.robert@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(41, '22667524910269', 'Maude Nitzsche', 'jaskolski.laurianne@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(42, '22667666942595', 'Susie Collins', 'conn.pierre@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(43, '22341506859361', 'Victoria Stehr', 'iwalker@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(44, '22996368884015', 'Wilhelmine Gislason', 'mayert.vivien@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(45, '22091999929504', 'Ms. Lenore Jenkins Sr.', 'vivianne55@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(46, '22818299401333', 'Ressie Lakin', 'manuel88@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(47, '22626963741274', 'Mr. Roger Rath', 'randi.powlowski@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(48, '22106799953712', 'Carey Trantow', 'white.leanna@example.org', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(49, '22775805560587', 'Mr. Fernando Greenholt III', 'schaden.summer@example.net', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(50, '22989036260988', 'Hyman Parker', 'josephine90@example.com', '2023-04-20 10:36:47', '2023-04-20 10:36:47'),
(51, '23989036261984', 'Rai Tilosava De Araujo', 'rai@gmail.com', '2023-05-31 08:34:01', '2023-05-31 08:34:01'),
(52, '5242254', 'Rai Tilosava De Araujo', 'haikal@hafaad.com', '2023-06-01 03:01:48', '2023-06-01 03:01:48'),
(53, '5252442254', 'Rai Tilosava De Araujo', 'haikal@gsdffdsg.com', '2023-06-01 03:02:07', '2023-06-01 03:02:07'),
(54, '45142234', 'fadd', 'fadas@faddafsa', '2023-06-01 03:09:54', '2023-06-01 03:09:54'),
(55, '43214123', 'fafdadfa', 'fafa@fadad', '2023-06-01 03:13:02', '2023-06-01 03:13:02'),
(56, '4314', 'faaaf', 'cafafda@fdsa', '2023-06-01 03:13:21', '2023-06-01 03:13:21'),
(58, '5234243', 'rai', 'rai@siswa.com', '2023-06-01 03:31:39', '2023-06-01 03:31:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `voting`
--

CREATE TABLE `voting` (
  `id_voting` bigint(20) UNSIGNED NOT NULL,
  `id_student` bigint(20) UNSIGNED NOT NULL,
  `votes` int(11) NOT NULL,
  `id_candidate` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `voting`
--

INSERT INTO `voting` (`id_voting`, `id_student`, `votes`, `id_candidate`, `created_at`, `updated_at`) VALUES
(1, 10, 1, 4, '2023-04-20 23:08:28', '2023-04-20 23:08:28'),
(2, 9, 1, 4, '2023-04-20 23:20:47', '2023-04-20 23:20:47'),
(4, 13, 1, 4, '2023-05-29 17:09:36', '2023-05-29 17:09:36'),
(5, 14, 1, 4, '2023-06-01 05:10:19', '2023-06-01 05:10:19'),
(6, 12, 1, 6, '2023-06-01 05:14:06', '2023-06-01 05:14:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_password_unique` (`password`);

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id_candidate`),
  ADD KEY `candidate_id_student_foreign` (`id_student`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id_class`),
  ADD KEY `class_id_student_foreign` (`id_student`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id_log`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id_student`),
  ADD UNIQUE KEY `student_email_unique` (`email`),
  ADD KEY `student_nis_foreign` (`nis`);

--
-- Indexes for table `student_data`
--
ALTER TABLE `student_data`
  ADD PRIMARY KEY (`id_data`),
  ADD UNIQUE KEY `student_data_nis_unique` (`nis`),
  ADD UNIQUE KEY `student_data_email_unique` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `voting`
--
ALTER TABLE `voting`
  ADD PRIMARY KEY (`id_voting`),
  ADD KEY `voting_id_student_foreign` (`id_student`),
  ADD KEY `voting_id_candidate_foreign` (`id_candidate`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id_candidate` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id_class` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `id_log` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id_student` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `student_data`
--
ALTER TABLE `student_data`
  MODIFY `id_data` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `voting`
--
ALTER TABLE `voting`
  MODIFY `id_voting` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `candidate`
--
ALTER TABLE `candidate`
  ADD CONSTRAINT `candidate_id_student_foreign` FOREIGN KEY (`id_student`) REFERENCES `student` (`id_student`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `class`
--
ALTER TABLE `class`
  ADD CONSTRAINT `class_id_student_foreign` FOREIGN KEY (`id_student`) REFERENCES `student` (`id_student`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_nis_foreign` FOREIGN KEY (`nis`) REFERENCES `student_data` (`nis`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `voting`
--
ALTER TABLE `voting`
  ADD CONSTRAINT `voting_id_candidate_foreign` FOREIGN KEY (`id_candidate`) REFERENCES `candidate` (`id_candidate`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `voting_id_student_foreign` FOREIGN KEY (`id_student`) REFERENCES `student` (`id_student`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
