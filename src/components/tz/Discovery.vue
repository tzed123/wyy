<template>
<div id="container"> 
  <top></top>
  <collect></collect>
  <controllist></controllist>
  <createlist></createlist>
  <playbar></playbar>
  
  <sendmsg></sendmsg>
  <timeclose></timeclose>
  <!-- 轮播图 -->
<mt-swipe :auto="4000" class="carousel">
  <mt-swipe-item><img class="w-100" src="@/assets/tz/banner1.jpg"></mt-swipe-item>
  <mt-swipe-item><img class="w-100" src="@/assets/tz/banner2.jpg"></mt-swipe-item>
  <mt-swipe-item><img class="w-100" src="@/assets/tz/banner3.jpg"></mt-swipe-item>
</mt-swipe>
  <ul id="circle">
    <li class="circle-li">
      <img class="circle-img" src="@/assets/tz/circle.png" alt="">
      <p class="size12 ">每日推荐</p>
    </li>
    <li class="circle-li">
      <img class="circle-img" src="@/assets/tz/circle.png" alt="">
      <p class="size12 ">每日推荐</p>
    </li>
    <li class="circle-li">
      <img class="circle-img" src="@/assets/tz/circle.png" alt="">
      <p class="size12 ">每日推荐</p>
    </li>
    <li class="circle-li">
      <img class="circle-img" src="@/assets/tz/circle.png" alt="">
      <p class="size12 ">每日推荐</p>
    </li>
  </ul>
  <hr>
  <p class="size20 margin-t-b" >推荐歌单</p>
  <div id="song">
    <div class="song-unit">
      <img class="song-pic" src="@/assets/tz/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
    <div class="song-unit">
      <img class="song-pic" src="@/assets/tz/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
    <div class="song-unit">
      <img class="song-pic" src="@/assets/tz/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
  </div>
  <p class="size20 margin-t-b">新碟</p>
  <div id="song">
    <div class="song-unit">
      <img class="song-pic" src="@/assets/tz/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
    <div class="song-unit">
      <img class="song-pic" src="@/assets/tz/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
    <div class="song-unit">
      <img class="song-pic" src="@/assets/tz/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #container{
    width:95%;
    margin:0 auto;
    padding-bottom:3rem;
  }

  /* 红色圆圈区域 */
  #circle{
    margin-top:1.5rem;
    margin-bottom:1.5rem;
    display:flex;
    justify-content:space-around;
  }
  .circle-li{
    text-align:center;
  }
  .circle-img{
    width:3rem;
  }

  /* 推荐歌单 */
  #song{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }
  .song-unit{
    width:7.5rem;
  }
  .song-pic{
    width:7.5rem;
  }
  .margin-t-b{
    margin-top:1.5rem;
    margin-bottom:1.5rem;
  }
  .carousel{
    width:100%;
  
  }
  .w-100{
    width:100%;
  }

</style>