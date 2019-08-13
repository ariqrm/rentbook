-- bikin database
CREATE DATABASE `RentBook`;
-- table kategori
CREATE TABLE `Genres` ( `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `NameOfGenre` varchar(25)  );
-- table Status
CREATE TABLE `Status` ( `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `Status` varchar(25)  );
-- table Book
CREATE TABLE `Book` ( `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `Title` varchar(25) , `Description` varchar(50) , `Image` varchar(30), `DateReleased` date, `id_genre` int(11), `id_status` int(11), FOREIGN KEY(`id_status`) REFERENCES `Status`(`id`), FOREIGN KEY(`id_genre`) REFERENCES `Genres`(`id`));
-- table Transaction
CREATE TABLE `Transaction` ( `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, `Date` timestamp DEFAULT current_timestamp, `id_book` int(11), `id_genre` int(11), `id_status` int(11), FOREIGN KEY(`id_status`) REFERENCES `Status`(`id`), FOREIGN KEY(`id_genre`) REFERENCES `Genres`(`id`), FOREIGN KEY(`id_book`) REFERENCES `Book`(`id`));
--input data
INSERT INTO `Genres` VALUES ('1', 'comedy'),('2', 'mistery'),('3', 'action');
INSERT INTO `Status` VALUES ('1', 'borrowed'),('2', 'avelible')
INSERT INTO `Book` VALUES ('1', 'Tomorrow', 'this tomorrow description', 'http://placeimg.com/200/150/tech', '2019-08-06', '2', '2', '2019-08-14 06:16:05', '2019-08-20 14:25:06');

SELECT `Book`.`Title` AS `title`, `Book`.`Description` AS `description`, `Book`.`Image` AS `image`, `Book`.`DateReleased` AS `date_released`, `Genres`.`NameOfGenre` AS `genre`, `Status`.`Status` AS `status` FROM `Book` JOIN `Genres` ON `Book`.`id_genre`=`Genres`.`id` JOIN `Status` ON `Book`.`id_status`=`Status`.`id`

-- search by title

SELECT `Book`.`Title` AS `title`, `Book`.`Description` AS `description`, `Book`.`Image` AS `image`, `Book`.`DateReleased` AS `date_released`, `Genres`.`NameOfGenre` AS `genre`, `Status`.`Status` AS `status` FROM `Book` JOIN `Genres` ON `Book`.`id_genre`=`Genres`.`id` JOIN `Status` ON `Book`.`id_status`=`Status`.`id`WHERE `Book`.`Title`='aw'

SELECT `T`.Date FROM `Transaction` AS `T` JOIN Book AS `B` ON T.id_book=B.id JOIN Genres AS `G` WHERE 1