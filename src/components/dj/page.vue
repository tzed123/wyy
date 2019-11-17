<template>
  <div class='head'>
    <!--第一部分-->
    <div class='top'>
      <a id='left' href=""><img src="@/assets/dj/1.png"/></a>
      <span>我的音乐</span>
      <a id='right' href=""><img src="@/assets/dj/2.png"/></a>
    </div>
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
    <div class='meau'>
  
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
/* <!--第一部分--> */
.top{
  height:4rem;
  text-align:center;
}
.top #left{
  float:left ;
  margin-top:15px;
  margin-left:15px;
}
.top span{
  font-size:16px;
  font-weight:bold;
  line-height:60px;
}
.top #right{
  float:right;
  margin-top:15px;
  margin-right:10px; 
}
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

</style>