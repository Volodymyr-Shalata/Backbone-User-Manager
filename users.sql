-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.6.15-log - MySQL Community Server (GPL)
-- ОС Сервера:                   Win32
-- HeidiSQL Версия:              8.1.0.4640
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Дамп структуры базы данных users
DROP DATABASE IF EXISTS `users`;
CREATE DATABASE IF NOT EXISTS `users` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `users`;


-- Дамп структуры для таблица users.recess_tools_classes
DROP TABLE IF EXISTS `recess_tools_classes`;
CREATE TABLE IF NOT EXISTS `recess_tools_classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  `packageId` int(11) DEFAULT NULL,
  `docComment` text,
  `file` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы users.recess_tools_classes: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `recess_tools_classes` DISABLE KEYS */;
INSERT INTO `recess_tools_classes` (`id`, `name`, `parentId`, `packageId`, `docComment`, `file`) VALUES
	(1, 'UsersManagerHomeController', 2, 1, '/**\n * !RespondsWith Layouts\n * !Prefix Views: home/, Routes: /\n */', 'D:\\www\\Backbone\\apps\\usersManager\\controllers\\UsersManagerHomeController.class.php'),
	(2, 'Controller', 3, 3, '/**\n * The controller is responsible for interpretting a preprocessed Request,\n * performing some action in response to the Request (usually CRUDS), and\n * returning a Response which contains relevant state for a view to render\n * the Response.\n * \n * @author Kris Jordan <krisjordan@gmail.com>\n * @author Joshua Paine\n */', 'D:\\www\\Backbone\\recess\\recess\\framework\\controllers\\Controller.class.php'),
	(3, 'AbstractController', 4, 4, '/**\n * The controller is responsible for interpretting a preprocessed Request,\n * performing some action in response to the Request (usually CRUDS), and\n * returning a Response which contains relevant state for a view to render\n * the Response.\n * \n * @author Kris Jordan <krisjordan@gmail.com>\n */', 'D:\\www\\Backbone\\recess\\recess\\framework\\AbstractController.class.php'),
	(4, 'Object', NULL, 6, '/**\n * Object is the base class for extensible classes in the Recess.\n * Object introduces a standard mechanism for building a class\n * descriptor through reflection and the realization of Annotations.\n * Object also introduces the ability to attach methods to a class\n * at run-time.\n * \n * Sub-classes of Object can introduce extensibility points \n * with \'wrappable\' methods. A wrappable method can be dynamically \'wrapped\' \n * by other methods which are called prior to or after the wrapped method.\n * \n * Wrappable methods can be declared using a Wrappable annotation on the \n * method being wrapped. The annotation takes a single parameter, which is\n * the desired name of the wrapped method. By convention the native PHP method\n * being wrapped is prefixed with \'wrapped\', i.e.:\n *  class Foobar {\n *    /** !Wrappable foo * /\n *    function wrappedFoo() { ... }\n *  }\n *  $obj->foo();\n * \n * Example usage of wrappable methods and a hypothetical "EchoWrapper" which\n * wraps a method by echo\'ing strings before and after. \n * \n *   class Model extends Object {\n *     /** !Wrappable insert * /\n *     function wrappedInsert() { echo "Wrapped (insert)"; }\n *   }\n * \n *   /** !EchoWrapper insert, Before: "Hello", After: "World" * /\n *   class Person extends Model {}\n * \n *   $person = new Person();\n *   $person->insert();\n *   \n *   // Output:\n *   Hello\n *   Wrapped (insert)\n *   World\n * \n * @author Kris Jordan <krisjordan@gmail.com>\n * @copyright 2008, 2009 Kris Jordan\n * @package Recess PHP Framework\n * @license MIT\n * @link http://www.recessframework.org/\n */', 'D:\\www\\Backbone\\recess\\recess\\lang\\Object.class.php');
/*!40000 ALTER TABLE `recess_tools_classes` ENABLE KEYS */;


-- Дамп структуры для таблица users.recess_tools_packages
DROP TABLE IF EXISTS `recess_tools_packages`;
CREATE TABLE IF NOT EXISTS `recess_tools_packages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы users.recess_tools_packages: ~6 rows (приблизительно)
/*!40000 ALTER TABLE `recess_tools_packages` DISABLE KEYS */;
INSERT INTO `recess_tools_packages` (`id`, `name`, `parentId`) VALUES
	(1, 'usersManager.controllers', 2),
	(2, 'usersManager', NULL),
	(3, 'recess.framework.controllers', 4),
	(4, 'recess.framework', 5),
	(5, 'recess', NULL),
	(6, 'recess.lang', 5);
/*!40000 ALTER TABLE `recess_tools_packages` ENABLE KEYS */;


-- Дамп структуры для таблица users.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Fname` varchar(255) DEFAULT NULL,
  `Lname` varchar(255) DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `login` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `role` enum('admin','user','owner') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=latin1;

-- Дамп данных таблицы users.users: 11 rows
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `Fname`, `Lname`, `Age`, `login`, `password`, `role`) VALUES
	(60, 'qew', 'qwe', 12, NULL, NULL, NULL),
	(15, 'snoop2', 'dogg2', 23, NULL, NULL, 'user'),
	(59, 'qwe', 'qwe', 0, NULL, NULL, NULL),
	(13, 'Jeck', 'London', 28, NULL, NULL, 'user'),
	(12, 'Jorg', 'Vashington', 27, NULL, NULL, 'user'),
	(11, 'Piter', 'Griffin', 26, NULL, NULL, 'user'),
	(10, 'Vova', 'Shalata', 25, NULL, NULL, 'user'),
	(58, 'diana', 'kosheva', 19, 'dididi', 'dididi', 'user'),
	(52, 'test', 'test', 12, NULL, NULL, 'user'),
	(56, 'vova', 'shalata', 23, 'vova', 'smoke', 'owner'),
	(61, 'eee', 'eee', 23, NULL, NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;


-- Дамп структуры для таблица users.users_email
DROP TABLE IF EXISTS `users_email`;
CREATE TABLE IF NOT EXISTS `users_email` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

-- Дамп данных таблицы users.users_email: 27 rows
/*!40000 ALTER TABLE `users_email` DISABLE KEYS */;
INSERT INTO `users_email` (`id`, `email`) VALUES
	(4, 'test1@test.com'),
	(5, 'test1@test.com'),
	(6, 'test1@test.com'),
	(9, 'vova@vova.com'),
	(10, 'qwe@ee.com'),
	(11, 'test@tes.com'),
	(12, 'ee@qwe.com'),
	(13, 'qwe@rr.com'),
	(14, 'rr@qq.com'),
	(52, 'qwe@qwe.com'),
	(16, 'qq@ee.com'),
	(17, 'rr@rr.com'),
	(18, 'te@yu.com'),
	(19, 'rr@uu.com'),
	(20, 'qwe@qw.com'),
	(21, 'ui@ui.com'),
	(22, 'ee@ty.com'),
	(23, 'ttt@qwe.com'),
	(24, 'eee@qw.com'),
	(25, 'qqq'),
	(26, 'sss'),
	(27, 'qwe'),
	(28, 'qe@qwe.com'),
	(29, 'eee@qwe.com'),
	(30, 'ttt@tr.com'),
	(32, 'Array'),
	(33, 'iuyiuyiqwe@qeqwe.com');
/*!40000 ALTER TABLE `users_email` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
