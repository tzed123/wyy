<template>
<div>
  <hr>
  <div id="container" class="dis-flex">
    <div class="left">
      <div class="avatar">
        <img src="@/assets/tz/tx.jpg">
      </div>
      <div class="title">
        <p>歌名</p>
        <p>歌手</p>
      </div>
    </div>
    <div class="control dis-flex">
      <div class="play">
        <img src="@/assets/tz/play1.png">
        <!--<img src="../assets/pause.png">-->
      </div>
      <div class="icon">
        <img src="@/assets/tz/folder1.png">
      </div>
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
    margin-top:0.5rem;
    margin-bottom:0.5rem;
    align-items:center;
  }
  .left{
    display:flex;
  }
  .avatar{
    border-radius:50%;
    overflow:hidden;
    width:3rem;
    height:3rem;
  }
  .avatar>img{
    width:100%;
  }
  .title{
    margin-left:1rem;
  }
  .play{
    width:1rem;
  }
  .play>img{
    width:100%;
  }
  .icon{
    width:2rem;
  }
  .icon>img{
    width:100%;
  }
  .control{
    align-items:center;
    width:4.5rem;
  }
</style>