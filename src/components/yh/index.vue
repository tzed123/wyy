<template>
<div class="body">
<!-- 头像部分 -->
<div class="header">
<a href="#"><div class="head_portrait"></div></a>

<!-- 姓名等级签到 -->
<div class="d-flex last">
  <!-- id -->
<a href=""><div>ID</div></a>
<!-- vip -->
<a href=""><img class="size" src="../../assets/yh/vip.png" alt=""></a>
<!-- 等级 -->
<a href=""><div>lv7</div></a>
<!-- 签到 -->
<a href=""><div>每日打卡</div></a>
</div>
<!-- vip -->
<div class="vip">
<a href=""><img src="../../assets/yh/vip.jpg" alt=""></a>
</div>

<!-- 图标 -->
<div class="icon">
<div ><a><img class="t-center" src="../../assets/yh/email.png" alt=""><p>我的消息</p></a></div>
<div><a><img class="t-center" src="../../assets/yh/user.png" alt=""><p>我的好友</p></a></div>
<div><a><img class="t-center" src="../../assets/yh/music.png" alt=""><p>听歌识曲</p></a></div>
<div><a><img class="t-center" src="../../assets/yh/dress.png" alt=""><p>个性装扮</p></a></div>
</div>
<hr>
<!-- 列表 -->
<div class="list">
<div class="t-14 d-flex"><img src="../../assets/yh/order form.png" alt=""><div>我的订单</div></div>
<div class="t-14 d-flex" @touchstart="c" ><img src="../../assets/yh/settime.png" alt=""><div>定时停止播放</div></div>
<a href=""><div class="t-14 d-flex"><img src="../../assets/yh/sweep.png" alt=""><div>扫一扫</div></div></a>
<a href=""><div class="t-14 d-flex"><img src="../../assets/yh/Music alarm clock.png" alt=""><div>音乐闹钟</div></div></a>
<a href=""><div class="t-14 d-flex"><img src="../../assets/yh/coupon.png" alt=""><div>优惠券</div></div></a>
<a href=""><div class="t-14 d-flex"><img src="../../assets/yh/teen-agers.png" alt=""><div>青少年模式</div></div></a>
<hr>
<a href=""><div class="t-14 d-flex"><img src="../../assets/yh/set.png" alt=""><div>设置</div></div></a>
<router-link to='login'><div class="t-14 d-flex"><img src="../../assets/yh/quit.png" alt=""><div>退出</div></div></router-link>
</div>
</div>
</div>
</template>
<script>
export default {
  data(){
    return{
     
    }
  },
  methods:{
    c(){
      this.$emit('c')
    },
  
    // xshow(){
    //   this.$store.commit('xshow')
    // },
  }
}
</script>
<style scoped>
.h{
  position:absolute;
  top:10rem;
  margin:0 auto;
  z-index:250;
}
  .body{
  background:#f3f3f3;
  width:80%;
  position:absolute;
  top:0;
  bottom:0;
}
/* 白布 */
.bg{
  background:#fff;
  width: 70%;
  height:75%;
  position: absolute;
  top:25%;
  left:7%;
  z-index:-100;
}
.header{
  padding:10% 5% 3% 5%;
}
.head_portrait{
  width:5rem;
  height:5rem;
  border-radius: 50%;
  border:2px solid red;
  margin-bottom: 3.25%;
}
/* vip大小 */
.size{
  width:50%;
  top:2%;
}
/* 头像部分 */
.header .d-flex>a{
  margin-left:2%;
}
/* 姓名等级签到 */
.header>.last>:last-child{
margin-left:10%;
}
/* vip */
.vip{
  margin-top:5%;
}
.vip img{
  margin-left:1%;
  width: 98%;
}
/* 图标 */
.icon{
  display: flex;
  justify-content:space-between;
  margin-top:5%;
}
.icon img {
  margin-left:20%;
}
hr{
  margin-top:5%;
  opacity: 0.2;
}
/* 列表 */
.list{
  margin-top:5%;
}
.list img{
  width:8%;
  margin-right: 3%;
}
.list .d-flex>div{
line-height: 180%;
}
.list>a>div{
  margin-top:5%;
}
/* 底部固定栏 */
.footer{
  display: flex;
 position: fixed;
 bottom:5%;
 left:10%;
}
.footer .t-14>div{
  line-height: 180%;
}

</style>