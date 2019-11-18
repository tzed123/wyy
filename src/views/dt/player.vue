<template>
  <div class="player" >
    <div class="normal-player">
      <div class="background">
        <div class="filter"></div>
        <img src="@/assets/dt/109951164427560286.jpg" height="100%">
      </div>
      <!-- 顶部 -->
      <div class="top">
        <div class="back">
          <i class="iconfont icon-sdf">
            <router-link to="/coin"></router-link>
            <img src="@/assets/dt/icon-sdf.png" alt="">
          </i>
        </div>
        <h1 class="title">大田後生仔
          （欢乐加速版）</h1>
        <h2 class="subtitle">丫蛋蛋></h2>
      </div>
      <!-- 中部 -->
      <div class="middle">
        <!-- 前 -->
        <div class="middle-l">
          <!-- 光碟 -->
          <div class="cd-wrapper">
            <div class="cd">
              <img src="@/assets/dt/109951164427560286.jpg" class="image">
            </div>
          </div>
          <!-- 按键栏 -->
          <div class="operators">
            <div class="icon i-left">
              <i class="icon-collect">
                <img src="@/assets/dt/icon-collect.png" alt="">
              </i>
            </div>
            <div class="icon i-left">
              <i class="icon-download">
                <img src="@/assets/dt/icon-download.png" alt="">
              </i>
            </div>
            <div class="icon i-center" >
              <i class="icon-yinxiao">
                <img src="@/assets/dt/icon-Player.png" alt="">
              </i>
            </div>
            <div class="icon i-right">
              <i class="icon-pinglun">
                <img src="@/assets/dt/icon-pinglun.png" alt="">
              </i>
            </div>
            <div class="icon i-right" >
              <i class="icon-sangedian">
                <img src="@/assets/dt/icon-sangedian.png" alt="">
              </i>
            </div>
          </div> 
        </div>
        <!-- 后 -->
        <div class="middle-r"> 
          <!-- 声音 -->
          <div class="progress01-wrapper">
            <span class="sound sound-shengyin">
                <img src="@/assets/dt/icon-shengyin.png" alt="">
            </span>
            <div class="progress01-bar-wrapper">
                <div class="progress01-bar-inner">
                  <div class="progress01"></div>
                </div>
              </div>
            <span class="sound"></span>
          </div>
          <div class="lyric-wrapper">
            <p class="text">作曲 : 林啟得</p>
            <p class="text">作词 : 林啟得</p>
            <p class="text">原唱：林啟得</p>
            <p class="text">本作品经过原词曲作者以及版权公司授权</p>
            <p class="text">做人一辈子 快乐没几天</p>
            <p class="text">一条大路分两边 随你要走哪一边</p>
            <p class="text">不怕不怕就不怕 我是年轻人</p>
            <p class="text">不风大雨大太阳大 我就是敢打拼</p>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom">
        <!-- 上 播放条 -->
        <div class="progress-wrapper">
          <span class="time time-l">00:00</span>
          <div class="progress-bar-wrapper">
            <div class="bar-inner">
              <div class="progress"></div>
            </div>
          </div>
          <span class="time time-r">03:01</span>
        </div>
        <!-- 下 按键栏 -->
        <div class="operators1">
          <div class="icon i-left">
            <i class="iconMode" >
              <img src="@/assets/dt/icon-liebiaobofang.png" alt="">
            </i>
          </div>
          <div class="icon i-left">
            <i @click="prev" class="icon-prev">
              <img src="@/assets/dt/icon-prev.png" alt="">
            </i>
          </div>
          <div class="icon i-center">
            <i class="playIcon">
              <img src="@/assets/dt/icon-Player.png" alt="">
            </i>
          </div>
          <div class="icon i-right">
            <i @click="next" class="icon-next">
              <img src="@/assets/dt/icon-next.png" alt="">
            </i>
          </div>
          <div class="icon i-right">
            <i class="icon-menu">
              <img src="@/assets/dt/icon-menu.png" alt="">
            </i>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
export default {

  data() {
    return {

    }
  },
  methods: {



    prev() {//上一曲
      this.$router.go(-1)
    },

    next() {//下一曲
      this.$router.go(1)
    },

  },
  beforeCreate() {
    console.log("创建组件前...")
  },
  created() {
    console.log("创建组件后...")
  },
  beforeMount() {
    console.log("挂载组件前...")
  },
  mounted() {
    console.log("挂载组件后...")
  },
  


}
</script>

