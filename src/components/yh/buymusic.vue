<template>
  <div>
    <!-- t跳转界面 -->
  <div class="bg d-flex header">
      <a href=""><img src="../assets/yh/return.png" alt=""></a><div class="t-24">单曲购买</div> 
        </div>

 <!-- 介绍部分 -->
 <div class="introduce">
   <!-- 图片 -->
   <div class="img"></div>
   <!-- 介绍 -->
   <div class="introduce-wz">
     <p class="p1">冲冲冲冲冲</p>
     <p class="p2">歌手: <span>xxxxxx</span></p>
     <p class="p3">专辑: <span>xxxxxx</span></p>
   </div>
 </div>

 <!-- 渐变条 -->
 <div class="gradual"></div>

 <!-- 购买 -->
 <div class="wz">
   <div>单曲购买</div>
   <p class="price">$2元<span class="price-left">购买后可永久下载</span></p>
   <div class="buy">购买</div>
   <hr>
 </div>
 <div class="wz">
    <div>黑胶VIP</div>
    <p class="price">$11元<span class="price-left">300/首每月免费下载</span></p>
    <div class="buy gb">开通</div>
  </div>

  <!-- 渐变条 -->
 <div class="gradual"></div>

 <!-- 说明 -->
 <div>
    <p>购买说明</p>
    <ul>
      <li>单曲一经购买不支持退款</li>
      <li>自购买之时起5分钟内生效</li>
      <li>购买之后若发现还是无法使用，可以尝试先重启下云音乐客户端</li>
      <li>目前仅会员包和部分数字专辑内歌曲支持单曲购买</li>
      <li>购买成功的歌曲可在会员中心查看</li>
    </ul>
 </div>
  </div>
</template>

<style lang="">
  body{
  padding:2% 3%;
}
.header div{
  margin-left:3%;
}
/* 介绍部分 */
.introduce{
  display: flex;
  margin-top:5%;
}
.img{
  width:100px;
  height:100px;
  border:1px solid red;
}
.introduce-wz{
  margin-left:3%;
}
.p2{
  margin-top:46%;
}
.p3{
  margin-top:5%;
}
/* 渐变条 */
.gradual{
  height:15px;
  background-image: linear-gradient(to bottom right,#8a8a8a, #cecece);
  opacity: 0.1;
  margin-top:4%; 
}
/* 购买 */
.price{
  color: red;
  margin-top:1%;
}
.price-left{
  color:rgb(161, 161, 161);
  font-size: 10px;
  margin-left:3%;
}
.wz{
  margin-top:3%;
  padding:0 5%;
}
.buy{
width:75px;
height:25px;
color:red;
text-align: center;
line-height: 1.65;
border-radius: 50px;
border:1px solid red;
position: absolute;
right:10%;
float: right;
margin-top:-9%;
}
hr{
  margin-top:5%;
  opacity: 0.3;
}
.gb{
  color:#fff;
  background-image: linear-gradient(to bottom right,#c20000, #fb5d5d)
}
/* 说明 */
ul li{
  list-style-type:disc;
}
</style>