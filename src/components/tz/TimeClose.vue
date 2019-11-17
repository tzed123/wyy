tz/<template>
  <div id="container">
    <p class="settime">定时停止播放</p>
    <ul >
      <li class="dis-flex list" v-for="(val,i) of li" :key="val">
      <p>{{val}}</p>
      <img src="@/assets/tz/check.png"> 
      </li>
    </ul>
    
    <div class="bottom-bar">
    <div class="checkbox">
        <img src="@/assets/tz/select.png">
        <img src="@/assets/tz/select-check.png">
      </div>
    <p>计时结束后播放完当前歌曲再停止</p>
    </div>    
  </div>
</template>
<script>
export default {
  data(){
    return{
      li:["不开启","10分钟","20分钟","30分钟","45分钟","60分钟"]
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
   
  }
  .settime{
    margin-top:1rem;
    padding:.5rem
  }
  .list{
    align-items:center;    
    padding:.5rem;
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