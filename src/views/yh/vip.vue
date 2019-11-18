<template>
  <div>
     <div class="bg d-flex header">
    <a href=""><img src="../../assets/yh/return.png" alt=""></a><div class="t-24">网易云音乐会员</div> 
      </div>

      <!-- vip -->
      <div class="bg d-flex">
        <div class="vip">黑胶VIP</div>
        <div class="musicbag">音乐包</div>
      </div>

      <!-- 特权 -->
      <div class="tq">
      <div @click="up">畅享黑胶VIP专属特权+音乐包特权<img :src="require(`../../assets/yh/${imgs}.png`)" alt=""></div>
     </div>

     <!-- 类型 -->
     <div class="lx" v-show="vip">
       <ul class="lx-ul">
         <li>会员曲库</li>
         <li>无损音质</li>
         <li>免费下载</li>
         <li>免除广告</li>
         <li>音画主题</li>
         <li>头像挂件</li>
         <li>个性皮肤</li>
         <li>商场折扣</li>
         <li>票务特权</li>
         <li>福利购券</li>
         <li>歌词图片</li>
         <li>专属电台</li>
       </ul>
     </div>

     <!-- 包月 -->
     <div class="month">
       <ul>
         <li class="kuan">
           <div>连续包月<div class="month-div-size">到期可自动续费，可随时取消</div></div>
           <div class="price1">¥11</div>
        </li>
        <li>
            <div>12个月<div class="month-div-size op">到期可自动续费，可随时取消</div></div>
            <div class="price1">¥11</div><div class="pj1">¥11.5/月</div>
         </li>
         <li>
            <div>3个月<div class="month-div-size op">到期可自动续费，可随时取消</div></div>
            <div class="price1">¥11</div><div class="pj2">¥13.3/月</div>
         </li>   
         <li>
            <div>1个月<div class="month-div-size op">到期可自动续费，可随时取消</div></div>
            <div class="price1">¥15</div><div class="pj3">¥15/月</div>
         </li>         
       </ul>
     </div>

     <!-- 优惠 -->
     <div class="d-flex yh">
       <div>优惠</div><div class="you">></div>
     </div>

     <!-- 支付部分 -->
     <div class="pay">
       <div class="alpay d-flex"><img src="../../assets/yh/Alipay.png" alt=""><div>支付宝支付</div><div class="yuan"></div></div>
       <div class="d-flex wechat"><img src="../../assets/yh/Wechat.png" alt=""><div>微信支付</div><div class="yuan"></div></div>
      </div>

      <!-- 计算 -->
      <div class="d-flex cal">
        <div>总计:</div><div class="price">$11</div><div class="yes">确认支付</div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vip:true,
      imgs:"down",
    }
  },
  methods: {
    up(){
      this.vip?this.vip=false:this.vip=true;
      this.imgs=="up"?this.imgs="down":this.imgs="up";

    }
  },
}
</script>
<style scoped>
  
bg{
  background: #fff;
}
/* 头部 */
.header{
  padding:5% 5%;
  background: #f3f3f3;
  margin-bottom: 0.75em;
}
.header div{
  margin-left:5%;
}
/* vip */
.vip{
  width: 10rem;
  height:3rem;
  background-image: linear-gradient(to right,#ff393b, #f5ad96);
  border-radius: 50px;
  text-align: center;
  line-height: 2.75;
  color: #fff;
  font-size:16px;
  border:1px solid #f5ad96;
  position: relative;
  left:15%;
}
.musicbag{
  width: 10rem;
  height:3rem;
  background:#fff;
  border-radius: 50px;
  text-align: center;
  line-height: 2.75;
  color: red;
  font-size:16px;
  border:1px solid #f5ad96;
  text-align: right;
  padding-right:3rem;
}
/* 特权 */
.tq{
  margin-left:15%;
}
.tq>div{
  position: relative;
  margin-top:5%;
}
.tq>div>img{
position: absolute;
top:-30%;
}
/* 类型 */
.lx{
  margin-left:12%;
}
.lx-ul{
  width:84%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top:2%;
}
 .lx li{
  font-size:10px;
  margin-top:3%;
  margin-right:4%;
 }
 /* 包月 */
 .month{
   margin-top:5%;
   margin-left:9%;
   margin-right:9%;
   border:1px solid #f3f3f3;
   border-radius: 0.25rem;
 }
 .kuan{
   border:1px solid red;
 }
 .month li{
display: flex;

padding:3% 3%;
 }
 .month-div-size{
   font-size: 8px;
   color:#c2c2c2;
   margin-top:3%;
 }
 .price1{
   color:red;
   position: absolute;
   right:17%;;
   font-size:18px;
   line-height: 230%;
 }
 .price2{
  color:red;
  position: absolute;
  right:17%;
  font-size:18px;
 }
 .pj1{
  position: absolute;
  right:16%;
  top:54.5%;
   margin-top:0;
   color:#c2c2c2;
   font-size: 8px;
 }
 .pj2{
  position: absolute;
  right:16%;
  top:63.5%;
   margin-top:0;
   color:#c2c2c2;
   font-size: 8px;
 }
 .pj3{
  position: absolute;
  right:17%;
  top:72.5%;
   margin-top:0;
   color:#c2c2c2;
   font-size: 8px;
 }
 .op{
   opacity: 0;
 }
 /* 优惠 */
 .yh{
   margin-left: 9%;
   margin-top:3%;
 }
 .you{
   position: absolute;
   right:15%;
 }
 /* 支付部分 */
.pay{
  margin-top:3%;
  margin-left:9%;
}
 .yuan{
   width: 20px;
   height:20px;
   border-radius: 50%;
   border: 1px solid red;
   position: absolute;
   right:12%;
 }
 .wechat{
   margin-top:2%;
 }
 .cal{
  margin-left:9%;
margin-top:3%;
 }
 .yes{
   width:100px;
   height:25px;
   background-image: linear-gradient(to bottom right, #ee4e4e, #ee6157);
   border-radius: 0.5rem;
   text-align: center;
   color:#fff;
   position: absolute;
   right:8%;
 }
 .price{
   color:red;
   margin-left: 3%;
 }
</style>