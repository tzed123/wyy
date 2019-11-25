<template>
<div id="container"> 
  <!-- 轮播图 -->
  <mt-swipe :auto="4000" class="carousel">
    <mt-swipe-item v-for="val of carousel" :key="val"><img class="w-100" :src="require(`@/assets/tz/banner${val}.jpg`)"></mt-swipe-item>
  </mt-swipe>
  <!--推荐-->
  <ul id="circle">
    <li class="circle-li" v-for='(item,index) of circle'>
     <img class="circle-img" :src="require(`@/assets/tz/${item}.png`)" alt="">
      <p class="size12 ">{{index}}</p>
    </li>
  </ul>

  <p class="size20 margin-t-b" >推荐歌单</p>
  <div id="song">
    <div class="song-unit">
     <router-link to="/songsheetz">
      <img class="song-pic" src="@/assets/tz/tx.jpg" alt="">
      <p class="size12">入耳即溶，那些甜到心底的温柔男生</p>
      </router-link>
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
  data(){
    return{
      circle:{'未开放1':'circle','未开放2':'circle','未开放3':'circle','未开放4':'circle'},
      carousel:["1","2","3"],
    }
  }
}
</script>
<style scoped>
  #container{
    width:95%;
    margin:0 auto;
    padding-bottom:3rem;
  }
  .carousel{
    height:9rem;
  }
  /* 红色圆圈区域 */
  #circle{
    padding-top:1.5rem;
    padding-bottom:1.5rem;
    display:flex;
    justify-content:space-around;
    border-bottom:0.05rem solid #ccc;
  }
  .circle-li{
    text-align:center;
  }
  .circle-img{
    width:2.8rem;
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