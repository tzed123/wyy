SET NAMES UTF8;
DROP DATABASE IF EXISTS bubble;
CREATE DATABASE bubble CHARSET=UTF8;
USE bubble;
CREATE TABLE reg(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),

  upwd VARCHAR(32),
  isvip BOOLEAN
);
INSERT INTO reg VALUES(NULL,'wyy','123456789','0');
#ALTER TABLE reg ADD username VARCHAR(16);

-- 评论

CREATE TABLE comment( 
  cid INT PRIMARY KEY AUTO_INCREMENT,
  songId VARCHAR(64), 
  ucid INT,
  content VARCHAR(256), 
  giveLike INT, 
  createTime  DATE,
  replyId INT,
  wstatus BOOLEAN,
  replyContent VARCHAR(256)
);
INSERT INTO comment VALUES(NULL,"倒带","1","人在蒙古,刚下航母","439000","2015-11-02","2",true,"别回了,太难了");
