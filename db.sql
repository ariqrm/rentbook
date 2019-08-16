-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 14, 2019 at 09:21 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `RentBook`
--

-- --------------------------------------------------------

--
-- Table structure for table `Book`
--

CREATE TABLE `Book` (
  `id` int(11) NOT NULL,
  `Title` varchar(25) DEFAULT NULL,
  `Description` text,
  `Image` text,
  `DateReleased` date DEFAULT NULL,
  `id_genre` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Book`
--

INSERT INTO `Book` (`id`, `Title`, `Description`, `Image`, `DateReleased`, `id_genre`, `id_status`, `create_at`, `update_at`) VALUES
(1, 'The Promised Neverland', 'Yakusoku no Neverland, yang diterbitkan di Indonesia dengan judul The Promised Neverland, adalah sebuah seri manga Jepang yang ditulis oleh Kaiu Shirai dan diilustrasikan oleh Posuka Demizu. 1', 'https://upload.wikimedia.org/wikipedia/id/4/44/The_Promised_Neverland%2C_Volume_1.jpg', '2016-08-01', 3, 2, '2019-08-12 16:37:51', '2019-08-14 09:28:08'),
(2, 'The Promised Neverland 2', 'Yakusoku no Neverland, yang diterbitkan di Indonesia dengan judul The Promised Neverland, adalah sebuah seri manga Jepang yang ditulis oleh Kaiu Shirai dan diilustrasikan oleh Posuka Demizu. 2', 'https://upload.wikimedia.org/wikipedia/id/4/44/The_Promised_Neverland%2C_Volume_1.jpg', '2017-08-07', 3, 2, '2019-08-12 09:25:17', '2019-08-14 09:27:07'),
(3, 'The Promised Neverland 3', 'Yakusoku no Neverland, yang diterbitkan di Indonesia dengan judul The Promised Neverland, adalah sebuah seri manga Jepang yang ditulis oleh Kaiu Shirai dan diilustrasikan oleh Posuka Demizu. 3', 'https://upload.wikimedia.org/wikipedia/id/4/44/The_Promised_Neverland%2C_Volume_1.jpg', '2017-12-01', 3, 2, '2019-08-13 17:08:28', '2019-08-13 17:08:28'),
(4, 'The Promised Neverland X', 'Yakusoku no Neverland, yang diterbitkan di Indonesia dengan judul The Promised Neverland, adalah sebuah seri manga Jepang yang ditulis oleh Kaiu Shirai dan diilustrasikan oleh Posuka Demizu. 4', 'https://upload.wikimedia.org/wikipedia/id/4/44/The_Promised_Neverland%2C_Volume_1.jpg', '2017-12-01', 3, 2, '2019-08-13 17:26:10', '2019-08-14 13:11:09'),
(5, 'The Promised Neverland 4', 'Yakusoku no Neverland, yang diterbitkan di Indonesia dengan judul The Promised Neverland, adalah sebuah seri manga Jepang yang ditulis oleh Kaiu Shirai dan diilustrasikan oleh Posuka Demizu. ', 'https://upload.wikimedia.org/wikipedia/id/4/44/The_Promised_Neverland%2C_Volume_1.jpg', '2018-02-01', 3, 2, '2019-08-14 09:29:59', '2019-08-14 09:29:59'),
(6, 'The Promised Neverland 5', 'Yakusoku no Neverland, yang diterbitkan di Indonesia dengan judul The Promised Neverland, adalah sebuah seri manga Jepang yang ditulis oleh Kaiu Shirai dan diilustrasikan oleh Posuka Demizu. ', 'https://upload.wikimedia.org/wikipedia/id/4/44/The_Promised_Neverland%2C_Volume_1.jpg', '2018-06-01', 3, 2, '2019-08-14 09:30:25', '2019-08-14 09:30:25'),
(7, 'The Promised Neverland 6', 'Yakusoku no Neverland, yang diterbitkan di Indonesia dengan judul The Promised Neverland, adalah sebuah seri manga Jepang yang ditulis oleh Kaiu Shirai dan diilustrasikan oleh Posuka Demizu. ', 'https://upload.wikimedia.org/wikipedia/id/4/44/The_Promised_Neverland%2C_Volume_1.jpg', '2018-12-01', 3, 1, '2019-08-14 09:30:37', '2019-08-14 13:20:45');

-- --------------------------------------------------------

--
-- Table structure for table `Genres`
--

CREATE TABLE `Genres` (
  `id` int(11) NOT NULL,
  `NameOfGenre` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Genres`
--

INSERT INTO `Genres` (`id`, `NameOfGenre`) VALUES
(1, 'comedy'),
(2, 'action'),
(3, 'mistery'),
(4, 'horror'),
(9, 'rok'),
(10, 'manga'),
(11, 'manga');

-- --------------------------------------------------------

--
-- Table structure for table `Status`
--

CREATE TABLE `Status` (
  `id` int(11) NOT NULL,
  `Status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Status`
--

INSERT INTO `Status` (`id`, `Status`) VALUES
(1, 'borrowed'),
(2, 'available');

-- --------------------------------------------------------

--
-- Table structure for table `Transaction`
--

CREATE TABLE `Transaction` (
  `id` int(11) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_book` int(11) NOT NULL,
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Transaction`
--

INSERT INTO `Transaction` (`id`, `Date`, `id_book`, `id_status`) VALUES
(1, '2019-08-13 17:20:13', 4, 2),
(2, '2019-08-13 17:21:05', 4, 1),
(3, '2019-08-13 17:26:10', 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `First_name` varchar(25) NOT NULL,
  `Last_name` varchar(25) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Book`
--
ALTER TABLE `Book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_genre` (`id_genre`);

--
-- Indexes for table `Genres`
--
ALTER TABLE `Genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Status`
--
ALTER TABLE `Status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Transaction`
--
ALTER TABLE `Transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_book` (`id_book`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Book`
--
ALTER TABLE `Book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `Genres`
--
ALTER TABLE `Genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `Status`
--
ALTER TABLE `Status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `Transaction`
--
ALTER TABLE `Transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Book`
--
ALTER TABLE `Book`
  ADD CONSTRAINT `Book_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `Status` (`id`),
  ADD CONSTRAINT `Book_ibfk_2` FOREIGN KEY (`id_genre`) REFERENCES `Genres` (`id`);

--
-- Constraints for table `Transaction`
--
ALTER TABLE `Transaction`
  ADD CONSTRAINT `Transaction_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `Status` (`id`),
  ADD CONSTRAINT `Transaction_ibfk_3` FOREIGN KEY (`id_book`) REFERENCES `Book` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
