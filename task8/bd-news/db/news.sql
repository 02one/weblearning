-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2017-04-19 00:40:26
-- 服务器版本： 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdnews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(100) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `deleted`) VALUES
(1, '推荐', '晨读｜“百名红通人员”李世乔回国投案自首', 'images/1.jpeg', '2017-04-16 00:00:00', 0),
(2, '推荐', '高尔夫深圳国际赛前两轮分组 李昊桐将比肩沃森', 'images/1.jpeg', '2017-04-02 00:00:00', 1),
(6, '百家', '房子涨价卖家反悔 法院判决涨价部分赔偿给买家', 'images/2.jpeg', '2017-04-02 00:00:00', 0),
(7, '娱乐', '[评论]周航与乐视的大战并不漂亮 但不撕不痛快', 'images/2.jpeg', '2017-04-08 00:00:00', 0),
(8, '图片', '18日人民币对美元中间价报6.8849 跌64点', 'images/1.jpeg', '2017-04-01 00:00:00', 0),
(11, '推荐', 'ofo创始人兼CEO戴威：ofo估值超20亿美元', 'images/1.jpeg', '2017-04-01 00:00:00', 0),
(15, '本地', '美军：卡尔文森号航母从来没有北上朝鲜半岛', 'images/1.jpeg', '2017-04-14 00:00:00', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