<style scoped>
.player .normal-player {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
  background: #F2F3F4; 
}
.player .normal-player .background {
  position: absolute;
  left: -50%;
  top: -50%;
  width: 300%;
  height: 300%;
  z-index: -1;
  opacity: 0.6;
  filter: blur(1.875rem); 
}
.player .normal-player .background .filter {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6; 
}
.player .normal-player .top {
  position: relative;
  margin-bottom: 1.5625rem; 
}
.player .normal-player .top .back {
  position: absolute;
  top: 0;
  left: .375rem;
  z-index: 50; 
}
.player .normal-player .top .back .icon-sdf {
  display: block;
  padding: .3125rem .5625rem;
  font-size: 1.625rem;
  color: #f1f1f1; 
}
.player .normal-player .top .title {
  width: 70%;
  margin: 0 auto;
  padding-top: 0.625rem;
  line-height: 1.25rem;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.125rem;
  font-weight: bold;
  color: #f1f1f1; 
}
.player .normal-player .top .subtitle {
  width: 70%;
  margin: 0 auto;
  line-height: 1.25rem;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: .75rem;
  color: #f1f1f1; 
}
.player .normal-player .middle {
  position: fixed;
  width: 100%;
  top: 5rem;
  bottom: 11.875rem;
}
.player .normal-player .middle .middle-l {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 80%;
}
.player .normal-player .middle .middle-l .cd-wrapper {
  position: absolute;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 0.625rem rgba(255, 255, 255, 0.1) inset;
  border-radius: 50%;
}
.player .normal-player .middle .middle-l .cd-wrapper .cd {
  position: absolute;
  left: -2%;
  top: -2%;
  width: 104%;
  height: 104%;
}
.player .normal-player .middle .middle-l .cd-wrapper .cd .image {
  position: absolute;
  left: 18%;
  top: 18%;
  width: 64%;
  height: 64%;
  border-radius: 50%;
}
.player .normal-player .middle .middle-l .cd-wrapper .cd:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(../../assets/dt/disc.png) no-repeat;
  background-size: contain;
}
.player .normal-player .middle .middle-l .cd-wrapper:before {
  content: "";
  position: absolute;
  left: 47%;
  right: 0;
  top: -15%;
  bottom: 0;
  width: 25%;
  background: url(../../assets/dt/needle.png) no-repeat;
  background-size: contain;
  z-index: 50;
}
.player .normal-player .middle .middle-l .operators {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 17%;
  width: 100%;
}
.player .normal-player .middle .middle-l .operators .icon {
  flex: 1;
  color: #f1f1f1;
}
.player .normal-player .middle .middle-l .operators .icon.disable {
  color: #d44439;
}
.player .normal-player .middle .middle-l .operators .icon.i-left {
  text-align: right;
}
.player .normal-player .middle .middle-l .operators .icon.i-center {
  padding: 0 1.25rem;
  text-align: center;
}
.player .normal-player .middle .middle-l .operators .icon.i-right {
  text-align: left;
}
.player .normal-player .middle .middle-l .operators .icon .icon-like {
  color: #f0746b;
}
.player .normal-player .middle .middle-r {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: none;
}
.player .normal-player .middle .middle-r .progress01-wrapper {
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0.625rem 0;
}
.player .normal-player .middle .middle-r .progress01-wrapper .sound {
  font-size: 0.6875rem;
  flex: 0 0 1.875rem;
  width: 1.875rem;
}
.player .normal-player .middle .middle-r .progress01-wrapper .sound.sound-shengyin {
  text-align: right;
  margin-right: .625rem;
}
.player .normal-player .middle .middle-r .progress01-wrapper .progress01-bar-wrapper {
  flex: 1;
}
.player .normal-player .middle .middle-r .progress01-wrapper .progress01-bar-wrapper .progress01-bar-inner {
  position: relative;
  top: 0;
  height: .1875rem;
  background: rgba(219, 219, 219, 0.3);
}
.player .normal-player .middle .middle-r .progress01-wrapper .progress01-bar-wrapper .progress01-bar-inner .progress01 {
  position: relative;
  top: -0.0625rem;
  left: 0;
  box-sizing: border-box;
  width: .375rem;
  height: .375rem;
  border-radius: 50%;
  background: #f1f1f1;
  }
.player .normal-player .middle .middle-r .lyric-wrapper {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
}
.player .normal-player .middle .middle-r .lyric-wrapper .text {
  color: #c7c7c7;
  font-size: 0.875rem;
}
.player .normal-player .middle .middle-r .lyric-wrapper .text.current {
  color: #FFF;
}
.player .normal-player .middle .middle-r .lyric-wrapper .no-lyric {
  line-height: 40px;
  margin-top: 60%;
  color: #c7c7c7;
  font-size: 0.875rem;
}
.player .normal-player .bottom {
  position: absolute;
  bottom: 3%;
  width: 100%;
}
.player .normal-player .bottom .progress-wrapper {
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0.625rem 0;
}
.player .normal-player .bottom .progress-wrapper .time {
  color: #f1f1f1;
  font-size: 0.6875rem;
  flex: 0 0 1.875rem;
  line-height: 1.875rem;
  width: 1.875rem;
}
.player .normal-player .bottom .progress-wrapper .time.time-l {
  text-align: left;
  color: #dbdbdb;
  margin-right: .625rem;
}
.player .normal-player .bottom .progress-wrapper .time.time-r {
  text-align: right;
  color: #dbdbdb;
  margin-left: .625rem;
}
.player .normal-player .bottom .progress-wrapper .progress-bar-wrapper {
  flex: 1;
}
.player .normal-player .bottom .progress-wrapper .progress-bar-wrapper .bar-inner {
  position: relative;
  top: 0;
  height: .1875rem;
  background: rgba(219, 219, 219, 0.3);
}
.player .normal-player .bottom .progress-wrapper .progress-bar-wrapper .bar-inner .progress {
  position: relative;
  top: -0.0625rem;
  left: 0;
  box-sizing: border-box;
  width: .375rem;
  height: .375rem;
  border-radius: 50%;
  background: #f1f1f1;
}
.player .normal-player .bottom .operators1 {
  display: flex;
  align-items: center;
}
.player .normal-player .bottom .operators1 .icon {
  flex: 1;
  color: #f1f1f1;
}
.player .normal-player .bottom .operators1 .icon.disable {
  color: #d44439;
}
.player .normal-player .bottom .operators1 .icon.i-left {
  text-align: right;
}
.player .normal-player .bottom .operators1 .icon.i-center {
  padding: 0 1.25rem;
  text-align: center;
}
.player .normal-player .bottom .operators1 .icon.i-right {
  text-align: left;
}
.player .normal-player .bottom .operators1 .icon .icon-like {
  color: #f0746b;
}

</style>