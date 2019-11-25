<template>
<div class="con">
  <hr>
  <div id="container" class="dis-flex">
    <div class="left">
      <div class="avatar" @touchstart="jump">
        <img src="@/assets/tz/tx.jpg">
      </div>
      <div class="title">
        <p>歌名</p>
        <p>歌手</p>
      </div>
    </div>
    <div class="control dis-flex">
      <div class="play" @touchstart.stop="shifter">
        <img v-show="img.i1" src="@/assets/tz/play1.png">
        <img v-show="img.i2" src="@/assets/tz/pause.png">
      </div>
      <div class="icon">
        <img src="@/assets/tz/folder1.png">
      </div>
    </div>    
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      img:{i1:true,i2:false}
    }
  },
  methods:{
    shifter(){
      if(this.img.i1==true){
        this.img.i1=false;
        this.img.i2=true;
      }else{
        this.img.i1=true;
        this.img.i2=false;
      }
    },
    jump(){
      this.$router.push('/player')
    }
  }

}
</script>
<style scoped>
  .con{
    background:#fff;
    width:100%;
    position:fixed;
    left:0;
    bottom:0;
    z-index:99;
  }
  #container{
    margin-top:0.5rem;
    margin-bottom:0.5rem;
    align-items:center;
  }
  .left{
    display:flex;
  }
  .avatar{
    border-radius:50%;
    overflow:hidden;
    width:3rem;
    height:3rem;
  }
  .avatar>img{
    width:100%;
  }
  .title{
    margin-left:1rem;
  }
  .play{
    width:1rem;
  }
  .play>img{
    width:100%;
  }
  .icon{
    width:2rem;
  }
  .icon>img{
    width:100%;
  }
  .control{
    align-items:center;
    width:4.5rem;
  }
</style>