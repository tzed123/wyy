<template>
<div>
  <div class="sel-card">
    <p>综合</p>
    <p>单曲</p>
    <p>歌手</p>
    <p>歌单</p>
  </div>
  <hr>
  <div id="container">  
    <div class="title dis-flex">
      <p>单曲</p>
      <div class="playall dis-flex">
        <img class="playall-img" src="">
        <p class="playall-text">播放全部</p>
      </div> 
    </div>
    <ul id="list" class="dis-flex">
      <li id="piece">
        <div>
          <p>谁</p>
          <p>廖俊涛-个人创作LIVE现场辑</p>
        </div>
        <div class="play-btn">
          <img src="../assets/play.png" alt="">
        </div>
        <div class="threep">
          <img src="../assets/ellipsis.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  

}
</script>
<style scoped>
  .sel-card{
    width:95%;
    margin:0 auto;
    display:flex;
    justify-content:space-around;
  }
  #container{
    width:95%;
    margin:0 auto;
  }
  .play-btn{
    width:1rem;
  }
  .play-btn>img{
    width:100%;
  }
  .threep{
    width:1rem;
  }
  .threep>img{
    width:100%;
  }
  
</style>