/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.16 : Database - nespresso
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`nespresso` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `nespresso`;

/*Table structure for table `administrator` */

DROP TABLE IF EXISTS `administrator`;

CREATE TABLE `administrator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(10) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `remark` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `administrator` */

insert  into `administrator`(`id`,`nickname`,`email`,`avatar`,`remark`,`password`) values (1,'张三','email@email.com','avatar.jpg','备注','670b14728ad9902aecba32e22fa4f6bd'),(2,'张三','2943439858@qq.com','img/zhangsan.jpg','备注','04fc711301f3c784d66955d98d399afb'),(3,'邹凯','2655816316@qq.com','img/zoukaiavatar.png','花儿还有重开日，人生没有再少年。花花世界迷人眼，没有实力别晒脸','8a6f2805b4515ac12058e79e66539be9');

/*Table structure for table `aroma` */

DROP TABLE IF EXISTS `aroma`;

CREATE TABLE `aroma` (
  `aromaId` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(20) DEFAULT NULL,
  `fragrance` int(11) DEFAULT NULL,
  `descript` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`aromaId`),
  KEY `fragrance_aroma` (`fragrance`),
  CONSTRAINT `fragrance_aroma` FOREIGN KEY (`fragrance`) REFERENCES `fragrance` (`fragranceId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

/*Data for the table `aroma` */

insert  into `aroma`(`aromaId`,`value`,`fragrance`,`descript`) values (1,'果香/酒香',1,'果香/酒香 的描述'),(2,'花香',1,'花香 的描述'),(3,'柑橘香',1,'柑橘香 的描述'),(4,'饼干香',2,'饼干香的描述'),(5,'谷物香',2,'谷物香 的描述'),(6,'烘焙香',2,'烘焙香的描述'),(7,'蜂蜜香',2,'蜂蜜香的描述'),(8,'辛辣香',3,'辛辣香的描述'),(9,'麦芽香',3,'麦芽香的描述'),(10,'木本香',3,'木本香的描述'),(11,'可可香',3,'可可香的描述'),(12,'深度烘焙',3,'深度烘焙的描述');

/*Table structure for table `capamount` */

DROP TABLE IF EXISTS `capamount`;

CREATE TABLE `capamount` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `capamount` */

insert  into `capamount`(`id`,`amount`) values (1,'小杯(25ml)'),(2,'中杯(40ml)'),(3,'大杯(80ml)'),(4,'超大杯(110ml)');

/*Table structure for table `cmachineclass` */

DROP TABLE IF EXISTS `cmachineclass`;

