SET NAMES UTF8;
DROP DATABASE IF EXISTS bubble;
CREATE DATABASE bubble CHARSET=UTF8;
USE bubble;
CREATE TABLE reg(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  username VARCHAR(16),
  upwd VARCHAR(32),
  isvip BOOLEAN
);
INSERT INTO reg VALUES(NULL,'wyy','wyy','123456789','0');
#ALTER TABLE reg ADD username VARCHAR(16);

-- 评论

CREATE TABLE comment( 
  cid INT PRIMARY KEY AUTO_INCREMENT,
  songId VARCHAR(64), --歌曲
  uid INT,--评论用户id SELECT uname from reg WHERE uid=uid;
  content VARCHAR(256), --评论内容
  giveLike INT --点赞总量
  createTime  DATE --评论时间
  condition BOOLEAN  --评论状态，是否删除
  replyId INT --回复评论id
)
INSERT INTO comment VALUES(NULL,"倒带","末班车","人在蒙古,刚下航母","439000","2015-11-02","true","别回了,太难了")
