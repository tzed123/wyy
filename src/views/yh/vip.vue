<template>
  <div>
     <div class="bg d-flex header">
    <router-link to="/"><img src="../../assets/yh/return.png" alt=""></router-link><div class="t-24">网易云音乐会员</div> 
      </div>

      <!-- vip -->
      <div class="bg d-flex">
        <div class="vip" :class="{hong:ishong,bai:isbai}" @touchstart="choosecolor1($event)">黑胶VIP</div>
        <div  class="musicbag hong" :class="{hong:!ishong,bai:!isbai}"  @touchstart="choosecolor2($event)">音乐包</div>
      </div>

      <!-- 特权 -->
      <div class="tq">
      <div @touchstart="up">畅享黑胶VIP专属特权+音乐包特权<img :src="require(`../../assets/yh/${imgs}.png`)" alt=""></div>
     </div>

     <!-- 类型 -->
     <div class="lx" v-show="vip">
       <ul class="lx-ul">
         <li v-show="music">会员曲库</li>
         <li>无损音质</li>
         <li>免费下载</li>
         <li  v-show="music">免除广告</li>
         <li>音画主题</li>
         <li  v-show="music">头像挂件</li>
         <li  v-show="music">个性皮肤</li>
         <li  v-show="music">商场折扣</li>
         <li  v-show="music">票务特权</li>
         <li  v-show="music">福利购券</li>
         <li>歌词图片</li>
         <li  v-show="music">专属电台</li>
       </ul>
     </div>

     <!-- 包月 -->
     <div class="month " v-show="music">
       <ul>
         <li class="gd" :class="{kuan:iskuan1}" @touchstart="ischoose1($event)" :data-price="11">
           <div :data-price="11">连续包月<div :data-price="11" class="month-div-size">到期可自动续费，可随时取消</div></div>
           <div :data-price="11" class="price1" >¥11</div>
        </li>
        <li :class="{kuan:iskuan2}" @touchstart="ischoose2($event)" :data-price="138">
            <div :data-price="138">12个月<div :data-price="138" class="month-div-size op">到期可自动续费，可随时取消</div></div>
            <div :data-price="138" class="price1" >¥138</div><div class="pj1" :data-price="138">¥11.5/月</div>
         </li>
         <li :class="{kuan:iskuan3}" @touchstart="ischoose3($event)" :data-price="39.9">
            <div :data-price="39.9">3个月<div class="month-div-size op" :data-price="39.9">到期可自动续费，可随时取消</div></div>
            <div class="price1" :data-price="39.9">¥39.9</div><div class="pj1" :data-price="39.9">¥13.3/月</div>
         </li>   
         <li :class="{kuan:iskuan4}" @touchstart="ischoose4($event)" :data-price="15">
            <div :data-price="15">1个月<div class="month-div-size op" :data-price="15">到期可自动续费，可随时取消</div></div>
            <div class="price1" :data-price="15">¥15</div><div class="pj1" :data-price="15">¥15/月</div>
         </li>         
       </ul>
     </div>

          <!-- 音乐包 -->
     <div class="month" :class="{dn:isdn}">
       <ul>
         <li class="gd" :class="{kuan:iskuan1}" @touchstart="ischoose1($event)" :data-price="8">
           <div :data-price="8">连续包月<div :data-price="8" class="month-div-size">到期可自动续费，可随时取消</div></div>
           <div :data-price="8" class="price1">¥8</div>
        </li>
        <li :class="{kuan:iskuan2}" @touchstart="ischoose2($event)" :data-price="84">
            <div :data-price="84">12个月<div :data-price="84" class="month-div-size op">到期可自动续费，可随时取消</div></div>
            <div :data-price="84" class="price1" >¥84</div><div :data-price="84" class="pj1">¥7/月</div>
         </li>
         <li :class="{kuan:iskuan3}" @touchstart="ischoose3($event)" :data-price="22.5">
            <div :data-price="22.5">3个月<div :data-price="22.5" class="month-div-size op">到期可自动续费，可随时取消</div></div>
            <div :data-price="22.5" class="price1" >¥22.5</div><div :data-price="22.5" class="pj1">¥7.5/月</div>
         </li>   
         <li :class="{kuan:iskuan4}" @touchstart="ischoose4($event)" :data-price="10">
            <div :data-price="10">1个月<div class="month-div-size op" :data-price="10">到期可自动续费，可随时取消</div></div>
            <div class="price1":data-price="10" >¥10</div><div class="pj1" :data-price="10">¥10/月</div>
         </li>         
       </ul>
     </div>

     <!-- 优惠 -->
     <div class="d-flex yh">
       <div>优惠</div><div class="you">></div>
     </div>

     <!-- 支付部分 -->
     <div class="pay">
       <div class="wechat d-flex" v-for="item,i of payment" :key="i"  @touchstart="pay(i)"><img :src="require(`../../assets/yh/${paymentimg[i]}.png`)" alt=""><div class="wechat-font">{{payment[i]}}</div><div class="yuan" :class="{yuanbg:isyuanbg==i?true:false}"></div></div>
      </div>

      <!-- 计算 -->
      <div class="d-flex cal">
        <div>总计:</div><div class="price">¥{{price}}</div><div class="yes" @click="conforme">确认支付</div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vip:true,
      imgs:"down",
      iskuan1:true,
      iskuan2:false,
      iskuan3:false,
      iskuan4:false,
      isyuanbg:false,
      ishong:true,
      isbai:false,
      music:1,
      isdn:true,
      payment:["支付宝","微信"],
      paymentimg:["Alipay","Wechat"],
      id:[1,2],
      price:11,

    }
  },
  methods: {
    conforme(){
     this.$messagebox.confirm("确认支付?");
    },
    choosecolor1(e){
      this.music=1;
      this.ishong=true;
      this.isbai=false;
      this.isdn=true;
      this.iskuan1=true;
      this.iskuan2=false;
      this.iskuan3=false;
      this.iskuan4=false;
      this.price=11;
    },
       choosecolor2(e){
      this.music=0;
      this.ishong=false;
      this.isbai=true;
      this.isdn=false;
      this.iskuan1=true;
      this.iskuan2=false;
      this.iskuan3=false;
      this.iskuan4=false;
      this.price=8;
    },
    up(){
      this.vip?this.vip=false:this.vip=true;
      this.imgs=="up"?this.imgs="down":this.imgs="up";
    },
    ischoose1(e){
      this.iskuan1=true;
      this.iskuan2=false;
      this.iskuan3=false;
      this.iskuan4=false;
      this.price=e.target.dataset.price;
      console.log(this.price);
    },
      ischoose2(e){
      this.iskuan1=false;
      this.iskuan2=true;
      this.iskuan3=false;
      this.iskuan4=false;
      this.price=e.target.dataset.price;
    },
        ischoose3(e){
      this.iskuan1=false;
      this.iskuan2=false;
      this.iskuan3=true;
      this.iskuan4=false;
      this.price=e.target.dataset.price;
    },
        ischoose4(e){
      this.iskuan1=false;
      this.iskuan2=false;
      this.iskuan3=false;
      this.iskuan4=true;
      this.price=e.target.dataset.price;
    },
    pay(e){
      this.isyuanbg=e;
    }
    
  },
}
</script>
<style scoped>
  
.bg{
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
.hong{
  background-image: linear-gradient(to right,#ff393b, #f5ad96);
  color:#fff;
  z-index:999;
}
.bai{
background:#fff;
color:#f00;
z-index:1;
}
.vip{
  width: 10rem;
  height:3rem;
  border-radius: 50px;
  text-align: center;
  line-height: 2.75;
  font-size:16px;
  border:1px solid #f5ad96;
  position: relative;
  left:15%;
}
.musicbag{
  width: 10rem;
  height:3rem;
  border-radius: 50px;
  text-align: center;
  line-height: 2.75;
  font-size:16px;
  border:1px solid #f5ad96;
  text-align: right;
  padding-right:3rem;
  position: relative;
  margin-left:0.75rem;
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
 .gu{
   height:61px;
 }
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
   margin-left:25%;
   margin-top:10%;
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
 .yuanbg{
   background:red;
 }
 .wechat{
   margin-top:2%;
 }
 .wechat-font{
   line-height:2.25;
   margin-left:0.5rem;
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
 .dn{
   display:none
 }
</style>