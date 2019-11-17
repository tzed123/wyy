<template>
<div>
    <Header></Header>
    <div id="container">
        
        <div class="multiSelect-title">
            <div class="multiSelect-title-left">
                <img src="@/assets/zz/back-black.png" alt="">
                <span>已选择666项</span>
            </div>
            <div  class="multiSelect-title-right">
                <span>全选</span>
            </div>
        </div>
        <div class="yun-vip">
            <p class="vip-song-number">含66VIP专享下载歌曲</p>
            <p class="vip-go">开通VIP</p>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-true.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
        <div class="songSheet-list">
            <img class="check" src="@/assets/zz/check-false.png" alt="">
            <div>
                <p class="song-name">孤单心事</p>
                <p class="singer-album">颜人中-孤单心事</p>
            </div>
        </div>
    </div> 
    <Footer></Footer>
</div>
</template>

<script>
export default {
    name:'MultiSelect'
}
</script>
<style scoped>
#container{
  width:100%;
  height:100%;
}
.multiSelect-title{
    display:flex;
    justify-content: space-between;
    padding:0.5rem;
}
.multiSelect-title-left{
    display:flex;
    align-items:center;
}
.multiSelect-title-left>img{
    width:2rem;
    height:2rem;
}
.multiSelect-title-left>span{
    font-size:1.3rem;
    margin-left:1rem;
}
.multiSelect-title-right{
    display:flex;
    align-items:center;
}
.multiSelect-title-right>span{
    font-size:1rem;
}
.yun-vip{
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:0.5rem;
    background-color:yellow;
}
.vip-song-number{
    font-size:0.8rem;
    color:#333;
}
.vip-go{
    display:block;
    color:red;
    font-size:0.8rem;
    padding:0.3rem 0.8rem;
    border:solid 1px red;
    border-radius:1rem;
}
.songSheet-list{
    display:flex;
    padding:0.6rem;
    align-items:center;
}
.check{
    width:1.5rem;
    height:1.5rem;
    margin-right:1rem;
}
.song-name{
    font-size:0.9rem;
}
.singer-album{
    font-size:0.8rem;
    color:#333;
    margin-top:0.2rem;
}
</style>