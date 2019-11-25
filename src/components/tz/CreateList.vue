<template >
  <div id="container">
    <p class="title">新建歌单</p>
    <input class="input" placeholder="请输入歌单标题" type="text">
    <div class="btn dis-flex">
      <p @touchstart.stop='cancel'>取消</p>
      <p @touchstart.stop='cancel'>提交</p>
    </div>
  </div>
</template>
<script>
export default{
  methods:{
     cancel(){
      this.$emit('cancel')
    },
  }
}
</script>
<style scoped>
  #container{
    background:white;
    border-radius:0.5rem;
    width:90%;    
    padding:0.5rem 1rem;
    position:fixed;
    z-index:250;
    top:15rem;
    left:5%;
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