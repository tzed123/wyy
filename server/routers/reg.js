//引入express模块
const express=require("express");
//引入连接池
const pool=require("../pool.js");
//创建路由对象
const router=express.Router();

router.post("/reg",(req,res)=>{
var {uname,upwd}=req.body
  var sql='INSERT INTO reg (uname,upwd)VALUES(?,?)';
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    if (result.affectedRows>0){
			res.send({code:1,msg:'注册成功'});
		}else{
			res.send({code:0,msg:'注册失败'});
		}	
  })
})


module.exports=router;