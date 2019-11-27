<template>
<p class="frame">{{title}}</p>
</template>
<script>
export default {
 props:['title']
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