<template>
  <div class="beijing">
     <!-- t跳转界面 -->
   <div class="bg d-flex header"></div>
  <!-- 个人页面 -->
  <div class="d-flex gr">
    <!-- 头像 -->
    <div class="img">
      <input type="file" name="image" accept="image/*" @change='onchangeImgFun' class="header-upload-btn user-header-com">
      <img :src='imgStr' class="user-header-img user-header-com">
    </div>
    <!-- 介绍 -->
    <div class="wz">
      <div>壮壮</div>
      <div>特权</div>
    </div>
  </div>

  <!-- 特权 -->
 <div class="tq d-flex">
   <img src="../../assets/yh/vip-vip.png" alt="">
   <img src="../../assets/yh/vip-sq.png" alt="">
   <img src="../../assets/yh/vip_xiazai.png" alt="">
 </div>
 <router-link to="/vip"><div class="xf">续费</div></router-link> 
 <div><img class="sb" src="../../assets/yh/sb.png" alt=""></div>

<!--轮播-->
<mt-swipe :auto="4000" class="carousel">
  <mt-swipe-item><img class="w-100" src="@/assets/tz/banner1.jpg"></mt-swipe-item>
  <mt-swipe-item><img class="w-100" src="@/assets/tz/banner2.jpg"></mt-swipe-item>
  <mt-swipe-item><img class="w-100" src="@/assets/tz/banner3.jpg"></mt-swipe-item>
</mt-swipe>

<p class="hj">黑胶vip特权</p>
 <div class="daxiao d-flex">
  <div class="daxiao-l"><img class="w-100" src="../../assets/yh/1.jpg"></div>
  <div><img class="w-100" src="../../assets/yh/2.jpg"></div>
 </div>
 
 <p class="zhuti">黑胶vip音画主题</p>
 <div class="tupian d-flex">
 <div class="tuipian-l"><img class="w-100" src="../../assets/yh/3.jpg"></div>
  <div class="tuipian-l"><img class="w-100" src="../../assets/yh/4.jpg"></div>
  <div><img class="w-100" src="../../assets/yh/3.jpg"></div>
 </div>
  </div>
</template>
<script>
export default {
    name: 'HelloWorld',
  data () {
    return {
      imgStr: require('../../assets/yh/default.jpg'),
      errorStr: ''
    }
  },
  methods: {
    onchangeImgFun (e) {
      var file = e.target.files[0]
      console.log(file)
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size
      console.log(imgSize)
      var _this = this // this指向问题，所以在外面先定义
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 50 * 1024) {
        // 合格
        _this.errorStr = ''
        console.log('大小合适')
        // 开始渲染选择的图片
        // 本地路径方法 1
        // this.imgStr = window.URL.createObjectURL(e.target.files[0])
        // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息

        // base64方法 2
        var reader = new FileReader()
        reader.readAsDataURL(file) // 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          var dataURL = reader.result
          console.log(dataURL)
          _this.imgStr = dataURL
          // 下面逻辑处理
        }
      } else {
        console.log('大小不合适')
        _this.errorStr = '图片大小超出范围'
      }
    }
  }

}
</script>
<style scoped>
.beijing{
  background:#eeeded;
  bottom:0;
  top:0;

}
  .sb{
  width:100%;
  margin-top:-10.5rem;
  top:0;
}
.header{
  padding: 2% 3%;
}
.header div{
  margin-left:3%;
}
/* 个人页面 */
.img{
  height:50px;
  width:50px;
  border:1px solid red ;
  border-radius: 50%;
  z-index:0;
  overflow:hidden;
}
.wz{
  margin-left:3%;
  margin-top:3%;
  color:#f4e8ec;
  z-index:0;
}
.gr{
  margin-top:7%;
  margin-left:10%;
  z-index:0;
}
/* 特权 */
.tq{
  margin-top:7%;
  margin-left: 10%;
  z-index:0;
}
.xf{
  width:7rem;
  height:2.5rem;
  border-radius: 50px;
  background-image: linear-gradient(to bottom right,#f0deda, #e3c6c2);
  float: right;
  text-align: center;
  margin-right:5%;
  margin-top:-7%;
  line-height:2.5rem;
 position:relative;
  z-index:1;
  color:red;
}
.tq img{
margin-right: 5%;
z-index:1;
}

  .carousel{
    width:90%;
    height:8rem;
    margin-top:-13%;
    margin-left:5%;
    border-radius:0.5rem;
  }
/*图片*/
  .hj{
    margin-left:5%;
    margin-top:3%;
  }
   .zhuti{
    margin-left:5%;
    margin-top:3%;
  }
  .w-100{
    width:100%;
  }

  .daxiao{
    width:90%;
    margin-top:3%;
    margin-left:5%;
  }
  .daxiao-l{
    margin-right:5%;
  }

  .tupian{
    width:90%;
    margin-top:3%;
    margin-left:5%;
  }
  .tuipian-l{
     margin-right:5%;
  }

  .user-header{
  position: relative;
  display: inline-block;
}
.user-header-com{
  height:50px;
  width:50px;
  display: inline-block;
  z-index:0
}
.header-upload-btn{
  position: absolute;
  left:2.5rem;
  top: 7.5rem;
  opacity:0;

  /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
}
</style>