<template>
  <div id="container">
    <p class="settime">定时停止播放</p>
    <ul @click="check($event)">
      <li class="dis-flex list" v-for="(val,i) of li" :key="val" @touchstart='killself' :data-memo="i">
      <p>{{val}}</p>
      <img v-show="memo==i" src="@/assets/tz/check.png"> 
      </li>
    </ul>
    <div class="bottom-bar">
    <div class="checkbox" @touchstart="shiftercheck">
        <img v-if="checked==0" src="@/assets/tz/select.png">
        <img v-else="checked==1" src="@/assets/tz/select-check.png">
      </div>
    <p>计时结束后播放完当前歌曲再停止</p>
    </div>    
  </div>
</template>
<script>
export default {
  data(){
    return{
      li:["不开启","10分钟","20分钟","30分钟","45分钟","60分钟"],
      memo:"0",
      checked:"1"
    }
  },
  methods:{
    killself(){
      this.$emit('killself')
    },
    check(e){
      this.memo=e.target.dataset.memo
    },
    shiftercheck(){
      if(this.checked==0){
        this.checked=1
      }else{
        this.checked=0
      }
    }
  }
}
</script>
<style scoped>
  #container{
    position:fixed;
    z-index:250;
    top:8.5rem;
    left:5%;
    border-radius:0.5rem;
    width:90%;
    background:white;
   
  }
  .settime{
    margin-top:1rem;
    padding:.5rem
  }
  .list{
    align-items:center;    
    padding:.5rem;
    height:3rem;
  }
  .list:active{
    background:#eee;
  }
  .bottom-bar{
    margin-bottom:.5rem;
    display:flex;
    padding:.5rem;
    border:transparent;
    border-top:0.05rem solid #ccc;
  }
  .checkbox{    
    display:flex;
    width:1rem;
    align-items:center;
    margin-right:0.5rem;
  }
  .checkbox>img{
    width:100%;    
  }
</style>