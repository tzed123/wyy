SET NAMES UTF8;
DROP DATABASE IF EXISTS bubble;
CREATE DATABASE bubble CHARSET=UTF8;
USE bubble;

--注册
CREATE TABLE reg(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(32),
  isvip BOOLEAN,
  avatar VARCHAR(256) 
);
INSERT INTO reg VALUES(NULL,'wyy','123456789','0','default');
#ALTER TABLE reg ADD username VARCHAR(16);

--歌曲表
CREATE TABLE songs( 
  sid INT PRIMARY KEY AUTO_INCREMENT,
  singer VARCHAR(16), 
  sname VARCHAR(16),
  surl VARCHAR(256), 
  simg VARCHAR(256),
  lyricsite  VARCHAR(256),
  authority BOOLEAN
);
INSERT INTO songs VALUES(NULL,"蔡依林","倒带","http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E8%94%A1%E4%BE%9D%E6%9E%97&step_word=&hs=0&pn=3&spn=0&di=4180&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3329540575%2C131658136&os=3723501277%2C1558591752&simid=3280823672%2C166591850&adpicid=0&lpn=0&ln=3362&fr=&fmq=1574646475549_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg4.cache.netease.com%2Fent%2F2010%2F7%2F27%2F2010072714254248d03.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fjgp_z%26e3B8mn_z%26e3Bv54AzdH3F8aAzdH3Fa0d0AzdH3F89AzdH3FmCJSTSaPaaandDGD_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=","http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E8%94%A1%E4%BE%9D%E6%9E%97&step_word=&hs=0&pn=3&spn=0&di=4180&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3329540575%2C131658136&os=3723501277%2C1558591752&simid=3280823672%2C166591850&adpicid=0&lpn=0&ln=3362&fr=&fmq=1574646475549_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg4.cache.netease.com%2Fent%2F2010%2F7%2F27%2F2010072714254248d03.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fjgp_z%26e3B8mn_z%26e3Bv54AzdH3F8aAzdH3Fa0d0AzdH3F89AzdH3FmCJSTSaPaaandDGD_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=","http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E8%94%A1%E4%BE%9D%E6%9E%97&step_word=&hs=0&pn=3&spn=0&di=4180&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3329540575%2C131658136&os=3723501277%2C1558591752&simid=3280823672%2C166591850&adpicid=0&lpn=0&ln=3362&fr=&fmq=1574646475549_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg4.cache.netease.com%2Fent%2F2010%2F7%2F27%2F2010072714254248d03.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fjgp_z%26e3B8mn_z%26e3Bv54AzdH3F8aAzdH3Fa0d0AzdH3F89AzdH3FmCJSTSaPaaandDGD_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=",true);

--歌手(singers)
CREATE TABLE singers( 
  singerid INT PRIMARY KEY AUTO_INCREMENT,
  singername VARCHAR(16), 
  singerimg VARCHAR(256),
  songs INT, 
  FOREIGN KEY (songs) REFERENCES songs(sid)
);
INSERT INTO singers VALUES(NULL,"青花瓷","https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%91%A8%E6%9D%B0%E4%BC%A6&step_word=&hs=0&pn=8&spn=0&di=211750&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3398046091%2C1611328445&os=1759622082%2C3227596220&simid=3341401566%2C386649611&adpicid=0&lpn=0&ln=3870&fr=&fmq=1574646861981_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.yzwhcm.com%2FuFile%2F4708%2Fproduct%2F201282216656233.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Byzoiv4_z%26e3Bv54AzdH3FvgAzdH3Fr6517vp_etjo_8b0_d9n_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined","1");

--歌单
CREATE TABLE songlists( 
  lid INT PRIMARY KEY AUTO_INCREMENT,
  lname VARCHAR(64),
  limg  VARCHAR(256),
  lsongs INT,
  FOREIGN KEY (lsongs) REFERENCES songs(sid)
);
INSERT INTO songlists VALUES(NULL,"华语私人定制","https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%91%A8%E6%9D%B0%E4%BC%A6&step_word=&hs=0&pn=8&spn=0&di=211750&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3398046091%2C1611328445&os=1759622082%2C3227596220&simid=3341401566%2C386649611&adpicid=0&lpn=0&ln=3870&fr=&fmq=1574646861981_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.yzwhcm.com%2FuFile%2F4708%2Fproduct%2F201282216656233.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Byzoiv4_z%26e3Bv54AzdH3FvgAzdH3Fr6517vp_etjo_8b0_d9n_z%26e3Bip4s&gsm=&rpstart=0&rpnum=0&islist=&querylist=&force=undefined","1");

--用户信息
CREATE TABLE my( 
  liked INT,
  createdlist VARCHAR(1024),
  listcollect INT,
  songcollect INT,
  lastplay INT,
  manage INT,
  user INT,
  FOREIGN KEY (liked) REFERENCES songs(sid),
  FOREIGN KEY (listcollect) REFERENCES songlists(lid),
  FOREIGN KEY (songcollect) REFERENCES songs(sid),
  FOREIGN KEY (lastplay) REFERENCES songs(sid),
  FOREIGN KEY (manage) REFERENCES songs(sid),
  FOREIGN KEY (user) REFERENCES reg(uid)
);
INSERT INTO my VALUES("1","歌单","1","1","1","1","1");

-- 评论
CREATE TABLE comment( 
  cid INT PRIMARY KEY AUTO_INCREMENT,
  songid INT, 
  ucid INT,
  content VARCHAR(256), 
  giveLike INT, 
  createTime  DATE,
  wstatus BOOLEAN,
  FOREIGN KEY (ucid) REFERENCES reg(uid),  
  FOREIGN KEY (songid) REFERENCES songs(sid)
);
INSERT INTO comment VALUES(NULL,"1","1","人在蒙古,刚下航母","439000","2015-11-02",true);