CREATE TABLE `cmachineclass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `descript` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `cmachineclass` */

insert  into `cmachineclass`(`id`,`name`,`title`,`descript`) values (1,'牛奶和拿铁的咖啡机','牛奶和拿铁的咖啡机','使用Basista一样的定制设置来创建各种咖啡和牛奶配方或通过一键触控系统，让自己沉醉在 Creatista or Lattissima制作的咖啡品享中。购买咖啡机'),(2,'方便快捷的浓缩咖啡机','方便快捷的浓缩咖啡','选择方便快捷简单操作直观的咖啡机。不妨了解下 Pixie, Pixie Clips, Essenza Mini, Inissia, Citiz '),(3,'个性化的浓缩咖啡机机','个性化的浓缩咖啡机机','想象自己是一个专业的咖啡师？用Creatista或者连接Nespresso Expert 咖啡机在家就可以制备一杯个性化的咖啡');

/*Table structure for table `cmachineproducts` */

DROP TABLE IF EXISTS `cmachineproducts`;

CREATE TABLE `cmachineproducts` (
  `cmachineproductsId` int(11) NOT NULL AUTO_INCREMENT,
  `npsCommodity` int(11) DEFAULT NULL COMMENT '商品分类',
  `color` int(11) NOT NULL COMMENT '咖啡机的颜色',
  `cMachineImg` varchar(1000) DEFAULT NULL,
  `price` double(8,2) DEFAULT NULL COMMENT '咖啡机的价格',
  `discountPrice` double(8,2) DEFAULT NULL COMMENT '咖啡机的折后价格',
  `specifications` int(11) DEFAULT NULL COMMENT '咖啡机的规格',
  `manual` varchar(20) DEFAULT NULL COMMENT '说明书的地址',
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `cmachineclass` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`color`,`name`),
  UNIQUE KEY `id` (`cmachineproductsId`),
  UNIQUE KEY `cmachineproductsId` (`cmachineproductsId`),
  KEY `cMP_npsC` (`npsCommodity`),
  KEY `cMP_spec` (`specifications`),
  KEY `cm_class` (`cmachineclass`),
  CONSTRAINT `cMP_colorM` FOREIGN KEY (`color`) REFERENCES `colorofmachine` (`id`),
  CONSTRAINT `cMP_npsC` FOREIGN KEY (`npsCommodity`) REFERENCES `npscommodity` (`id`),
  CONSTRAINT `cMP_spec` FOREIGN KEY (`specifications`) REFERENCES `specifications` (`id`),
  CONSTRAINT `cm_class` FOREIGN KEY (`cmachineclass`) REFERENCES `cmachineclass` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

/*Data for the table `cmachineproducts` */

insert  into `cmachineproducts`(`cmachineproductsId`,`npsCommodity`,`color`,`cMachineImg`,`price`,`discountPrice`,`specifications`,`manual`,`createTime`,`cmachineclass`,`name`) values (42,1,2,'[\"coffeeMachine/coffeeMachineimg_1576909149594_005.jpg\",\"coffeeMachine/coffeeMachineimg_1576909149599_006.jpg\",\"coffeeMachine/coffeeMachineimg_1576909149600_007.jpg\",\"coffeeMachine/coffeeMachineimg_1576909149817_008.jpg\"]',12.10,14.10,1,'说明书的连接','2019-12-21 14:19:09',1,'咖啡机112211'),(40,1,4,'[\"coffeeMachine/coffeeMachineimg_1576837524893_lists7.png\"]',102.20,132.00,1,'书明书链接','2019-12-20 18:25:24',1,'咖啡机名'),(39,1,4,'[\"coffeeMachine/coffeeMachineimg_1576837427528_lists4.png\"]',102.20,132.00,1,'书明书链接','2019-12-20 10:12:13',1,'咖啡机名安康'),(44,1,4,'[\"coffeeMachine/coffeeMachineimg_1576913139832_lists8.png\"]',102.20,132.00,1,'书明书链接','2019-12-21 15:12:01',1,'哈哈哈'),(45,1,4,'[\"coffeeMachine/coffeeMachineimg_1576913286568_lists7.png\"]',102.20,132.00,1,'书明书链接','2019-12-21 15:25:56',1,'哈哈哈大'),(47,1,4,'[\"coffeeMachine/coffeeMachineimg_1576913271130_lists2.png\"]',102.20,132.00,1,'书明书链接','2019-12-21 15:27:51',1,'哈哈的话vjocjvlads'),(36,1,5,'[\"coffeeMachine/coffeeMachineimg_1576837501894_lists5.png\"]',102.20,132.00,1,'书明书链接','2019-12-19 11:59:49',1,'咖啡机名'),(41,1,6,'[\"coffeeMachine/coffeeMachineimg_1576837562268_lists2.png\"]',102.20,132.00,1,'书明书链接','2019-12-20 18:26:02',1,'咖啡机名');

/*Table structure for table `coffeecapsule` */

DROP TABLE IF EXISTS `coffeecapsule`;

CREATE TABLE `coffeecapsule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classification` int(11) DEFAULT NULL COMMENT '商品分类',
  `name` varchar(20) DEFAULT NULL COMMENT '商品名称',
  `title` varchar(50) DEFAULT NULL COMMENT '商品标题',
  `img` varchar(1000) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL COMMENT '描述',
  `bakingDescription` varchar(500) DEFAULT NULL COMMENT '烘焙描述',
  `placefOrigin` varchar(500) DEFAULT NULL COMMENT '原产地',
  `strength` int(11) DEFAULT NULL COMMENT '强度 1-12等级',
  `capAmount` int(11) DEFAULT NULL COMMENT '杯量',
  `aroma` int(11) DEFAULT NULL COMMENT '香型',
  `acidity` int(11) DEFAULT NULL COMMENT '酸度，也分1-12等',
  `bitterness` int(11) DEFAULT NULL COMMENT '苦度 1-12',
  `alcohol` int(11) DEFAULT NULL COMMENT '醇厚度 1-12',
  `degreeofBaking` int(11) DEFAULT NULL COMMENT '烘焙度',
  `coffeeClassification` int(11) DEFAULT NULL COMMENT '咖啡分类',
  `price` double(8,2) DEFAULT NULL COMMENT '价格',
  `discountPrice` double(8,2) DEFAULT NULL COMMENT '折扣价格',
  `taste` varchar(10) DEFAULT NULL COMMENT '长度为 6 的字符串',
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `capAmount_id` (`capAmount`),
  KEY `aroma_id` (`aroma`),
  KEY `Coffee_Class` (`classification`),
  KEY `Coffee_Classfi` (`coffeeClassification`),
  CONSTRAINT `Coffee_Classfi` FOREIGN KEY (`coffeeClassification`) REFERENCES `coffeeclassification` (`id`),
  CONSTRAINT `aroma_id` FOREIGN KEY (`aroma`) REFERENCES `aroma` (`aromaId`),
  CONSTRAINT `capAmount_id` FOREIGN KEY (`capAmount`) REFERENCES `capamount` (`id`),
  CONSTRAINT `goodsClass_classification` FOREIGN KEY (`classification`) REFERENCES `npscommodity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

