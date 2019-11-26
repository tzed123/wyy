<template>
<div id="con">
  <!--圈-->
  <ul id="circle">
    <li v-for='(item,index) of circle' class='circle-li'>
      <img class="circle-img" :src="require(`@/assets/tz/${item}.png`)"/>
      <p>{{index}}</p>
    </li>
  </ul>
  <!--列表-->
  <ul>
    <li v-for='(val,i) of listone' class='list-li d-flex' >
      <img class="list-img" :src='require(`@/assets/dj/${val}.png`)'>
      <p class="list-p">{{i}}</p>
    </li>
  </ul>
  <!--创建歌单-->
  <div class="slist dis-flex" @touchstart='shifter'>
    <div class='d-flex' >
      <img class='slist-img' src="@/assets/dj/19.png" :class="todown?'trans':''"/>
      <p class="slist-p">创建的歌单</p>
    </div>
    <img class='plus' src="@/assets/dj/12.png" @touchstart.stop="createlist">
  </div>
  <!--歌单列表-->
    <!--我喜欢-->
  <router-link to='/songsheetz'>
  <div class="d-flex clist" v-show="todown">
    <img class="clist-img" src="@/assets/tz/like.png">
    <div class="desc">
      <p>我的喜欢</p>
      <p ><span>15</span>首</p>
    </div>
  </div>
  </router-link>
    <!--循环部分-->
  <ul v-show="todown">
    <li class="dis-flex clist">
    <router-link to='songsheetz'>
      <div class="dis-flex">
        <img class="clist-img" src="@/assets/tz/tx.jpg">
        <div class="desc">
          <p>歌单1</p>
          <p>15首</p>
        </div>
      </div>
    </router-link>
    <img class='ellipsis' src='@/assets/tz/ellipsis.png' @touchstart='ellipsis'>
    </li>
  </ul>
  <!--收藏歌单-->
  <div class="slist d-flex" @touchstart='shift'>    
    <img class='slist-img' src="@/assets/dj/19.png" :class="todo?'trans':''" />
    <p class="slist-p">收藏的歌单</p>
  </div>
  <ul v-show='todo'>
    <li class="dis-flex clist">
      <router-link to='/songsheetz'>
      <div class="dis-flex">
        <img class="clist-img" src="@/assets/tz/tx.jpg">
        <div class="desc">
          <p>歌单1</p>
          <p >15首</p>
        </div>
      </div>
      </router-link>
      <img class='ellipsis' src='@/assets/tz/ellipsis.png' @touchstart='ellipsis'>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data(){
    return{
      circle:{'未开放1':'circle','未开放2':'circle','未开放3':'circle','未开放4':'circle'},//圆圈
      listone:{'本地音乐':'6','最近播放':'7','下载管理':'8','我的收藏':'9'},//本地列表
      todown:false,
      todo:false,
    }
  },
  methods:{
    shifter(){
      if(this.todown==false){
        this.todown=true
      }else{
        this.todown=false
      }
    },
    shift(){
      if(this.todo==false){
        this.todo=true
      }else{
        this.todo=false
      }
    },
    createlist(){
      this.$emit('createlist')
    },
    ellipsis(){
      this.$emit('ellipsis')
    }
  }
}
</script>
<style scoped>
  /*圈圈*/
   #circle{
    padding:0.5rem 0 1rem 0;
    display:flex;
    justify-content:space-around;
    border-bottom:0.05rem solid #eee;
  }
  .circle-li{
    text-align:center;
  }
  .circle-img{
    width:2.8rem;
  }
  /* 本地列表等 */
  .list-li{
    padding:0.7rem 1rem;
    border-bottom:0.05rem solid #eee;
    align-items:center;
  }
  .list-li:active{
    background:#eee;
  }
  .list-img{
    width:2rem;
  }
  .list-p{
    margin-left:2rem;
  }
  /*创建列表*/ 
  .slist{    
    padding:0.4rem 1rem;
    align-items:center;
  }
  .slist:active{
    background:#eee;
  }
  .slist-img{
    width:1.5rem;
    height:1.5rem;
    transition:all 0.5s;
  }
  .slist-p{
    margin-left:0.7rem;
  }
  .plus{
    width:1.5rem;
  }
  .plus:active{
    background:#eee;
  }
  /*歌单列表*/
  .clist{
    padding:0.25rem 1rem;
    align-items:center;
  }
  .clist:active{
    background:#eee;
  }
  .clist-img{
    width:3rem;
  }
  .desc{  
    margin-left:1rem;
  }
  .ellipsis{
    width:1.5rem;
    height:1.5rem;
  }
  .ellipsis:active{
    background:#eee;
  }
  /* 旋转 */
  .trans{
    transform:rotate(90deg);
  }
</style>