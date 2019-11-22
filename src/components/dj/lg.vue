<template>
  <div class="container">
    <div class="top-topic">
      <!-- x -->
      <button @click="goback" class="topback">x</button>
      登录星享俱乐部
    </div>
    <!-- input -->
    <div class="top-input-outside">
      <span  :class="unameClass" :style="fontColor">用户名/邮箱</span>
      <input
        type="text"
        id="top-input-inside"
        name="uname"
        v-model="unameValue"
        @focus="clickinput"
        @blur="clickBlur"
      >
      <span :class="upwdClass" :style="fontColor">密码</span>
      <input
        type="text"
        name="upwd"
        id="top-input-inside"
        v-model="upwdValue"
        @focus="clickinput"
        @blur="clickBlur"
      >
    </div>
    <div class="login-forget"><router-link to="forget" class="login-a">忘记密码？</router-link></div>
    <!-- 中间 -->
    <div class="midDiv">
      <mt-button type="default" id="login-button">登录</mt-button>
      <router-link to="Sign" class="login-b">使用手机号注册登录</router-link>
    </div>
    <!-- 下部 -->
    <div class="buttom-outside-div">
      <h6 class="buttom-text">使用以下方式进行账户注册/登录</h6>
      <div class="button-inner-div">
        <router-link to="" class="buttom-img-a">
          <div class="buttom-div-left"></div>
        </router-link>
        <router-link to="" class="buttom-img-a">
          <div class="buttom-div-right"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unameClass: {
        "top-input-span": true,
        "top-input-spanChange": false
      },
      upwdClass: {
        "sp1": true,
        "sp2": false
      },
      fontColor: {
        color: true
      },
      unameValue: "",
      upwdValue: "",
    };
  },
  methods: {
    clickinput(e) {
      var $name = e.target.getAttribute("name");
      if ($name == "uname") {
        this.unameClass["top-input-span"] = false;
        this.unameClass["top-input-spanChange"] = true;
      } else {
        this.upwdClass["sp1"] = false;
        this.upwdClass["sp2"] = true;
      }
    },
    clickBlur(e) {
      var $upwd = e.target.getAttribute("name");
      //用户名正则，4到16位（字母，数字，下划线，减号）
      if ($upwd == "uname") {
        if (this.unameValue == "") {      
          this.unameClass["top-input-span"] = true;
          this.unameClass["top-input-spanChange"] = false;
        }
      } else {
        if (this.upwdValue == "") {
          this.upwdClass["sp1"] = true;
          this.upwdClass["sp2"] = false;
        }
      }
    },
     goback(){
          this.$router.go(-1);//返回上一页
      } 
  }
};
</script>

<style>
body {
  background-color: #f8f8f8;
}
.container {
  margin: 0 auto !important;
}

.top-topic{
  position: relative;
  padding:2.9rem 2.1rem 2.1rem 2.9rem !important;
  padding-bottom:1.9rem !important;
  text-align:start;
  font-size:1.7rem !important;
  font-weight:bold;
  box-shadow:0 0 1rem #dbdbdb
}
.top-input-outside {
  position: relative;
  top:1.2rem;
}
/* 这里是设置input获得焦点时的变化 */
#top-input-inside:focus {
   border-bottom: 2px solid #25a977;
}
#top-input-inside{
  position: relative;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  border-bottom: 1px solid #e1e1e1;
  background-color: #f8f8f8;
  outline: none;
  /* outline-color: #25a977; */
  padding: 1.8rem 0 1.2rem 1.3rem !important;
  margin-bottom: 1rem !important;
}
/* input::-webkit-input-placeholder {
   WebKit browsers 
   color: #c2c2c2; 
} */

.sp1 {
  position: absolute;
  transition: 0.25s;
  color: #c2c2c2;
  font-size: 0.9rem !important;
  position: absolute;
  top: 5rem !important;
  left:4.5% !important;
  z-index:1000 !important;
}
.sp2 {
  position: absolute;
  transition: 0.25s;
  color: #c2c2c2;
  font-size: 0.6rem !important;
  position: absolute;
  top:3.8rem !important;
  left:4.5% !important;
  z-index:1000 !important;
} 
.top-input-span {
  transition: 0.25s;
  color: #c2c2c2;
  font-size: 0.9rem !important;
  position: absolute;
  top: -0.7rem !important;
  left: 47% !important;
  z-index:1000;
}
.top-input-spanChange {
  transition: 0.25s;
  color: #c2c2c2;
  font-size: 0.6rem !important;
  position: absolute;
  top: -0.45rem !important;
  left: 47% !important;
  z-index:1000;
}
/* 中部 */
.midDiv{
  position: relative;
}
/* 登錄按鈕 */
#login-button {
  display: block;
  width: 100%;
  color: #fff;
  background:linear-gradient(120deg,#4ecdc4,#556270,#4ecdc4);
  background-size:200%; 
  border-radius: 3rem;
  margin-top:6rem !important;
  margin-bottom: 2.6rem !important;
  transition:2s;
}
#login-button:hover{
  background-position:right;
}
.login-a,.login-b,.topback{
  text-decoration: none;
  color: #25a977;
  font-size: 0.6rem;
  font-weight: bold;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
/* 关闭标签 */
.topback{
  position: absolute;
  color:#556270;
  font-size:1.3rem;
  top:0.5rem;
  left:1rem;
  border:0;
  background:#f8f8f8;
}
.login-b{
  position: absolute;
  left:35%;
  top:3.6rem;
}
.login-forget{
  position: relative;
  padding-left:1.4rem !important;
  text-align: start;
  top:-2.6rem;
}
.button-inner-div {
  display: flex;
  justify-content: center;
}
/* 底部 */
.buttom-outside-div {
  position: relative;
  text-align: center;
  padding:1rem !important;
  margin-top: 6.5rem !important;
  margin-bottom: 2rem !important;
}
.buttom-div-left,
.buttom-div-right {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #000;
  border-radius: 50%;
}
/* 淘寶 */
.buttom-div-left {
  margin-right: 2rem !important;
  background-image: url(../assets/tt/buttom-left-logo.jpg);
  background-size: 100%;
}
/* 支付寶 */
.buttom-div-right {
  background-image: url(../assets/tt/buttom-right-logo.jpg);
  background-size: 100%;
}
.buttom-img-a {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
.buttom-text {
  color: #787878;
}
</style>
