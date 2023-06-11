-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Cze 2023, 21:56
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `głosowanie`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `glosy`
--

CREATE TABLE `glosy` (
  `id` int(11) NOT NULL,
  `kandydat` text NOT NULL,
  `pesel` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `glosy`
--

INSERT INTO `glosy` (`id`, `kandydat`, `pesel`) VALUES
(31, 'k1', 'xdtgf'),
(32, 'k2', 'fnxg'),
(33, 'k2', 'hsdg'),
(41, 'k1', 'zdfv'),
(42, 'k3', 'gchmk');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `glosy`
--
ALTER TABLE `glosy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `glosy`
--
ALTER TABLE `glosy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
