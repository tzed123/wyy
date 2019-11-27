<template> 
  <div class="container">
    <div class="bg">
      <div class="bg-f">
        <img src="@/assets/zz/aimer.jpg" alt="">
      </div>
    </div>
    <div class="songSheet-title">
        <h3 class="songSheet-header">
            <div class="title">
                <img src="@/assets/zz/back-white.png" alt="">
                <span class="songSheet-font">歌单</span>
            </div>
            <div class="title">
                <img src="@/assets/zz/search-white.png" alt="">&nbsp;&nbsp;&nbsp;
                <img src="@/assets/zz/ellipsis-white.png" alt="">
            </div>
        </h3> 
        <div class="songSheet-cover">
            <img src="@/assets/zz/aimer.jpg" alt="">
            <div class="songSheet-info">
                <h3>么么</h3>
                <a href="" class="user-info">
                    <img src="@/assets/zz/aimer.jpg" alt=""><p>原创君</p>
                </a>
            <h6 class="songSheet-edit">编辑信息</h6>
            </div>
        </div>
        <ul class="songSheet-handle">
            <li><router-link to="/commentInterface"><img src="@/assets/zz/comment.png" alt=""></router-link><p>666</p></li> 
            <li><img src="@/assets/zz/share-white.png" alt=""><p>666</p></li> 
            <li><img src="@/assets/zz/download-white.png" alt=""><p>下载</p></li> 
            <li><img src="@/assets/zz/multipleSelection-white.png" alt=""><p>多选</p></li>
        </ul>
    </div>
  </div>
</template>
<script>
export default{
    
}
</script>
<style scoped>
.bg{
  width:100%;
  height:15rem;
  background-size:cover;
  filter:blur(50px);
  opacity:0.6;
}
.bg-f{
  width:100%;
  height:15rem;
  background:black;
  opacity:0.6;
} 
.bg img{
  width:100%;
  height:100%;
}
.songSheet-title{
  position:absolute;
  top:0;
  right:0;
}
.container{  
  width:100%;
  height:100%;
  position:absolute;
  top:0rem;
}
.songSheet-header{
  margin:0 10px 10px 10px;
  font-size:1.5rem;
  font-weight:normal;
  display:flex;
  justify-content: space-between;
}
.title{
  display:flex;
  align-items:center;
}
.songSheet-header img{
  width:1.5rem;
  height:1.5rem;
}
.songSheet-font{
  font-size:1.1rem;
  color:white;
  height:1.5rem;
  line-height:1.5rem;
  margin-left:0.5rem;
}
.songSheet-header>div{
  margin-top:0.5rem;
}
.songSheet-cover{
  display:flex;
  margin-left:0.7rem;
}
.songSheet-cover>img{
  width:7.5rem;
  height:7.5rem;
  border-radius:0.5rem;
}
.songSheet-info{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom:20px;
}
.user-info{
  display:flex;
  height:3rem;
}
.user-info>p{
  height:3rem;
  line-height:3rem;
  margin-left:0.5rem;
}
.songSheet-info{
  height:7.5rem;
  margin-left:0.5rem;
}
.songSheet-edit{
    font-size:12px;
}
.songSheet-handle{
  display:flex;
  justify-content: space-around;
}
.songSheet-handle>li{
  width:10%;
  height:3rem;
  margin-bottom:0.5rem;
}
.songSheet-handle>li img{
  width:75%;
  height:60%;
}
.songSheet-handle>li>p{
  font-size:0.8rem;
  color:white;
  margin-left:0.2rem;
}
.user-info>img{
  width:3rem;
  height:3rem;
  border-radius:1.5rem;
}
</style>