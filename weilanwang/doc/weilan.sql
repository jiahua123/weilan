/*
Navicat MySQL Data Transfer

Source Server         : liujiahua
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : weilan

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-01 14:04:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodcat
-- ----------------------------
DROP TABLE IF EXISTS `goodcat`;
CREATE TABLE `goodcat` (
  `id` int(10) NOT NULL,
  `shuming` varchar(255) DEFAULT NULL,
  `miaoshu` varchar(255) DEFAULT NULL,
  `zuozhe` varchar(255) DEFAULT NULL,
  `yuanjia` decimal(10,2) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `shu_url` varchar(255) DEFAULT NULL,
  `renqi` int(10) DEFAULT NULL,
  `shuliang` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodcat
-- ----------------------------
INSERT INTO `goodcat` VALUES ('2', '补习班轶事', '并因此勾勒出一幅幅当代中学生五彩缤纷的生活画面，富有强烈的艺术感染力。', '辰东', '88.88', '31.99', '2.jpg', '433', '1');
INSERT INTO `goodcat` VALUES ('3', '母亲节的礼物', '有没有那么一个人，你每夜临睡前，都满怀暖暖的温柔，想对TA道一声“晚安”？', '辰东', '89.88', '32.99', '3.jpg', '32', '2');
INSERT INTO `goodcat` VALUES ('7', '武林外传', '本书描述的是位于卡瓦格博雪山下、澜沧江峡谷中的几个藏族村落', '天蚕土豆', '91.88', '36.99', '7.jpg', '12', '6');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `shuming` varchar(255) NOT NULL,
  `miaoshu` varchar(255) DEFAULT NULL,
  `zuozhe` varchar(255) DEFAULT NULL,
  `yuanjia` decimal(10,2) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `shu_url` varchar(255) DEFAULT NULL,
  `renqi` int(255) DEFAULT NULL,
  `kuchun` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '女生贾梅新传', '《女生贾梅新传》作者以其女性特有的细腻笔调', '辰东', '56.66', '30.99', '1.jpg', '3543', null);
INSERT INTO `goods` VALUES ('2', '补习班轶事', '并因此勾勒出一幅幅当代中学生五彩缤纷的生活画面，富有强烈的艺术感染力。', '辰东', '88.88', '31.99', '2.jpg', '433', null);
INSERT INTO `goods` VALUES ('3', '母亲节的礼物', '有没有那么一个人，你每夜临睡前，都满怀暖暖的温柔，想对TA道一声“晚安”？', '辰东', '89.88', '32.99', '3.jpg', '32', null);
INSERT INTO `goods` VALUES ('4', '拯救寄宿者圆圆', '《从你的全世界路过》是微博上写故事的人张嘉佳的一部短篇小说集。', '辰东', '90.88', '33.99', '4.jpg', '2322', null);
INSERT INTO `goods` VALUES ('5', '初二平安夜', '你还记得，老房子门前的那条小路吗？', '辰东', '91.88', '34.99', '5.jpg', '23', null);
INSERT INTO `goods` VALUES ('6', '体育女星', '我纵容自己漂泊了15年。', '天蚕土豆', '90.88', '35.99', '6.jpg', '3434', null);
INSERT INTO `goods` VALUES ('7', '武林外传', '本书描述的是位于卡瓦格博雪山下、澜沧江峡谷中的几个藏族村落', '天蚕土豆', '91.88', '36.99', '7.jpg', '12', null);
INSERT INTO `goods` VALUES ('8', '从你的全世界路过', '《从你的全世界路过》是微博上写故事的人张嘉佳献给你的心动故事。', '天蚕土豆', '92.88', '37.99', '8.jpg', '45', null);
INSERT INTO `goods` VALUES ('9', '河面下的少年', '我们都是这世界的一瞥风景', '天蚕土豆', '93.88', '38.99', '9.jpg', '434', null);
INSERT INTO `goods` VALUES ('10', '写在三十二岁生日', '为了你的出场，我用什么热场？', '天蚕土豆', '94.88', '39.99', '10.jpg', '66', null);
INSERT INTO `goods` VALUES ('11', '我希望有个如你一般的人', '从你的全世界路过，随便打开一篇就可以了。', '天蚕土豆', '93.88', '40.99', '11.jpg', '77', null);
INSERT INTO `goods` VALUES ('12', '一路陪你笑着逃亡', '迷幻药》有句话说得很酷：你的本质，我的本质', '金庸', '94.88', '41.99', '12.jpg', '88', null);
INSERT INTO `goods` VALUES ('13', '老情书', '荣登纪伊国屋、诚品、博客来', '金庸', '55.99', '44.09', '13.jpg', '99', null);
INSERT INTO `goods` VALUES ('14', '哈姆莱特', '《哈姆莱特》：莎士比亚戏剧经典', '金庸', '56.99', '45.09', '14.jpg', '123', null);
INSERT INTO `goods` VALUES ('15', '歌声中的藏式婚礼', '　阳光射进来，有尘埃的味道，这是15年来我第一次与自己和解。', '金庸', '57.99', '46.09', '15.jpg', '324', null);
INSERT INTO `goods` VALUES ('16', '非典型性财经男士', '一本风靡世界的哲学启蒙书', '金庸', '58.99', '47.09', '16.jpg', '345', null);
INSERT INTO `goods` VALUES ('17', '我讲给的第一个故事', '为了忘却那段痛苦的回忆，我只身前往曼哈顿，开始新的生活。', '古龙', '59.99', '48.09', '17.jpg', '356', null);
INSERT INTO `goods` VALUES ('18', '我只有一套衣服', '以激烈的故事形式表达了人在面对厄运时求生的欲望。?', '古龙', '60.99', '49.09', '18.jpg', '657', null);
INSERT INTO `goods` VALUES ('19', '电化学工业', '偷影子的人', '古龙', '61.99', '47.09', '19.jpg', '5657', null);
INSERT INTO `goods` VALUES ('20', '汉书', '《汉书》这部史学巨著，分为纪12篇', '古龙', '62.99', '48.09', '20.jpg', '543', null);
INSERT INTO `goods` VALUES ('21', '三国史记', '《三国史记》是邻国朝鲜较早出现的汉文史书', '古龙', '63.99', '49.09', '21.jpg', '435', null);
INSERT INTO `goods` VALUES ('22', '王莽朝高句丽记事', '你偷走了我的影子，不论你在哪里，我都会一直想着你', '关月', '64.99', '11.99', '22.jpg', '465', null);
INSERT INTO `goods` VALUES ('23', '茶经', '三国志》全书共计六十五卷', '关月', '65.99', '12.99', '23.jpg', '766', null);
INSERT INTO `goods` VALUES ('24', '三国志', '我纵容自己漂泊了15年。', '关月', '66.99', '13.99', '24.jpg', '4533', null);
INSERT INTO `goods` VALUES ('25', '白夜行', '《白夜行》后，东野圭吾zui受欢迎作品', '关月', '67.99', '14.99', '25.jpg', '4656', null);
INSERT INTO `goods` VALUES ('26', '解忧杂货店', '我发现自己始终在思考一个问题：站在人生的岔路口', '唐七公子', '68.99', '15.99', '26.jpg', '6768', null);
INSERT INTO `goods` VALUES ('27', '化学电源', '你还记得，老房子门前的那条小路吗？', '豆豆', '69.99', '16.99', '27.jpg', '788', null);
INSERT INTO `goods` VALUES ('28', '苏菲的世界', '我们都是这世界的一瞥风景', '豆豆', '70.99', '17.99', '28.jpg', '2324', null);
INSERT INTO `goods` VALUES ('29', '纽约时报', '　阳光射进来，有尘埃的味道，这是15年来我第一次与自己和解。', '豆豆', '71.99', '18.99', '29.jpg', '345', null);
INSERT INTO `goods` VALUES ('30', '解忧杂货店', '日本作家东野圭吾的《解忧杂货店》', '豆豆', '72.99', '19.99', '30.jpg', '667', null);
INSERT INTO `goods` VALUES ('31', '四库全书', '好想知道我的影子会说出我的什么秘密？?', '鲁迅', '73.99', '20.99', '31.jpg', '787', null);
INSERT INTO `goods` VALUES ('32', '达芬奇密码', '为了忘却那段痛苦的回忆，我只身前往曼哈顿，开始新的生活。', '鲁迅', '74.99', '21.99', '32.jpg', '8999', null);
INSERT INTO `goods` VALUES ('33', '电化学的发展趋势', '同时感到温馨、诙谐、爱、喜悦和哀伤', '鲁迅', '75.99', '22.99', '33.jpg', '123', null);
INSERT INTO `goods` VALUES ('34', '卢仝烹茶图', '创造美国百年纪录！', '鲁迅', '39.99', '23.99', '34.jpg', '556', null);
INSERT INTO `goods` VALUES ('35', '失乐园', '这么复杂却又纤细的情感交织出这', '鲁迅', '40.99', '24.99', '35.jpg', '666', null);
INSERT INTO `goods` VALUES ('36', '偷影子的人', '迷幻药》有句话说得很酷：你的本质，我的本质', '鲁迅', '40.99', '25.99', '36.jpg', '687', null);
INSERT INTO `goods` VALUES ('37', '追风筝的人', '为了你的出场，我用什么热场？', '苏童', '41.99', '26.99', '37.jpg', '87', null);
INSERT INTO `goods` VALUES ('38', '泰晤士报', '你还记得，老房子门前的那条小路吗？', '苏童', '42.99', '27.99', '38.jpg', '678', null);
INSERT INTO `goods` VALUES ('39', '茶店', '这就是你在我生命里的角色', '苏童', '43.99', '28.99', '39.jpg', '987', null);
INSERT INTO `goods` VALUES ('40', '电化学热力学', '　阳光射进来，有尘埃的味道，这是15年来我第一次与自己和解。', '苏童', '44.99', '29.99', '40.jpg', '999', null);
INSERT INTO `goods` VALUES ('41', '哈利波特6', '绍熙年间的百衲本', '七君', '45.99', '30.99', '41.jpg', '976', null);
INSERT INTO `goods` VALUES ('42', '四方云动', '我纵容自己漂泊了15年。', '七君', '46.99', '31.99', '42.jpg', '898', null);
INSERT INTO `goods` VALUES ('43', '新列国志', '安县有许多怪现象。', '七君', '47.99', '32.99', '43.jpg', '890', null);
INSERT INTO `goods` VALUES ('44', '格林与童话', '局势越微妙，越能彰显为官艺术；行事越低调，越能趁势反戈一击', '七君', '48.99', '33.99', '44.jpg', '90', null);
INSERT INTO `goods` VALUES ('45', '陆犯焉识', '为了忘却那段痛苦的回忆，我只身前往曼哈顿，开始新的生活。', '七君', '49.99', '34.99', '45.jpg', '3467', null);
INSERT INTO `goods` VALUES ('46', '归来', '你还记得，老房子门前的那条小路吗？', '秦文君', '50.99', '35.99', '46.jpg', '245678', null);
INSERT INTO `goods` VALUES ('47', '远的距离', '不忘公心，升迁步伐更稳健', '秦文君', '51.99', '36.99', '47.jpg', '4567', null);
INSERT INTO `goods` VALUES ('48', '任随时光流转', '智慧更成熟，手腕更强硬。', '秦文君', '52.99', '37.99', '48.jpg', '678', null);
INSERT INTO `goods` VALUES ('49', '东周列国志', '迷幻药》有句话说得很酷：你的本质，我的本质', '秦文君', '53.99', '38.99', '49.jpg', '68', null);
INSERT INTO `goods` VALUES ('50', '那年冬季', '　阳光射进来，有尘埃的味道，这是15年来我第一次与自己和解。', '秦文君', '54.99', '39.99', '50.jpg', '876', null);
INSERT INTO `goods` VALUES ('51', '世间一切，都是遇见', null, '十点读书', '55.99', '33.99', '51.jpg', '66', null);
INSERT INTO `goods` VALUES ('52', '落霞孤鹜', null, '张恨水', '33.99', '22.99', '52.jpg', '789', null);
INSERT INTO `goods` VALUES ('53', '老鼠扛满街找猫', null, '江西人民', '30.99', '23.99', '53.jpg', '34', null);
INSERT INTO `goods` VALUES ('54', '齐白石自述', null, '齐白石', '78.99', '30.99', '54.jpg', '934', null);
INSERT INTO `goods` VALUES ('55', '仲夏之梦', null, '张德玉', '77.99', '23.89', '55.jpg', '7654', null);
INSERT INTO `goods` VALUES ('56', '福尔摩斯探案', null, '于慧丽', '34.89', '32.98', '56.jpg', '754', null);
INSERT INTO `goods` VALUES ('57', '	梦想与疯狂', null, '张凯', '55.98', '23.98', '57.jpg', '876', null);
INSERT INTO `goods` VALUES ('58', '自酿啤酒入门指南', null, '胡凯', '67.98', '12.98', '58.jpg', '987', null);
INSERT INTO `goods` VALUES ('59', '挪威的森林', null, '林少华', '45.65', '34.75', '59.jpg', '65', null);
INSERT INTO `goods` VALUES ('60', '假如我是个作家', null, '冰心', '53.46', '56.99', '60.jpg', '64', null);
INSERT INTO `goods` VALUES ('61', '珊瑚海', null, '冰心', '24.65', '78.99', '61.jpg', '7654', null);
INSERT INTO `goods` VALUES ('62', '将夜', null, '宁缺', '55.99', '344.33', '62.jpg', '4564', null);
INSERT INTO `goods` VALUES ('63', '回明', null, '关月', '34.54', '45.67', '63.jpg', '4643', null);
INSERT INTO `goods` VALUES ('64', '异世高手', null, '关月', '34.87', '57.78', '64.jpg', '5253', null);

-- ----------------------------
-- Table structure for remai
-- ----------------------------
DROP TABLE IF EXISTS `remai`;
CREATE TABLE `remai` (
  `id` int(10) unsigned NOT NULL,
  `shuming` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `yuanjia` decimal(10,2) DEFAULT NULL,
  `shu_url` varchar(255) NOT NULL,
  `zuozhe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of remai
-- ----------------------------
INSERT INTO `remai` VALUES ('51', '世间一切，都是遇见', '33.99', '55.99', '1.jpg', '十点读书');
INSERT INTO `remai` VALUES ('52', '落霞孤鹜', '22.99', '33.99', '2.jpg', '张恨水');
INSERT INTO `remai` VALUES ('53', '老鼠扛满街找猫', '23.99', '30.99', '3.jpg', '江西人民');
INSERT INTO `remai` VALUES ('54', '齐白石自述', '30.99', '78.99', '4.jpg', '齐白石');
INSERT INTO `remai` VALUES ('55', '仲夏之梦', '23.89', '77.99', '5.jpg', '张德玉');
INSERT INTO `remai` VALUES ('56', '福尔摩斯探案', '32.98', '34.89', '6.jpg', ' 于慧丽');
INSERT INTO `remai` VALUES ('57', '梦想与疯狂', '23.98', '55.98', '7.jpg', '张凯 ');
INSERT INTO `remai` VALUES ('58', '自酿啤酒入门指南', '12.98', '67.98', '8.jpg', '胡凯');
INSERT INTO `remai` VALUES ('59', '挪威的森林', '34.75', '45.65', '9.jpg', '林少华');
INSERT INTO `remai` VALUES ('60', '假如我是个作家', '56.99', '53.46', '10.jpg', '冰心');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'aa@aa.com', 'a123456');
INSERT INTO `user` VALUES ('12', 'aa@aa.aa', 'aaaaaa');
INSERT INTO `user` VALUES ('14', 'aa@aa.a', 'aaaaaaa');
INSERT INTO `user` VALUES ('15', 'aa@aaa.aaa', 'aaaaaa');
SET FOREIGN_KEY_CHECKS=1;
