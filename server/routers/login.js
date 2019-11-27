//引入express模块
const express=require("express");
//引入连接池
const pool=require("../pool.js");
//创建路由对象
const router=express.Router();

router.post("/login",function(req,res){
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var sql="select * from reg where uname=? and upwd=?"
	pool.query(sql,[$uname,$upwd],function(err,result){
		if (result.length>0){
			res.send("1");
		}else{
			res.send("0")
		}
	})
}); 

module.exports=router;