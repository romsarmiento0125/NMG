-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2021 at 04:01 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nmg`
--

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `fname`) VALUES
(1, 'rom sarmiento'),
(2, 'kristine crespo'),
(3, 'madeleine sarmiento'),
(4, 'reyster del rosario'),
(5, 'mich aguire'),
(6, 'angel borja'),
(7, 'kyle carpio'),
(8, 'paulo sarmiento');

-- --------------------------------------------------------

--
-- Table structure for table `trending`
--

CREATE TABLE `trending` (
  `id` int(11) NOT NULL,
  `trendname` varchar(255) NOT NULL,
  `trendsub` varchar(255) NOT NULL,
  `trendpic` varchar(255) NOT NULL,
  `trenddescript` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trending`
--

INSERT INTO `trending` (`id`, `trendname`, `trendsub`, `trendpic`, `trenddescript`) VALUES
(1, 'Bakas', 'Drown yourself in happiness, not in the river.', 'Assets/Photos/Trending/Bakas.png', 'This is the most famous in Norzagaray, where all people go there when it\'s summer season. In this river enjoys wonderful rock formations and suitable for diving. And also the statues at the top of rock formations that is good for an Instagram picture. And enjoy the rushing water where you can ride using floaties.'),
(2, 'Jamies', 'Come sit with us!', 'Assets/Photos/Trending/Jamies.png', 'Are you tired of all those tourist spots? Come and sit with us in Jamies. Taste our wonderful dishes for a low price. And also, taste our Crispy Pata that has been featured on national tv many times!. Located near the park and the municipal hall of poblacin, Norzagaray.'),
(3, 'Ipo dam View deck', 'Enjoy the freedom!', 'Assets/Photos/Trending/Ipo dam.png', 'Discover the excellent sightseeing spot in Norzagaray. The Ipo damn view deck, where you can see a dam here in the Bulacan. See the beautiful sight of the mountains and the dam where you can feel—the refreshing view of one of the most tourist spots in Norzagaray.'),
(4, 'Pinag reallan cave', 'Explore it to the deepest', 'Assets/Photos/Trending/pinagreallan.png', 'Explore this famous cave in Norzagaray that has a history in it. The Pinagreallan cave is an underground network of caverns extending more than a kilometer deep. During the war against Spain, the Katiponeros used it as a camp in 1896 and again during the Filipino-American war in 1898 as a hideout of General Emilio Aguinaldo(The First President Of the Philippines). It was also used as a sanctuary by the Japanese Imperial Army when joint Filipino and American Forces liberated the Philippines.'),
(5, 'Adventure Resort', 'We give you everything right here, where you need it.', 'Assets/Photos/Trending/adventure.png', 'Discover this wonderful resort in Norzagaray, where you can experience it all. It is where you can relax, swim, and enjoy the beautiful replicas from all foreign countries. Feel and enjoy the water and take those Instagram-mable pictures all day.'),
(6, 'Bit-Bit River', 'Have a Great time at Bit-Bit River', 'Assets/Photos/Trending/bitbit.png', 'Not tired from all those River resorts? Then it would be best if you also tried Bitbit river resort. This is one of the most to go on the bucket list in Norzagaray. it is in the mountain range of San Mateo. Where you can see the Wonderful scenery and feel the refreshing clean river where you can relax and take a breather and wash all your problems away.'),
(7, 'Lioness and Rhino Rock Formation', 'Wander without reason', 'Assets/Photos/Trending/Liones.png', 'Discover the well-known hiking spot in Norzagaray. Bring your hiking gears and experience the beautiful rock formations called Lioness and Rhino rock formation. You feel the difficulty when hiking, but the most beautiful part of the rock formation is the overhead view.'),
(8, 'St. Andrew the Apostle Parish Church', 'Best place to stay connected with God connectedly.', 'Assets/Photos/Trending/st adrews.png', 'Are you tired of all those tourist spots? Now it is a time to connect to God. Visit the famous church in Norzagaray, the St. Andrew the Apostle parish. This church is where all people from Norzagaray repent their sins. And when you go here at this time of the pandemic, you must need to wear protective gears, or if you have symptoms, don\'t go at all, so the people from the church are safe.'),
(9, 'ster', 'test', 'Assets/Photos/Trending/secrethaven.png', 'Are you tired of all those tourist spots? Now it is a time to connect to God. Visit the famous church in Norzagaray, the St. Andrew the Apostle parish. This church is where all people from Norzagaray repent their sins. And when you go here at this time of the pandemic, you must need to wear protective gears, or if you have symptoms, don\'t go at all, so the people from the church are safe.'),
(10, 'Secret Haven', 'go to heaven', 'Assets/Photos/Trending/asecrethaven.png', 'A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.');

-- --------------------------------------------------------

--
-- Table structure for table `wtdsightseeing`
--

CREATE TABLE `wtdsightseeing` (
  `sightid` int(11) NOT NULL,
  `wtdsight` varchar(255) NOT NULL,
  `sightdesc` longtext NOT NULL,
  `sightlong` varchar(255) NOT NULL,
  `sightlat` varchar(255) NOT NULL,
  `sightphoto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `wtdswimming`
--

CREATE TABLE `wtdswimming` (
  `swimid` int(11) NOT NULL,
  `wtdswim` varchar(255) NOT NULL,
  `swimdesc` longtext NOT NULL,
  `swimlong` varchar(255) NOT NULL,
  `swimlat` varchar(255) NOT NULL,
  `swimphoto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wtdswimming`
--

INSERT INTO `wtdswimming` (`swimid`, `wtdswim`, `swimdesc`, `swimlong`, `swimlat`, `swimphoto`) VALUES
(20, 'Bakas', 'A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.', '121.06862', '14.91396', 'Assets/Photos/Home/WhatToDo/Swimming/6.png'),
(21, 'Japok', 'A hidden place in the forest, alongside a river in Bigte. Where you can build a camp, do caving or swim in the beautiful river. Usually, you can travel it using a mountain bike. But you can also travel using ATV or 4x4 car.', '121.05919', '14.90915', 'Assets/Photos/Home/WhatToDo/Swimming/4.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trending`
--
ALTER TABLE `trending`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wtdsightseeing`
--
ALTER TABLE `wtdsightseeing`
  ADD PRIMARY KEY (`sightid`);

--
-- Indexes for table `wtdswimming`
--
ALTER TABLE `wtdswimming`
  ADD PRIMARY KEY (`swimid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `trending`
--
ALTER TABLE `trending`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `wtdsightseeing`
--
ALTER TABLE `wtdsightseeing`
  MODIFY `sightid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `wtdswimming`
--
ALTER TABLE `wtdswimming`
  MODIFY `swimid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
