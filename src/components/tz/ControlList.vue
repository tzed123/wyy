<template>
<div id="container">
  <p class="frame">歌单：<span>歌名</span></p>
  <ul>
    <li class="frame">
      <img class="pic" src="@/assets/tz/download.png">
      <p>下载</p>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  

}
</script>
<style scoped>
  #container{
    border:0.1rem solid black;
    border-top-right-radius:0.5rem;
    border-top-left-radius:0.5rem;
    width:90%;
    margin:0 auto;
    padding:1rem 0 0.3rem 0;
  }
  .frame{
    display:flex;
    align-items:center;
    padding:0.5rem;
    border:transparent;
    border-bottom:0.05rem solid #ccc;
  }
  .pic{
    width:1rem;
    height:1rem;
    margin-right:0.5rem;
  }
</style>