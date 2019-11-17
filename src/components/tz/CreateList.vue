<template >
  <div id="container">
    <p class="title">新建歌单</p>
    <input class="input" placeholder="请输入歌单标题" type="text">
    <div class="btn dis-flex">
      <p>取消</p>
      <p>提交</p>
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
    padding:0.5rem 1rem;
  }
  .title{
    margin:1rem 0;
  }
  .input{
    display:block;
    padding:1rem;
    margin-bottom:1rem;
    width:100%;
    border:transparent;
    border-bottom:0.05rem solid #ddd;
  }
  .btn{
    margin-left:12rem;
    width:6rem;
  }
</style>