<template>
<div class="pad" @click='isShow=false'>
  <span class="msk" v-show="isShow"></span>
  <index v-show="isShow" class="index" ></index> 
  <div id="main"  >       
    <img class="img-size" src="@/assets/tz/folder.png" alt="" @click.stop="isShow=true">
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
  <!-- <index></index> -->
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
      com:false,
      msk:false
    }
  },
  methods:{
    tab:function(e){     
      if(e.target.nodeName=="P"){
        this.pagetype=e.target.dataset.num
      }
    }
  },

}
</script>
<style scoped>
  .pad{
    padding-bottom:4rem;
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
    left:0;
    z-index:200
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