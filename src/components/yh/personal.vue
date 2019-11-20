<template>
  <div>
     <!-- t跳转界面 -->
   <div class="bg d-flex header">
      <a href=""><img src="../../assets/yh/return.png" alt=""></a><div class="t-24">会员中心</div> 
        </div>

  <!-- 个人页面 -->
  <div class="d-flex gr">
    <!-- 头像 -->
    <div class="img"><img src="" alt=""></div>
    <!-- 介绍 -->
    <div class="wz">
      <div>id</div>
      <div>特权</div>
    </div>
  </div>

  <!-- 特权 -->
 <div class="tq d-flex">
   <img src="../../assets/yh/vip-vip.png" alt="">
   <img src="../../assets/yh/vip-sq.png" alt="">
   <img src="../../assets/yh/vip_xiazai.png" alt="">
 </div>
 <div class="xf">续费</div>

 <div><img class="sb" src="../../assets/yh/sb.png" alt=""></div>
  </div>
</template>
<style scoped>
  .sb{
  width:100%;
  z-index:-100;
  position: absolute;
  top:7%;
}
.header{
  padding: 2% 3%;
}
.header div{
  margin-left:3%;
}
/* 个人页面 */
.img{
  height:50px;
  width:50px;
  border:1px solid red ;
  border-radius: 50%;
}
.wz{
  margin-left:3%;
  margin-top:3%;
  color:#f4e8ec;
}
.gr{
  margin-top:13%;
  margin-left:10%;
}
/* 特权 */
.tq{
  margin-top:7%;
  margin-left: 10%;
}
.xf{
  width: 100px;
  height:30px;
  border-radius: 50px;
  background-image: linear-gradient(to bottom right,#f0deda, #e3c6c2);
  float: right;
  text-align: center;
  margin-right:5%;
  margin-top:-7%;
  line-height: 1.75;
}
.tq img{
margin-right: 5%;
}
</style>