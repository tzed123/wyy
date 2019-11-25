<template>
    <div class="container">
      <div class="songSheet-list">
          <div class="songSheet-list-left">
              <p>1</p>
              <div>
                  <p class="song-name">淘汰</p>
                  <p class="singer">陈奕迅-认了吧</p>
              </div>
          </div>
          <div class="songSheet-list-right">
              <img src="@/assets/zz/play02-black.png" alt="">
              <img src="@/assets/zz/ellipsis-black.png" alt="">
          </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.container{
  width:100%;
  height:100%;
  margin-top:19rem;
}
.songSheet-list{
  display:flex;
  justify-content: space-between;
  margin-bottom:0.6rem;
}
.songSheet-list-left{
  display:flex;
}
.songSheet-list-left>p{
  margin:1rem;
  text-align: center;
  vertical-align: middle;
  color:#444;
}
.song-name{
  margin-top:0.4rem;
}
.singer{
  font-size:0.8rem;
  color:#444;
  margin-top:0.3rem;
}
.songSheet-list-right>img{
  width:1.6rem;
  height:1.6rem;
  margin-top:0.7rem;
  margin-right:0.5rem;
}
</style>