<template>
  <div id="container">
  
    <input class="input" type="text" placeholder="听了这么多，你可能有话想说">
    <button class="btn">发送</button>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  #container{
    width:95%;
    padding:0.3rem 0;
  }
  .input{
    padding:0.5rem 0.3rem;
    width:75%;
    border:transparent;
    border-bottom:0.05rem solid black;
  }
  .btn{
    margin-left:1rem;
    padding:0.3rem 1rem;
  }
</style>