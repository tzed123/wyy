//引入express模块
const express=require("express");
//引入连接池
const pool=require("../pool.js");
//创建路由对象
const router=express.Router();

router.post("/comment",(req,res)=>{
  var{content}=req.body
  var cid=req.query.cid;
  var songid=req.query.songid;
  var uid=req.query.uid;
  //var content=req.query.content;
  var giveLike=req.query.giveLike;
  var createTime=req.query.createTime;
  var condition=req.query.condition;
  var replyId=req.query.replyId;
  var sql='INSERT INTO comment SET?';
  pool.query(sql,[content],(err,result)=>{
    if(err)throw err;
    if (result.affectedRows>0){
      consle.log(1)
			res.send('1');
		}else{
      console.log('2')
			res.send('0');
		}	
  })
})
module.exports=router;