<template>
<div id="container">
  <div class="dis-flex collection">
    <p>收藏到歌单</p>
    <div class="mul dis-flex">
      <div class="mul-img">
      <img  src="@/assets/tz/mul-select.png">
      </div>
      <p>多选</p>
    </div>   
  </div> 
  <!--新建歌单-->
  <div class="create">
    <div class="plus">
      <img src="@/assets/tz/plus.png">
    </div>
    <p>新建歌单</p>
  </div>
  <ul>
    <!--单个列表-->
    <li class="dis-flex list">
      <div class="left">
        <div class="avatar">
          <img src="@/assets/tz/tx.jpg">
        </div>
        <div class="desc">
          <p>歌单1</p>
          <p class="size12">15首</p>
        </div>
      </div>
      <!--选项框-->
      <div class="checkbox">
        <img src="@/assets/tz/select.png">
        <img src="@/assets/tz/select-check.png">
      </div>
    </li>    
  </ul>
</div>
</template>
<script>
export default {
  data(){
    return{
      isBg:false
    }
  },
  methods:{
    changebg:function(){
      this.isBg=!this.isBg
  }
  }
}

</script>
<style scoped>
  #container{
    border:0.1rem solid black;
    border-radius:0.5rem;
    width:90%;
    margin:0 auto;
    padding:1rem 0;
  }
  .collection{
    padding:0 1rem;
    height:3rem;
    line-height:3rem;
  }
  .collection :active{
    background:#eee;
  }
  .mul{    
    width:3.3rem;
  }
  .mul-img{
    width:1rem;

  }
  .mul-img>img{
    width:100%;
  }
  .create{    
    padding:0.5rem 0.5rem;
    display:flex;
    line-height:3rem;
  }
  .create>p{
    margin-left:1rem;
  }
  .plus{
    width:3rem;
    height:3rem;
    border-radius:0.3rem;
    background:#ddd;
  }
  .plus>img{
    margin-top:0.35rem;
    margin-left:0.35rem;
    width:75%;
  }  
  /*列表*/ 
  .list{
    padding:0.5rem;
  }
  .left{
    display:flex;
  }
  .avatar{
    width:3rem;    
  }
  .avatar>img{
    width:100%;
  }
  .desc{
    margin-left:1rem;
  }
  .checkbox{
    margin-right:0.5rem;
    display:flex;
    width:1rem;
    align-items:center;
  }
  .checkbox>img{
    width:100%;
  }
  .create:active{
    background:#eee;
  }
  .list:active{
    background:#eee;
  }
</style>