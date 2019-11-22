<template>
<div class="pad"  @touchstart='show($event);start($event)' ref='slide' @touchmove='move($event)' @touchend='end($event)'> 
  <msk v-show="isShow" ref='msk' ></msk>
  <index  class="index" ref="index" :style='{left:slideStyle.left,transition:slideStyle.transition}'></index> 
  <div id="main" >
    <img class="img-size" src="@/assets/tz/folder.png" alt="" @touchstart.stop="isShow=true;slideStyle.left='0px'">
    <div class="dis-flex wid" @click="tab($event)">
      <p :class="pagetype==index?'color':''" 
      v-for="(item,index) in p" :key="index" :data-num="index">{{item}}</p>
    </div>
    <router-link to="/searchbar">
      <img class="img-size" src="@/assets/tz/search.png" alt="">
    </router-link>
  </div> 
  <page v-if="pagetype==0" ></page>
  <discovery v-else-if="pagetype==1"></discovery>
  <personal v-else="pagetype==2"></personal>
  <playbar class="fix"></playbar>
  <collect></collect>
  <controllist></controllist>
  <createlist></createlist>
  <sendmsg></sendmsg>
  <timeclose></timeclose>
</div>
</template>
<script>
import collect from '@/components/tz/Collect.vue'
export default{  
  components:{collect},
  data(){
    return {
      p:["我的","发现","VIP"],
      pagetype:0,
      isShow:false,
      //touch
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
    isShow(news,olds){news?document.body.style.overflow='hidden':document.body.style.overflow='visible';}
  },
  methods:{
    tab:function(e){     
      if(e.target.nodeName=="P"){
        this.pagetype=e.target.dataset.num
      }
    },
    show(e){
      if(e.target.nodeName=='SPAN'){
        this.isShow=false;
        this.slideStyle.left="-300px";
      }
    },
    start(e){
      if(e.touches[0].clientX<20){
        this.flag=true;
        this.startX=e.touches[0].clientX;//移动起点
        this.endX=this.$refs.slide.offsetLeft;//元素左外边框与父级元素的左内边框的距离 
        this.slideStyle.transition='none';//去除过渡效果
      }
    },
    move(e){
      if(this.flag){        
        this.isShow=true;
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
          this.isShow=false
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
    padding-bottom:4rem;
    overflow-y:hidden;
    height:100%
  }
  .msk{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
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
  .fix{
    position:fixed;
    left:0;
    bottom:0;
  }
</style>