/*Data for the table `coffeecapsule` */

insert  into `coffeecapsule`(`id`,`classification`,`name`,`title`,`img`,`description`,`bakingDescription`,`placefOrigin`,`strength`,`capAmount`,`aroma`,`acidity`,`bitterness`,`alcohol`,`degreeofBaking`,`coffeeClassification`,`price`,`discountPrice`,`taste`,`createTime`) values (50,2,'拿铁111','你去看人家的哇嘎也','[\"coffeeCap/img_1576634764026_002.jpg\",\"coffeeCap/img_1576634764028_007.jpg\",\"coffeeCap/img_1576634764042_008.jpg\"]','娃娃啊','烘焙','中国',1,1,2,3,4,1,3,6,120.10,120.00,'121211','2019-12-18 10:06:04'),(54,2,'拿铁111','你去看人家的哇嘎也','[\"coffeeCap/img_1576635518748_002.jpg\",\"coffeeCap/img_1576635518749_007.jpg\",\"coffeeCap/img_1576635518776_008.jpg\"]','娃娃啊','烘焙','中国',1,1,2,3,4,1,3,6,120.10,120.00,'121211','2019-12-18 10:18:38'),(59,2,'拿铁111','你去看人家的哇嘎也','[\"coffeeCap/img_1576661189875_002.jpg\",\"coffeeCap/img_1576661189876_007.jpg\",\"coffeeCap/img_1576661190209_008.jpg\"]','娃娃啊','烘焙','中国',1,1,12,3,4,1,3,6,120.10,120.00,'121211','2019-12-18 17:26:30'),(60,2,'拿铁111','你去看人家的哇嘎也','[\"coffeeCap/img_1576721754372_002.jpg\",\"coffeeCap/img_1576721754374_007.jpg\",\"coffeeCap/img_1576721754392_008.jpg\"]','娃娃啊','烘焙','中国',1,1,12,3,4,1,3,6,120.10,120.00,'121211','2019-12-19 10:15:54'),(61,2,'拿铁111','你去看人家的哇嘎也','[\"coffeeCap/img_1576721978550_002.jpg\",\"coffeeCap/img_1576721978553_007.jpg\",\"coffeeCap/img_1576721978681_008.jpg\"]','娃娃啊','烘焙','中国',1,1,12,3,4,1,3,6,120.10,120.00,'121211','2019-12-19 10:19:38'),(68,2,'咖啡号店','这里是描述','[\"coffeeCap/img_1576808527029_timg (4).jpg\"]','商品详情描述','1','中国',2,4,1,2,1,1,1,1,62.20,1.00,'还可以','2019-12-20 10:22:07'),(69,2,'咖啡号店','这里是描述','[\"coffeeCap/img_1576808684243_timg (5).jpg\"]','商品详情描述','1','中国',2,4,1,2,1,1,1,1,62.20,1.00,'还可以','2019-12-20 10:24:44');

/*Table structure for table `coffeeclassification` */

DROP TABLE IF EXISTS `coffeeclassification`;

CREATE TABLE `coffeeclassification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `className` varchar(20) DEFAULT NULL,
  `descript` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `coffeeclassification` */

insert  into `coffeeclassification`(`id`,`className`,`descript`) values (1,'浓烈咖啡','浓烈咖啡的描述'),(2,'浓缩咖啡','浓烈咖啡的描述'),(3,'大杯咖啡','大杯咖啡的描述'),(4,'低咖啡因咖啡','低咖啡因咖啡描述'),(5,'风味咖啡','风味咖啡描述'),(6,'大师匠心之作','大师匠心之作的描述');

/*Table structure for table `colorofmachine` */

DROP TABLE IF EXISTS `colorofmachine`;

CREATE TABLE `colorofmachine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `colorofmachine` */

