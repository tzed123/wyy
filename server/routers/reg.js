//引入express模块
const express=require("express");
//引入连接池
const pool=require("../pool.js");
//创建路由对象
const router=express.Router();

router.post("/reg",(req,res)=>{
  console.log(1)
  console.log(req)
var {uname,upwd}=req.body
  var sql='INSERT INTO reg VALUES(null,?,?,0)';
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    if (result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}	
  })
})
module.exports=router;