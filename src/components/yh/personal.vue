<template>
  <div class="beijing">
     <!-- t跳转界面 -->
   <div class="bg d-flex header"></div>
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
 <router-link to="/vip"><div class="xf">续费</div></router-link> 
 <div><img class="sb" src="../../assets/yh/sb.png" alt=""></div>

<!--轮播-->
<mt-swipe :auto="4000" class="carousel">
  <mt-swipe-item><img class="w-100" src="@/assets/tz/banner1.jpg"></mt-swipe-item>
  <mt-swipe-item><img class="w-100" src="@/assets/tz/banner2.jpg"></mt-swipe-item>
  <mt-swipe-item><img class="w-100" src="@/assets/tz/banner3.jpg"></mt-swipe-item>
</mt-swipe>

<p class="hj">黑胶vip特权</p>
 <div class="daxiao d-flex">
  <div class="daxiao-l"><img class="w-100" src="../../assets/yh/1.jpg"></div>
  <div><img class="w-100" src="../../assets/yh/2.jpg"></div>
 </div>
 
 <p class="zhuti">黑胶vip音画主题</p>
 <div class="tupian d-flex">
 <div class="tuipian-l"><img class="w-100" src="../../assets/yh/3.jpg"></div>
  <div class="tuipian-l"><img class="w-100" src="../../assets/yh/4.jpg"></div>
  <div><img class="w-100" src="../../assets/yh/3.jpg"></div>
 </div>
  </div>
</template>
<style scoped>
.beijing{
  background:#eeeded;
  bottom:0;
  position:absolute;
  top:0;
}
  .sb{
  width:100%;
  z-index:0;
  position: absolute;
  top:0;
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
  z-index:1;
}
.wz{
  margin-left:3%;
  margin-top:3%;
  color:#f4e8ec;
  z-index:1;
}
.gr{
  margin-top:7%;
  margin-left:10%;
  z-index:1;
}
/* 特权 */
.tq{
  margin-top:7%;
  margin-left: 10%;
  z-index:1;
}
.xf{
  width:7rem;
  height:2.5rem;
  border-radius: 50px;
  background-image: linear-gradient(to bottom right,#f0deda, #e3c6c2);
  float: right;
  text-align: center;
  margin-right:5%;
  margin-top:-7%;
  line-height:2.5rem;
 position:relative;
  z-index:2;
}
.tq img{
margin-right: 5%;
z-index:1;
}

  .carousel{
    width:90%;
    height:8rem;
    margin-top:13%;
    margin-left:5%;
    border-radius:0.5rem;
  }
/*图片*/
  .hj{
    margin-left:5%;
    margin-top:3%;
  }
   .zhuti{
    margin-left:5%;
    margin-top:3%;
  }
  .w-100{
    width:100%;
  }

  .daxiao{
    width:90%;
    margin-top:3%;
    margin-left:5%;
  }
  .daxiao-l{
    margin-right:5%;
  }

  .tupian{
    width:90%;
    margin-top:3%;
    margin-left:5%;
  }
  .tuipian-l{
     margin-right:5%;
  }
</style>