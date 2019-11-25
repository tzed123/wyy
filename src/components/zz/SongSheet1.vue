<template>
    <div class="songSheet-content">
        <div class="content-title">
            <div class="content-title-left">
                <img src="@/assets/zz/play01-black.png" alt="" class="play-icon1">
                <p>播放全部<span>(共66首)</span></p>
            </div> 
            <button class="collection">+ 收藏(38413)</button>
        </div>
    </div>
</template>

<script>
import SongSheet1 from '@/components/zz/SongSheet1.vue'
export default {
    components:{SongSheet1}
}
</script>
<style scoped>
.songSheet-content{
  display:flex;
  flex-direction:column;
  border-top-left-radius:1.5rem;
  border-top-right-radius:1.5rem;
  width:100%;
  position:absolute;
  top:15rem;
}
.content-title{
  display:flex;
  justify-content:space-between ;
  margin-top:1rem;
}
.content-title-left{
  display:flex;
}
.content-title-left>p{
  font-size:1.1rem;
  height:2rem;
  line-height:2rem;
}
.content-title-left>p>span{
  font-size:0.8rem;
  line-height:1.5rem;
  text-align: center;
}
.play-icon1{
  width:2rem;
  height:2rem;
}
.content-title-left>img,.content-title-left>p{
  margin-left:0.75rem;
}
.collection{
  display:block;
  width:7rem;
  height:2.5rem;
  border-radius:3rem;
  margin-right:0.75rem;
  font-size:0.8rem;
  background-color:red;
  color:white;
  margin-bottom:0.5rem;
}
</style>