insert  into `colorofmachine`(`id`,`value`) values (1,'红色'),(2,'白色'),(3,'黑色'),(4,'灰色'),(5,'黄色'),(6,'绿'),(7,'米黄'),(8,'深红');

/*Table structure for table `fragrance` */

DROP TABLE IF EXISTS `fragrance`;

CREATE TABLE `fragrance` (
  `fragranceId` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(20) DEFAULT NULL,
  `descript` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`fragranceId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `fragrance` */

insert  into `fragrance`(`fragranceId`,`value`,`descript`) values (1,'果香型','果香型的描述'),(2,'圆润均衡型','圆润均衡型的描述'),(3,'浓烈系列','浓烈系列的描述');

/*Table structure for table `infor` */

DROP TABLE IF EXISTS `infor`;

CREATE TABLE `infor` (
  `inforId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL COMMENT '称谓',
  `firstName` varchar(20) DEFAULT NULL COMMENT '姓',
  `lastName` varchar(20) DEFAULT NULL COMMENT '名',
  `customerNumber` varchar(50) DEFAULT NULL COMMENT '会员号',
  `chooseLocation` varchar(50) DEFAULT NULL COMMENT '选择地址',
  `email` varchar(30) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(30) DEFAULT NULL COMMENT '电话',
  `postCode` varchar(10) DEFAULT NULL COMMENT '邮编',
  `MessageCategory` varchar(20) DEFAULT NULL COMMENT '消息类别',
  `repliedLanguage` varchar(20) DEFAULT NULL COMMENT '回复语言',
  `capsuleType` varchar(20) DEFAULT NULL COMMENT '购买的是什么类型的胶囊',
  `subject` varchar(20) DEFAULT NULL COMMENT '消息主题',
  `message` varchar(20) DEFAULT NULL COMMENT '消息内容',
  `attachment` varchar(1000) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`inforId`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

/*Data for the table `infor` */

insert  into `infor`(`inforId`,`title`,`firstName`,`lastName`,`customerNumber`,`chooseLocation`,`email`,`phone`,`postCode`,`MessageCategory`,`repliedLanguage`,`capsuleType`,`subject`,`message`,`attachment`,`createTime`) values (50,'小姐','小白','徐',NULL,'中国香港 (Hong Kong)','2310171316@qq.com','18334145203','561000','订单信息与查询','中文','2','今天是星期一','我是张三','infor/file_1576810287011_Desert.jpg','2019-12-21 15:36:09'),(51,'小姐','小白','徐',NULL,'中国香港 (Hong Kong)','2310171316@qq.com','18334145203','561000','订单信息与查询','中文','2','今天是星期一','我是张三','infor/file_1576810287035_Desert.jpg','2019-12-21 15:36:09'),(52,'先生','西草佰','徐',NULL,'中国','2310171316@qq.com','18334145203','561000','产品信息','中文','1','飞得更高三个发','放给三个','infor/file_1576837176944_Koala.jpg','2019-12-21 15:36:09');

/*Table structure for table `npscommodity` */

DROP TABLE IF EXISTS `npscommodity`;

CREATE TABLE `npscommodity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `commodityName` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `npscommodity` */

insert  into `npscommodity`(`id`,`commodityName`) values (1,'咖啡机'),(2,'咖啡胶囊');

/*Table structure for table `retrievepwd` */

DROP TABLE IF EXISTS `retrievepwd`;

CREATE TABLE `retrievepwd` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(20) DEFAULT NULL,
  `veriCode` varchar(10) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

/*Data for the table `retrievepwd` */

insert  into `retrievepwd`(`id`,`email`,`veriCode`,`createTime`) values (1,'2943439858@qq.com','xf9i','2019-12-04 08:54:06'),(2,'2943439858@qq.com','hfub',NULL),(3,'2943439858@qq.com','l4wy','2019-12-03 08:55:38'),(4,'2943439858@qq.com','vnui',NULL),(5,'2943439858@qq.com','tg1o',NULL),(6,'2943439858@qq.com','p46p',NULL),(7,'2943439858@qq.com','syju',NULL),(8,'2943439858@qq.com','puf2',NULL),(9,'2943439858@qq.com','qchc',NULL),(10,'2943439858@qq.com','edvz',NULL),(11,'2943439858@qq.com','ktkn',NULL),(12,'2943439858@qq.com','nate',NULL),(13,NULL,NULL,NULL),(14,'2943439858@qq.com','yv86',NULL),(15,'2943439858@qq.com','lmdy',NULL),(16,'2943439858@qq.com','y53d',NULL),(17,'2943439858@qq.com','eucz','2019-12-10 09:13:22'),(18,'2655816316@qq.com','krt3','2019-12-10 19:17:11'),(19,'2655816316@qq.com','b6hc','2019-12-10 19:20:23'),(20,'2655816316@qq.com','alre','2019-12-10 19:22:57'),(21,'2943439858@qq.com','5po2','2019-12-10 19:25:35'),(22,'2655816316@qq.com','v24l','2019-12-10 19:26:06'),(23,'2655816316@qq.com','bguh','2019-12-10 19:30:36'),(24,'2655816316@qq.com','h7f8','2019-12-11 09:55:34'),(25,'2655816316@qq.com','lv71','2019-12-11 10:06:50'),(26,'2655816316@qq.com','65bz','2019-12-11 10:15:40'),(27,'2655816316@qq.com','nk1u','2019-12-11 10:17:51'),(28,'2655816316@qq.com','mf6y','2019-12-11 10:20:22'),(29,'2655816316@qq.com','fy06','2019-12-11 10:23:18'),(30,'2655816316@qq.com','93d8','2019-12-11 10:30:59'),(31,'2655816316@qq.com','4op1','2019-12-11 10:33:22'),(32,'2655816316@qq.com','udub','2019-12-11 10:34:23'),(33,'2655816316@qq.com','se7g','2019-12-11 10:35:09'),(34,'2655816316@qq.com','lc7c','2019-12-11 10:37:17'),(35,'2655816316@qq.com','vd91','2019-12-11 10:41:06'),(36,'2655816316@qq.com','jofl','2019-12-11 10:43:26'),(37,'2655816316@qq.com','ae5u','2019-12-11 10:44:34'),(38,'2655816316@qq.com','3bu3','2019-12-11 10:46:40'),(39,'2655816316@qq.com','239w','2019-12-11 10:48:19'),(40,'2655816316@qq.com','t8pt','2019-12-11 10:51:46'),(41,'2655816316@qq.com','8ulk','2019-12-11 10:53:32'),(42,'2655816316@qq.com','7nc0','2019-12-17 09:32:22'),(43,'2943439858@qq.com','1xgu','2019-12-17 09:32:39'),(44,'2655816316@qq.com','tpfr','2019-12-18 18:13:42');

/*Table structure for table `shoppingcart` */

DROP TABLE IF EXISTS `shoppingcart`;

CREATE TABLE `shoppingcart` (
  `addCartId` int(11) NOT NULL AUTO_INCREMENT,
  `npscommodity` int(11) NOT NULL COMMENT '商品的分类',
  `commodity` int(11) NOT NULL COMMENT '商品的id',
  `userId` int(11) NOT NULL COMMENT '用户id',
  `quantity` int(11) DEFAULT NULL COMMENT '商品数量',
  `totalPrice` double(8,2) DEFAULT NULL COMMENT '单个商品总价',
  `STATUS` varchar(1) DEFAULT NULL COMMENT '0 表示加入订单未付款，1 表示 已付款',
  PRIMARY KEY (`npscommodity`,`commodity`,`userId`),
  UNIQUE KEY `id` (`addCartId`),
  UNIQUE KEY `addCartId` (`addCartId`),
  KEY `cart_user` (`userId`),
  CONSTRAINT `cart_npscomm` FOREIGN KEY (`npscommodity`) REFERENCES `npscommodity` (`id`),
  CONSTRAINT `cart_user` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `shoppingcart` */

insert  into `shoppingcart`(`addCartId`,`npscommodity`,`commodity`,`userId`,`quantity`,`totalPrice`,`STATUS`) values (3,1,40,1,10,1320.00,'0'),(1,2,59,1,10,1200.00,'0');

/*Table structure for table `specifications` */

DROP TABLE IF EXISTS `specifications`;

CREATE TABLE `specifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `weight` varchar(20) DEFAULT NULL COMMENT '重量',
  `capacity` varchar(20) DEFAULT NULL COMMENT '容量',
  `size` varchar(10) DEFAULT NULL COMMENT '尺寸',
  `pressure` varchar(10) DEFAULT NULL COMMENT '压力',
  `auto_shoutD` varchar(1) DEFAULT NULL COMMENT '自动关机 （1表示是 or 0 表示 否）',
  `water_tank` varchar(20) DEFAULT NULL COMMENT '水箱',
  `height_pressure_extraction` varchar(20) DEFAULT NULL COMMENT '高压萃取',
  `origin` varchar(20) DEFAULT NULL COMMENT '产地',
  `app_connection` varchar(10) DEFAULT NULL COMMENT 'app连接',
  `milk_form_system` varchar(1) DEFAULT NULL COMMENT '奶沫系统',
  `cupAmount` int(11) DEFAULT NULL COMMENT '咖啡杯量',
  `preheatTime` varchar(20) DEFAULT NULL COMMENT '预热时间',
  PRIMARY KEY (`id`),
  KEY `spe_cup` (`cupAmount`),
  CONSTRAINT `spe_cup` FOREIGN KEY (`cupAmount`) REFERENCES `capamount` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `specifications` */

insert  into `specifications`(`id`,`weight`,`capacity`,`size`,`pressure`,`auto_shoutD`,`water_tank`,`height_pressure_extraction`,`origin`,`app_connection`,`milk_form_system`,`cupAmount`,`preheatTime`) values (1,'5kg','500ml','15*70*20','50pa','0','1','1','中国','1','1',1,'70s'),(2,'5kg','500ml','15*70*20','50pa','0','1','1','中国','1','1',1,'70s'),(3,'5kg','500ml','15*70*20','50pa','0','1','1','中国','1','1',1,'70s');

/*Table structure for table `title` */

DROP TABLE IF EXISTS `title`;

CREATE TABLE `title` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `title` */

insert  into `title`(`id`,`title`) values (1,'先生'),(2,'太太'),(3,'小姐'),(4,'女士'),(5,'博士'),(6,'夫妇');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `surname` varchar(10) DEFAULT NULL COMMENT '姓',
  `name` varchar(20) DEFAULT NULL COMMENT '名',
  `email` varchar(20) DEFAULT NULL COMMENT '电子邮箱',
  `password` varchar(100) DEFAULT NULL,
  `distributeclass` varchar(1) DEFAULT NULL COMMENT '配送地址分类。0表示个人，1 表示公司',
  `title` int(11) DEFAULT NULL COMMENT '称谓',
  `location` varchar(10) DEFAULT NULL COMMENT '地点（国家）',
  `address` varchar(50) DEFAULT NULL COMMENT '地址',
  `city` varchar(20) DEFAULT NULL COMMENT '城市',
  `postCode` varchar(10) DEFAULT NULL COMMENT '邮政编码',
  `phone` varchar(11) DEFAULT NULL COMMENT '电话号码',
  `language` varchar(1) DEFAULT NULL COMMENT '语言，0 表示中文， 1 表示英文',
  `shippingNotes` varchar(100) DEFAULT NULL COMMENT '配送备注',
  `deliveryAddress` varchar(1) DEFAULT NULL COMMENT '配送地址是否与账单地址相同 ，1 表示相同， 0 表示 不同',
  `subscription` varchar(1) DEFAULT NULL COMMENT '是否订阅， 1 表示订阅，0 表示不订阅',
  PRIMARY KEY (`id`),
  KEY `user_title` (`title`),
  CONSTRAINT `user_title` FOREIGN KEY (`title`) REFERENCES `title` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`surname`,`name`,`email`,`password`,`distributeclass`,`title`,`location`,`address`,`city`,`postCode`,`phone`,`language`,`shippingNotes`,`deliveryAddress`,`subscription`) values (1,'郭','涛','2943439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆','重庆','4000000','17784450544','0','没有备注1','0','0'),(2,'郭','涛','2943439858@qq.com','e10adc3949ba59abbe56e057f20f883e','0',1,'中国','重庆','重庆','4000000','17784450544','0','没有备注1','0','0'),(3,'郭','涛','2943439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆','重庆','4000000','17784450544','0','没有备注1','0','0'),(4,'郭','涛','2943439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆','重庆','4000000','17784450544','0','没有备注1','0','0'),(5,'郭','涛','2943439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆','重庆','4000000','17784450544','0','没有备注1','0','0'),(6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'郭郭','治涛','2943439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆','重庆','408000','18323929404','0','配送备注','0','0'),(8,'郭','治涛','2943439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆涪陵xx','重庆','408000','18323929404','0','配送备注',NULL,NULL),(9,'郭','治涛','29433439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆涪陵xx','重庆','408000','18323929404','0','配送备注',NULL,NULL),(10,'郭','治涛','29433439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆涪陵xx','重庆','408000','18323929404','0','配送备注',NULL,NULL),(11,'郭','治涛','2943439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆涪陵xx','重庆','408000','18323929404','0','配送备注','0','0'),(12,'郭','治涛','29434398583@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆涪陵xx','重庆','408000','18323929404','0','配送备注','0','0'),(13,'郭','治涛','2943439858@qq.com','670b14728ad9902aecba32e22fa4f6bd','0',1,'中国','重庆涪陵xx','重庆','408000','18323929404','0','配送备注','0','0'),(14,'徐','小白','2310171316@qq.com','25f9e794323b453885f5181f1b624d0b','0',1,'中国','重庆涪陵xx','重庆','408000','18323929404','0','配送备注','0','0');

