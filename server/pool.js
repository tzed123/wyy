//引入mysql模块
const mysql=require("mysql")
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"bubble",
  port:3306,
  connectionLimit:20
});
//导出连接池
module.exports=pool;