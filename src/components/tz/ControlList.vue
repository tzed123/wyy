<template>
<div id="container">
  <p class="frame">歌单：<span>歌名</span></p>
  <ul>
    <li class="frame" v-for="(val,i) of li" :key="i">
      <img class="pic" :src="val">
      <p>{{i}}</p>
    </li>
    <li class="frame">
      <img class="pic" src="@/assets/tz/trashcan.png">
      <p>删除</p>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data(){
    return{
      li:{"下载":"@/assets/tz/download.png","删除":"@/assets/tz/trashcan.png"}
      
    }
  }
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
  .frame:active{
    background:#eee;
  }
  .pic{
    width:1rem;
    height:1rem;
    margin-right:0.5rem;
  }
</style>