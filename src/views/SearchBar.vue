<template>
  <div id="search-bar">
    <router-link to="/discovery">
    <img class="img-size" src="../assets/return.png" alt=""></router-link>
    <input class="input" type="text" placeholder="请输入歌手/歌名/歌单名...">
    <img class="img-size" src="../assets/search.png" alt="">
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #search-bar{
    width:95%;
    margin:1rem auto;
    display:flex;
    justify-content:space-between;
  }
  .input{
    padding-left:1.5rem;
    width:14rem;
    height:1.4rem;
    border:transparent;
    border-bottom:1px solid black;
    
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