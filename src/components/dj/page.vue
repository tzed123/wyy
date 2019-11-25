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
    <div class='music' @click="song"><img :class="flag?'tran':''" src="@/assets/dj/19.png"/>我创建的歌单
      <div class='like'>
        <img src="@/assets/dj/12.png" @touchstart.stop="createlist">
        <img src="@/assets/zz/ellipsis-black.png"/>
      </div>
    </div>
    <div class="left" v-show="ismusicfraom">
      <div class="avatar">
        <img src="@/assets/dj/21.png">
      </div>
      <div class="desc">
        <router-link to='/songsheetz'>
          <p>我喜欢的音乐</p>
          <p class="size12">1314首</p>
        </router-link>
      </div>
    </div>
    <ul v-show="ismusicfraom">
      <li>
        <div class="left">
        <div class="avatar">
          <img src="@/assets/dj/18.png">
        </div>
        <div class="desc">
          <p>董先生</p>
          <p class="size12">520首</p>
        </div>
      
        </div>
      </li>
    </ul>
    <!--我收藏的歌单-->
    <div class='music' @click="sing"><img id='d1' :class="flagg?'tran':''" src="@/assets/dj/19.png"/>我收藏的歌单
      <div class='like'>
        <a href=""><img src="@/assets/zz/ellipsis-black.png"/></a> 
      </div>
    </div>
    <ul>
      <li v-show="ismusicfrom">
        <div class="left">
        <div class="avatar">
          <img src="@/assets/dj/17.png">
        </div>
        <div class="desc">
          <p>rapper说情话</p>
          <p class="size12">888首</p>
        </div>
      </div>
      </li>
    </ul>    
    <!--<div class='inlike' v-show="ismusicfrom"><img src="@/assets/dj/17.png"/>
      <div class="musicfraom" v-show="ismusicfrom">rapper说情话</div>
    </div>-->      
</div>
</template>
<script>
export default {
  data(){
    return{
      ismusicfraom:false,
      ismusicfrom:false,
      flag:false,
      flagg:false,
    }
  },
  methods:{
    song(){
      this.ismusicfraom=!this.ismusicfraom;
      this.flag=!this.flag;
    },
    sing(){
      this.ismusicfrom=!this.ismusicfrom;
      this.flagg=!this.flagg;
    },
    createlist(){
      this.$emit('createlist')
    }
  }
}
</script>
<style scoped>
/* <!--第二部分--> */
.head{
 padding:10px 10px;
}
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
  width:1.2rem;
  height:1.2rem;
  margin-right:0.2rem;
}
.like{
  margin-left:12rem;
}
  .list{
    padding:0.5rem;
  }
  .left{
    display:flex;    
  }
  .left .d2{
  width:1.2rem;
  height:1.2rem;
  margin-right:0.2rem; 
  margin-top:1rem; 
  margin-left:15rem;
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

.tran{
  transform:rotate(90deg);
}
</style>