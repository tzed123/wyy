<template>
  <div class="body">
     <!-- 头部 -->
  <div class="bg d-flex header">
<a href=""><img src="../../assets/yh/return.png" alt=""></a><div class="t-24">我的订单</div> 
  </div>

  <!-- 我的订单 -->
  <div class="bg order">
<a href="" class="d-flex"><div class="t-18">我的订单</div><div class="t-18 all">全部></div></a>
<hr>
<!-- 图标 -->
<div class="icon">
  <div class="t-center"><img src="../../assets/yh/special.png" alt=""><p>数字专曲</p></div>
  <div class="t-center"><img src="../../assets/yh/single.png" alt=""><p>单曲</p></div>
  <div class="t-center"><img src="../../assets/yh/huiyuan.png" alt=""><p>会员</p></div>
</div>
  </div>

  <!--优惠券  -->
  <div class="bg order">
  <a href="" class="d-flex"><div class="t-18">我的优惠券</div><div class="t-18 all">></div></a>
  <hr>
  <a href="" class="d-flex"><div class="t-18">开发票</div><div class="t-18 all">></div></a>
  </div>
  </div>
</template>
<style scoped>
  .body{
  background: #f3f3f3;
}
.bg{
  background: #fff;
}
/* 头部 */
.header img{
  margin:40% 50%;
}
.header div{
  margin-left:10%;
  margin-top:4%;
}
/* 我的订单 */
.order{
  margin-top:4%;
  padding-left: 5%;
}
.order>a>div{
line-height: 2.5;
}
.all{
  color:#a49b9b!important;
  position: absolute;
  right:5%;
}
hr{
  opacity: 0.2;
}
/* 图标 */
.icon{
  display: flex;
  justify-content:space-around;
  margin:3% 0%;
}

</style>