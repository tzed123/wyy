<template>
  <span class="msk"></span>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .msk{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right:0;
    height:100%;
    width:100%;
    background-color: rgba(0,0,0,.3);
    z-index: 100;
    transition:all 1s;
  }
</style>