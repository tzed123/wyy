<template>
<p class="frame">歌单：<span>歌单名</span></p>
</template>
<script>
export default {
  
}
</script>
<style scoped>
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
</style>