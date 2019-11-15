<template>
<div id="container"> 
  <!-- 轮播图 -->

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
  <p class="size20 margin-t-b">新碟</p>
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


</style>