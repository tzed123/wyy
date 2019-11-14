<template>
<div id="container" >
  <top></top>
  <!-- 轮播图 -->
  <div id="carousel" class="pore">
    <!-- 图片 -->
    <ul class="c-ul-pic">
        <li class="fl"><img class="c-width" src="../assets/banner1.jpg" alt=""></li>
        <li class="fl"><img class="c-width" src="../assets/banner2.jpg" alt=""></li>
        <li class="fl"><img class="c-width" src="../assets/banner3.jpg" alt=""></li>
        <li class="fl"><img class="c-width" src="../assets/banner1.jpg" alt=""></li>
    </ul>
    <!-- 圆点 -->
    <ul class="c-ul-point">
        <li class="point active"></li>
        <li class="point"></li>
        <li class="point"></li>
    </ul>
    <div></div>
  </div>
  <ul id="circle">
    <li class="circle-li">
      <img class="circle-img" src="../assets/circle.png" alt="">
      <p class="size12 ">每日推荐</p>
    </li>
    <li class="circle-li">
      <img class="circle-img" src="../assets/circle.png" alt="">
      <p class="size12 ">每日推荐</p>
    </li>
    <li class="circle-li">
      <img class="circle-img" src="../assets/circle.png" alt="">
      <p class="size12 ">每日推荐</p>
    </li>
    <li class="circle-li">
      <img class="circle-img" src="../assets/circle.png" alt="">
      <p class="size12 ">每日推荐</p>
    </li>
  </ul>
  <hr>
  <p class="size20 margin-t-b" >推荐歌单</p>
  <div id="song">
    <div class="song-unit">
      <img class="song-pic" src="../assets/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
    <div class="song-unit">
      <img class="song-pic" src="../assets/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
    <div class="song-unit">
      <img class="song-pic" src="../assets/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
  </div>
  <p class="size20 margin-t-b" >新碟</p>
  <div id="song">
    <div class="song-unit">
      <img class="song-pic" src="../assets/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
    <div class="song-unit">
      <img class="song-pic" src="../assets/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
    </div>
    <div class="song-unit">
      <img class="song-pic" src="../assets/tx.jpg" alt="">
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
*{margin:0;padding:0;}
  #container{
    width:95%;
    margin:0 auto;
  }
  /* 红色圆圈区域 */
  #circle{
    margin-top:1.5rem;
    margin-bottom:1.5rem;
    display:flex;
    justify-content:space-around;
  }
  .circle-li{
    text-align:center
  }
  .circle-img{
    width:3rem;
  }
  hr{
    opacity:0.4
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
  /*轮播*/
  #carousel{
    width:24rem;
    height:9rem;
    overflow:hidden;
    border-radius:0.3rem;
  }
  .c-width{
    width:24rem;
  }
  .c-ul-pic{
    width: 96rem;
    height:8rem;  
  }
  .c-ul-point{   
    position:absolute;
    width:3rem;
    top:7.5rem;
    left:50%;
    margin-left:-1.5rem;
    z-index:10;
    display:flex;
    justify-content: space-around;
  }
  .point{
    width:0.5rem;
    height:0.5rem;
    background:white;
    border-radius:50%;
    cursor: pointer;
  }
  .active{
    background:#e30000;
  }
  .transition{
    transition:0.5s;
  }
</style>