/*Table structure for table `userorder` */

DROP TABLE IF EXISTS `userorder`;

CREATE TABLE `userorder` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单的自增长id',
  `npscommodity` int(11) NOT NULL COMMENT '商品的分类',
  `commodity` int(11) NOT NULL COMMENT '商品的id',
  `userId` int(11) NOT NULL COMMENT '用户id',
  `quantity` int(11) DEFAULT NULL COMMENT '商品数量',
  `orderNumber` varchar(500) NOT NULL COMMENT '订单编号',
  `totalPrice` double(8,2) DEFAULT NULL COMMENT '单个商品总价',
  `status` varchar(1) DEFAULT NULL COMMENT '0 表示加入订单未付款，1 表示 已付款',
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`npscommodity`,`commodity`,`userId`,`orderNumber`),
  UNIQUE KEY `id` (`id`),
  KEY `order_user` (`userId`),
  CONSTRAINT `order_npscomm` FOREIGN KEY (`npscommodity`) REFERENCES `npscommodity` (`id`),
  CONSTRAINT `order_user` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

/*Data for the table `userorder` */

insert  into `userorder`(`id`,`npscommodity`,`commodity`,`userId`,`quantity`,`orderNumber`,`totalPrice`,`status`,`createTime`) values (2,1,17,1,10,'1576223695155',141.00,'1','2019-12-13 15:54:55'),(4,1,17,1,10,'1576224304448',141.00,'1','2019-12-13 16:05:04'),(5,1,17,1,10,'1576224340086',141.00,'1','2019-12-13 16:05:40'),(6,1,17,1,10,'1576225632390',141.00,'1','2019-12-13 16:27:12'),(7,1,17,1,10,'1576225657369',141.00,'1','2019-12-13 16:27:37'),(8,1,17,1,10,'1576459483716',141.00,'1','2019-12-16 09:24:43'),(9,1,17,1,10,'1576459519151',141.00,'1','2019-12-16 09:25:19'),(10,1,17,1,10,'1576459588411',141.00,'1','2019-12-16 09:26:28'),(11,1,17,1,10,'1576459704911',141.00,'1','2019-12-16 09:28:24'),(12,1,17,1,10,'1576460342869',141.00,'1','2019-12-16 09:39:02'),(13,1,17,1,10,'1576460517648',141.00,'1','2019-12-16 09:41:57'),(14,1,17,1,10,'1576461010363',141.00,'1','2019-12-16 09:50:10'),(15,1,17,1,10,'1576461182905',141.00,'1','2019-12-16 09:53:02'),(16,1,17,1,10,'1576461514151',141.00,'1','2019-12-16 09:58:34'),(17,1,17,1,10,'1576461548382',141.00,'1','2019-12-16 09:59:08'),(18,1,17,1,10,'1576461747640',141.00,'1','2019-12-16 10:02:27'),(19,1,17,1,10,'1576461879025',141.00,'1','2019-12-16 10:04:39'),(20,1,17,1,10,'1576463650558',141.00,'1','2019-12-16 10:34:10'),(21,1,17,1,10,'1576464405211',141.00,'1','2019-12-16 10:46:45'),(22,1,17,1,10,'1576464771791',141.00,'1','2019-12-16 10:52:51'),(23,1,17,1,10,'1576465229436',141.00,'1','2019-12-16 11:00:29'),(24,1,17,1,10,'1576465477487',141.00,'1','2019-12-16 11:04:37'),(25,1,17,1,10,'1576465921624',141.00,'1','2019-12-16 11:12:01'),(26,1,17,1,10,'1576466065764',141.00,'1','2019-12-16 11:14:25'),(27,1,17,1,10,'1576466136085',141.00,'1','2019-12-16 11:15:36'),(28,1,17,1,10,'1576466188035',141.00,'1','2019-12-16 11:16:28'),(29,1,17,1,10,'1576466557546',141.00,'1','2019-12-16 11:22:37'),(30,1,17,1,10,'1576467774723',141.00,'1','2019-12-16 11:42:54'),(31,1,17,1,10,'1576468574606',141.00,'1','2019-12-16 11:56:14'),(32,1,17,1,10,'1576468615533',141.00,'1','2019-12-16 11:56:55'),(33,1,17,1,10,'1576470146765',141.00,'1','2019-12-16 12:22:26'),(34,1,17,1,10,'1576470247831',141.00,'1','2019-12-16 12:24:07'),(35,1,17,1,10,'1576470308051',141.00,'1','2019-12-16 12:25:08'),(36,1,17,1,10,'1576474787014',141.00,'1','2019-12-16 13:39:47'),(37,1,17,1,10,'1576474837780',141.00,'1','2019-12-16 13:40:37'),(38,1,17,1,10,'1576474892444',141.00,'1','2019-12-16 13:41:32'),(39,1,17,1,10,'1576474997282',141.00,'1','2019-12-16 13:43:17'),(40,1,17,1,10,'1576475074136',141.00,'1','2019-12-16 13:44:34'),(41,1,17,1,10,'1576475219082',141.00,'1','2019-12-16 13:46:59'),(42,1,17,1,10,'1576475266005',141.00,'1','2019-12-16 13:47:46'),(43,1,17,1,10,'1576476297461',141.00,'1','2019-12-16 14:04:57'),(44,1,17,1,10,'1576476326146',141.00,'1','2019-12-16 14:05:26'),(45,1,17,1,10,'1576476359541',141.00,'1','2019-12-16 14:05:59'),(46,1,17,1,10,'1576476397888',141.00,'1','2019-12-16 14:06:37'),(47,1,17,1,10,'1576476439025',141.00,'1','2019-12-16 14:07:19'),(48,1,17,1,10,'1576476499069',141.00,'1','2019-12-16 14:08:19'),(49,1,17,1,1000,'1576476511783',14100.00,'1','2019-12-16 14:08:31'),(50,1,17,1,1000,'1576476542797',14100.00,'1','2019-12-16 14:09:02'),(51,1,17,1,1000,'1576548627727',14100.00,'1','2019-12-17 10:10:27'),(52,1,17,1,1000,'1576548678511',14100.00,'1','2019-12-17 10:11:18'),(59,1,36,1,10,'1576843236849',1320.00,'1','2019-12-20 20:00:36'),(60,1,36,1,10,'1576843403599',1320.00,'1','2019-12-20 20:03:23'),(61,1,36,1,10,'1576843491152',1320.00,'1','2019-12-20 20:04:51'),(62,1,36,1,10,'1576843748494',1320.00,'1','2019-12-20 20:09:08'),(63,1,36,1,10,'1576844554740',1320.00,'1','2019-12-20 20:22:34'),(64,1,36,1,10,'1576890334503',1320.00,'1','2019-12-21 09:05:34'),(65,1,36,1,10,'1576892210684',1320.00,'1','2019-12-21 09:36:50'),(66,1,36,1,10,'1576899330062',1320.00,'1','2019-12-21 11:35:30'),(53,2,43,1,10,'1576728771624',1200.00,'1','2019-12-19 12:12:51'),(54,2,59,1,10,'1576738403715',1200.00,'1','2019-12-19 14:53:23'),(55,2,59,1,10,'1576738551949',1200.00,'1','2019-12-19 14:55:51'),(56,2,59,1,10,'1576738674918',1200.00,'1','2019-12-19 14:57:54'),(57,2,59,1,10,'1576738700451',1200.00,'1','2019-12-19 14:58:20'),(58,2,59,1,10,'1576738702885',1200.00,'1','2019-12-19 14:58:22');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
