<template>
  <div id="container">
    <p class="settime">定时停止播放</p>
    <ul >
      <li class="dis-flex list">
      <p>不开启</p>
      <img src="../assets/check.png"> 
      </li>
      <li class="dis-flex list">
      <p>10分钟</p>
      <img src="../assets/check.png"> 
      </li>
      <li class="dis-flex list">
      <p>20分钟</p>
      <img src="../assets/check.png"> 
      </li>
      <li class="dis-flex list">
      <p>30分钟</p>
      <img src="../assets/check.png"> 
      </li>
      <li class="dis-flex list">
      <p>45分钟</p>
      <img src="../assets/check.png"> 
      </li>
      <li class="dis-flex list">
      <p>60分钟</p>
      <img src="../assets/check.png"> 
      </li>
    </ul>
    
    <div class="bottom-bar">
    <div class="checkbox">
        <img src="../assets/select.png">
        <img src="../assets/select-check.png">
      </div>
    <p>计时结束后播放完当前歌曲再停止</p>
    </div>    
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #container{
    border:0.1rem solid black;
    border-radius:0.5rem;
    width:90%;
    margin:0 auto;
   
  }
  .settime{
    margin-top:1rem;
    padding:.5rem
  }
  .list{
    align-items:center;    
    padding:.5rem;
  }

  .bottom-bar{
    margin-bottom:.5rem;
    display:flex;
    padding:.5rem;
    border:transparent;
    border-top:0.05rem solid #ccc;
  }
  .checkbox{    
    display:flex;
    width:1rem;
    align-items:center;
    margin-right:0.5rem;
  }
  .checkbox>img{
    width:100%;    
  }
</style>