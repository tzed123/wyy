<template>
    <div id="container">
        <table></table>
        <div class="songSheet-songDetail-title">
            <div class="songSheet-songDetail-title-left">
                <div class="songSheet-songDetail-title-left-cover">
                    <img src="@/assets/zz/babyFade0.png" alt="">
                </div> 
                <div class="song-consise-detail">
                    <p class="song-name">歌曲 : 奈何</p>
                    <p class="singer">王若琳</p>
                </div>
            </div>
            <div>
                <p class="songSheet-songDetail-vip">vip首开5元</p>
            </div>
        </div>
        <p class="moneyEnjoy">开通VIP享高品质听觉盛宴</p>
        <div class="songSheet-songDetail-handle">
            <hr id="bold">  
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/play-black.png" alt="">
                <p>下一首播放</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/collection-black.png" alt="">
                <p>收藏到歌单</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/download-black.png" alt="">
                <p>下载</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/comment-black.png" alt="">
                <p>评论(666)</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/share-black.png" alt="">
                <p>分享</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/singer-black.png" alt="">
                <p>歌手: 王若琳</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/album-black.png" alt="">
                <p>专辑: 奈何</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/ring-black.png" alt="">
                <p>设为铃声</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/buy-black.png" alt="">
                <p>购买单曲</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/popularity-black.png" alt="">
                <p>人气榜应援</p>
            </div>
            <hr>
            <div class="songSheet-songDetail-handle-item">
                <img src="@/assets/zz/shild-black.png" alt="">
                <p>屏蔽歌曲或歌手</p>
            </div>
            <hr>
            <div class="blank-area"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SongDetails'
}
</script>
<style scoped>
#container{
  width:100%;
  height:100%;
  background-color:blue;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
}
.songSheet-songDetail-title{
  display:flex;
  justify-content: space-between;
  margin:0.8rem;
}
.songSheet-songDetail-title-left{
  display:flex;
}
.songSheet-songDetail-title-left-cover{
  width:4rem;
  height:4rem;
  margin-right:0.5rem;
}
.songSheet-songDetail-title-left-cover>img{
  width:100%;
  height:100%;
}
.songSheet-songDetail-title-left>div{
  display:flex;
  flex-direction: column;
}
.songSheet-songDetail-vip{
  font-size:0.8rem;
  color:red;
  padding:0.25rem 0.6rem;
  border:solid 1px red;
  border-radius: 0.75rem;
  margin-top:1.2rem;
}
.moneyEnjoy{
  font-size:0.5rem;
  color:#444;
  margin-left:0.8rem;
  margin-bottom:0.8rem;
}
.songSheet-songDetail-handle{
  display:flex;
  flex-direction: column;
}
.songSheet-songDetail-handle hr{
  right:0;
  background-color:#666;
  border:none;
  height:1px;
  width:89%;
  opacity: 0.5;
  margin-left:2.8rem;
}
#bold{
  margin-left:0rem;
  width:100%;
}
.song-consise-detail{
  margin-top:0.75rem;
}
.singer{
  font-size:0.5rem;
  color:#444;
}
.songSheet-songDetail-handle-item{
  display:flex;
  margin-top:0.25rem;
  margin-bottom:0.25rem;
}
.songSheet-songDetail-handle-item>img{
  width:1.5rem;
  height:1.5rem;
  margin-left:0.7rem;
  margin-top:0.5rem;
}
.songSheet-songDetail-handle-item>p{
  font-size:1rem;
  line-height:2.4rem;
  text-align: center;
  margin-left:0.5rem;
}
.blank-area{
  width:100%;
  height:0.5em;
}
</style>