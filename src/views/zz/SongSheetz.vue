<template>
  <div id="container">
    <msk v-show="isMsk"></msk>
    <SongSheet></SongSheet>
    <SongSheet1></SongSheet1>
    <SongSheet2 @ellipsis="ellipsis"></SongSheet2>
    <ellipsis
    v-show="ellip"
    :title='title'
    :lis='lis'></ellipsis>
  </div>
</template>

<script>
import SongSheet1 from '@/components/zz/SongSheet1.vue'
export default {
  components:{SongSheet1},
   data(){
    return{
      title:'歌名',
      lis:{'下载':'download','评论':'comment','歌手':'singer','购买单曲':'purchase'},
      ellip:false,
      isMsk:false
    }
  },
  methods:{
    ellipsis(){//省略号
      var that=this;
      setTimeout(function(){
        that.ellip=true;
        that.isMsk=true;
      },200)
    },
  }
}
</script>
<style scoped>

</style>