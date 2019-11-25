<template>
  <div class='head'>
    <!--第二部分-->
    <div class='banner'>
      <!--私人FM-->
      <div class='ban'>
        <a href=""><img src="@/assets/dj/3.png"/></a>
        <p>私人FM</p>
      </div>
      <!--Sati空间-->
      <div class='ban'>
        <a href=""><img src="@/assets/dj/4.png"/></a>
        <p>Sati空间</p>
      </div> 
      <!--私藏推荐-->
      <div class='ban'>
        <a href=""><img src="@/assets/dj/5.png"/></a>
        <p>私藏推荐</p>
      </div>
      <!--最嗨电音-->
      <div class='ban'>
        <a href=""><img src="@/assets/dj/10.png"/></a>
        <p>最嗨电音</p>
      </div> 
    </div>
    <!--第三部分-->
    <div class='concent'>
      <a href=""><div><img src="@/assets/dj/6.png"/><div>本地音乐</div></div></a><hr> 
      <a href=""><div><img src="@/assets/dj/7.png"/><div>最近播放</div></div></a><hr>  
      <a href=""><div><img src="@/assets/dj/8.png"/><div>我的电台</div></div></a><hr> 
      <a href=""><div><img src="@/assets/dj/9.png"/><div>我的收藏</div></div></a>                   
    </div>
    <!--第四部分-->
    <!--我创建的歌单-->
    <div class='music' @click="song">我创建的歌单
      <div class='like'>
        <a href=""><img src="@/assets/dj/12.png"/></a> 
        <a href=""><img src="@/assets/zz/ellipsis-black.png"/> </a> 
      </div>
    </div>
    <div class='inlike' v-show="ismusicfraom"><img src="@/assets/dj/18.png"/>
      <div class="musicfraom" v-show="ismusicfraom">我喜欢的音乐</div>
    </div>
    <!--我收藏的歌单-->
    <div class='music' @click="sing">我收藏的歌单
      <div class='like'>
        <a href=""><img src="@/assets/dj/12.png"/></a> 
        <a href=""><img src="@/assets/zz/ellipsis-black.png"/> </a> 
      </div>
    </div>
    <div class='inlike' v-show="ismusicfrom"><img src="@/assets/dj/17.png"/>
      <div class="musicfraom" v-show="ismusicfrom">rapper说情话</div>
    </div>      
</div>
</template>
<script>
export default {
  data(){
    return{
      ismusicfraom:false,
      ismusicfrom:false,
    }
  },
  methods:{
    song(){
      this.ismusicfraom=!this.ismusicfraom;
    },
    sing(){
      this.ismusicfrom=!this.ismusicfrom;
    }
  }
}
</script>
<style scoped>
/* <!--第二部分--> */
.banner{
  height:5rem;
  display:flex;
  justify-content:center;
  margin-top:0.5rem;
  margin-bottom:0.6rem;
}
.ban{
  height:2.5rem;
  width:2.5rem;
  background:#e10000;
  border-radius:50%;
  margin:10px 28px 10px 28px;  
}
.banner .ban img{
  widows:2.5rem;
  height:2.5rem;
}
.banner .ban p{
  width:4rem;
  font-size:0.5rem;
  color:gray;
}
hr{
  opacity:0.2;
}
/*<!--第三部分-->*/
.concent{
  margin-top:4%;
}
.concent div{
  display:flex;
  margin-left:6%;
  margin-bottom:2%;
  margin-top:2%;
  font-size:1rem;
  color:black;
  font-weight:500;
}
.concent img{
  width:8%;
  height:8%;
}
/*<!--第四部分-->*/     
.music{
  display:flex;
  font-size:1.2rem;
}
.music img{
  width:1.5rem;
  height:1.5rem;
  margin-right:0.2rem;
}
.like{
  margin-left:14rem;
}
.inlike{  
  display:flex;
}
.inlike img{
  margin-left:0.5rem;
  width:12%;
  height:12%
}
.inlike .musicfraom{
  font-size:1.05rem;
  margin-top:0.5rem;
}

</style>