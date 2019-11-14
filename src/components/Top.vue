<template>
  <div id="top">
    <img class="img-size" src="../assets/folder.png" alt="">
    <div class="dis-flex wid">
      <p>我的</p>
      <p>发现</p>
      <p>VIP</p>      
    </div>
    <img class="img-size" src="../assets/search.png" alt="">
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #top{
    width:95%;
    margin:1rem auto;
    display:flex;
    justify-content:space-between;
  }
  .img-size{
    width:1.5rem;
    height:1.5rem;
  }
  .wid{
    font-size:1.2rem;
    font-weight:bold;
    width:15rem;
  }
</style>