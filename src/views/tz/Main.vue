<template><!-- $store.getters.getShow this.$store.state.isShow -->
<div class="pad"  @touchstart='show($event);start($event)' ref='slide' @touchmove='move($event)' @touchend='end($event)'> 
  <msk v-show="isMsk" ref='msk' ></msk>
  <index  class="index" ref="index" 
  @c='c'
  :style='{left:slideStyle.left,transition:slideStyle.transition}'></index> 
  <div id="main">
    <img class="img-size" src="@/assets/tz/folder.png" alt="" @touchstart.stop="imgslide">
    <div class="dis-flex wid" @touchstart="tab($event)">
      <p :class="pagetype==index?'color':''" 
      v-for="(item,index) in p" :key="index" :data-num="index">{{item}}</p>
    </div>
    <router-link to="/searchbar">
      <img class="img-size" src="@/assets/tz/search.png" alt="">
    </router-link>
  </div>
  <mine
  v-if="pagetype==0" 
  @createlist='createlist'
  @ellipsis='ellipsis'
  ></mine>
  <discovery v-else-if="pagetype==1"></discovery>
  <personal v-else="pagetype==2"></personal>
  <playbar></playbar>
  <!--<collect></collect>-->
  <ellipsis v-show="ellip" @ellipsis='ellipsis' @cancel='cancel' ></ellipsis>
  <createlist v-show='crtlist' @cancel='cancel'></createlist>
  <timeclose v-show="close" @killself='killself'></timeclose>
</div>
</template>
<script>
import collect from '@/components/tz/Collect.vue'
import timeclose from '@/components/tz/TimeClose.vue'
import createlist from '@/components/tz/CreateList.vue'
import ellipsis from '@/components/tz/Ellipsis.vue'
export default{  
  components:{collect,timeclose,createlist,ellipsis},
  data(){
    return {
      p:["我的","发现","VIP"],
      pagetype:0,
      isShow:false, //显示个人中心
      isMsk:false, //显示蒙板
      close:false, //显示定时关闭
      crtlist:false, //显示创建歌单
      ellip:false,//显示省略号扩展
      //滑动
      remsize:0,
      flag:false,
      startX:0,
      endX:0,      
      slideStyle:{
        left:'-300px',
        transition:'none'
      }
    }
  },
  watch:{
    isMsk(news,olds){news?document.body.style.overflow='hidden':document.body.style.overflow='visible'}
  },
  methods:{
    c(){
      this.isShow=false;
      this.isMsk=false;
      this.slideStyle.left="-300px";
      var that=this
      setTimeout(function(){
        that.close=true;
        that.isMsk=true;
      },300)
    },
    killself(){//定时器自身关闭
      var that=this;
      setTimeout(function(){
        that.close=false;
        that.isMsk=false;
      },200)
    },
    createlist(){//创建列表
      var that=this;
      setTimeout(function(){
        that.crtlist=true;
        that.isMsk=true;
      },200)
    },
    cancel(){//取消创建列表/省略号
      var that=this;
      setTimeout(function(){
        that.crtlist=false;
        that.isMsk=false;
        that.ellip=false;
      },200)
    },
    ellipsis(){//省略号
      var that=this;
      setTimeout(function(){
        that.ellip=true;
        that.isMsk=true;
      },200)
    },
    tab(e){
      if(e.target.nodeName=="P"){
        this.pagetype=e.target.dataset.num
      }
    },
    show(e){
      if(e.target.nodeName=='SPAN'){//点击蒙板取消组件显示
        this.isShow=false;
        this.isMsk=false;
        this.close=false;
        this.crtlist=false;
        this.ellip=false;
        this.slideStyle.left="-300px";
        e.preventDefault();
      }
    },
    imgslide(){
       this.isShow=true;
       this.isMsk=true;
       this.slideStyle.left='0px';
       this.slideStyle.transition='left 0.5s';
    },
    start(e){
      if(e.touches[0].clientX<20){
        this.remsize=getComputedStyle(window.document.documentElement)['font-size']
        this.flag=true;
        this.startX=e.touches[0].clientX;//移动起点
        this.endX=this.$refs.slide.offsetLeft;//元素左外边框与父级元素的左内边框的距离 
        this.slideStyle.transition='none';//去除过渡效果
      }
    },
    move(e){
      if(this.flag){        
        this.isShow=true;
        this.isMsk=true;
        var moveX=this.endX+e.touches[0].clientX-this.startX;//移动距离
        if(moveX<300){
        if(moveX>0){
          this.slideStyle.left=moveX-300+'px';
        }else{
          this.slideStyle.left='-300px';
        }}
      }
    },
    end(e){
      if(this.flag){
        this.flag=false;
        var moveX=e.changedTouches[0].clientX-this.startX;
        this.slideStyle.transition='left 0.5s';
        if(moveX<150){
          this.slideStyle.left='-300px';
          this.isShow=false;
          this.isMsk=false;
        }else{
          this.slideStyle.left='0';
        }
      }
    }   
  },
  created(){
    
  }
}
</script>
<style scoped>
  .test{
    width:2rem;
    height:2rem;
    position:absolute;
    background:red;
  }
  .pad{
    padding-bottom:4.7rem;
    overflow-y:hidden;
    height:100%
  }
  .msk{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0,0,0,.3);
    z-index: 100;
  }
  #main{
    width:95%;
    margin:1rem auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .index{
    position:fixed;
    top:0;
    z-index:200;
  }
  .img-size{
    width:1.5rem;
    height:1.5rem;
  }
  .wid{
    font-size:1.2rem;
    font-weight:bold;
    width:15rem;
  }
  .color{
    color:#e10000;
  }
</style>