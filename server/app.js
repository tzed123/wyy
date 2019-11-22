//功能：服务器端程序
//1:下载四个模块
//  express			web服务器
//  mysql				mysql驱动
//  cors				处理跨域
//  express-session	会话session对象
//2:vue_server_000/进入命令行
//  npm i mysql express express-session cors
//3:加载四个第三方模块
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser=require('body-parser')
//引入路由器
//(1)引入注册路由
const regRouter=require("./routers/reg.js");
//4:配置数据库连接池:基本效率高保证

//5:创建web服务器 
var server = express();
//6:配置跨域  允许程序列表
//  http://127.0.0.1:8080
//  http://localhost:8080
server.use(cors({
   origin:["http://127.0.0.1:8080","http://localhost:8080"],
   credentials:true  //每次请求验证
}))

//7:配置session环境
server.use(bodyParser.urlencoded({extended:false}));
server.use(session({
   secret:"128位安全字符串",
   resave:true,         //请求更新数据 
   saveUninitialized:true//保存初始数据
}));
//8:配置静态目录 pubic
//8.1:创建public
server.use(express.static("public"))
//9:启动监听端口  3000
server.listen(3000);
//用户路由在服务器下使用，并挂载到/ajax
server.use('/users',regRouter);
