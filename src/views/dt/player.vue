<template>
  <div class="player" >
    <div class="normal-player">
      <div class="background">
        <div class="filter"></div>
        <img src="@/assets/dt/109951164427560286.jpg" width="100%" height="100%">
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
        <div :style="mid1" class="middle-l">
          <!-- 光碟 -->
          <div @click="middle" class="cd-wrapper">
            <div class="cd" :class="cdClass">
              <img src="@/assets/dt/109951164427560286.jpg" class="image">
            </div>
          </div>
          <!-- 按键栏 -->
          <div class="operators">
            <div class="icon i-left">
              <i @click="collect" class="iconfont " :class="{'icon-love':a==1,'icon-like':a==2}">
              </i>
            </div>
            <div class="icon i-left">
              <i class="iconfont icon-xiazai">
              </i>
            </div>
            <div class="icon i-center" >
              <i class="iconfont icon-jingyunyinxiaopt-wangyiicon">
              </i>
            </div>
            <div class="icon i-right">
              <i class="iconfont icon-weibiaoti-">
              </i>
            </div>
            <div class="icon i-right" >
              <i class="iconfont icon-sangedian">
              </i>
            </div>
          </div> 
        </div>
        <!-- 后 -->
        <div @click="middle" :style="mid2" class="middle-r"> 
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
          <span class="time time-l">{{format(currentTime)}}</span>
          <div class="progress-bar-wrapper">
            <progress-bar :percent="percent" @percentChange=" percentChange"/>
          </div>
          <span class="time time-r">{{duration}}</span>
        </div>
        <!-- 下 按键栏 -->
        <div class="operators1">
          <div class="icon i-left">
            <i @click="changeMode" :class="iconMode">
            </i>
          </div>
          <div class="icon i-left">
            <i class="iconfont icon-shangyiqu">
            </i>
          </div>
          <div class="icon i-center">
            <i @click="tegglepaly" :class="playIcon">
            </i>
          </div>
          <div class="icon i-right">
            <i class="iconfont icon-xiayiqu">
            </i>
          </div>
          <div class="icon i-right">
            <i class="iconfont icon-caidan-dakai">
            </i>
          </div>
        </div>
      </div>
    </div>
    <audio @timeupdate="updateTime" ref="audio" :src="musicUrl"></audio>
  </div>
</template>
<script>
//导入子组件
import progressBar from './progress-bar.vue';
export default {
  data() {
    return {
      currentTime: 0,
      duration: 0,
      currentLyric: null,// 封装后的歌词对象
      currentLineNum: 0,// 当前下显示歌词行数
      mid1: {
        display:"block"
      },
      mid2: {
        display:"none"
      },
      a:1,
    }
  },
  components: {//用来注册子组件的节点
    progressBar
  },
  computed: {
    playIcon() {
      return this.playing ? 'iconfont icon-bofang' : 'iconfont icon-zanting'
    },
    iconMode() {
      return this.$store.state.mode === 0 ? 'iconfont icon-liebiaoxunhuan' : this.$store.state.mode === 1 ? 'iconfont icon-danquxunhuan' : 'iconfont icon-suijixunhuan';
    },
    cdClass() {
      return this.playing ? 'play' : 'play pause'
    },
    playing() {
      return this.$store.state.playing;
    },
    musicUrl() {
      return 'https://music.163.com/song/media/outer/url?id=1396973729.mp3'
    },
    percent() {
      return this.currentTime/this.duration;
    },
  },
  methods: { 

    /* 改变播放顺序 */
    changeMode() {
      const mode = (this.$store.state.mode + 1) % 3;// 取余
      this.$store.commit('SET_PALY_MODE',mode);

    },
    /* 播放·暂停 */
    tegglepaly() {
      this.$store.commit('SET_PLAYING_STATE',!this.playing);
      if (this.currentLyric) {
        this.currentLyric.togglePlay()
      }
    },

    updateTime(e) {
      this.currentTime = e.target.currentTime;  //获取audio当前播放时间
    },
    /* 歌曲进度条触摸后改变歌曲播放进度 */
    percentChange(precent) {
      const currentTime = this.currentSong.duration * precent;
      this.$refs.audio.currentTime = currentTime;
      // 歌词跟随进度条滚动
      if (this.currentLyric) {
        this.currentLyric.seek(currentTime * 1000);
      }
    },
    /* 封装歌曲当前播放audio时间 */
    format(interval) {
      interval = interval | 0; //取整
      const minute = interval/60 | 0;
      const second = this._pad(interval % 60);
      return `${minute}:${second}`;
    },
    _pad(num, n=2) {  //补零
      let len = num.toString().length;
      while(len < n) {
        num = '0' + num;
        len++;
      };
      return num;
    },
    collect() {//收藏
      if(this.a==1){
        this.a=2;
        this.$toast({
          message:"已添加到我喜欢的音乐",
          position:"middle",
          duration:1000,
          iconClass:"iconfont icon-like",
        });
      }else{
        this.a=1;
        this.$toast({
          message:"已取消喜欢",
          position:"midddle",
          duration:1000,
        });
      }
    },
    
    middle(){
      if(this.mid1.display=="block"){
        this.mid1.display="none";
        this.mid2.display="block"
      }else{
        this.mid1.display="block";
        this.mid2.display="none"
      }
    },

  },
  watch: {

    // 检测播放状态
    playing(newPlaying) {
      this.$nextTick(() => {
        const audio = this.$refs.audio;
        newPlaying ? audio.play() : audio.pause();
      })
    }
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

<style scoped lang="scss">
@keyframes rotate{
  from{transform: rotate(0deg)}
  to{transform: rotate(359deg)}
}
.mid1{
  display:none;
}
.mid2{
  display:block;
}
.player {
  .normal-player {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: #F2F3F4;

    .background {
      position: absolute;
      left: -50%;
      top: -50%;
      width: 300%;
      height: 300%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(1.875rem);//模糊

      .filter {
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.6;
      }
    }
    //顶部
    .top {
      position: relative;
      margin-bottom: 1.5625rem;

      .back {
        position: absolute;
        top: 0;
        left: .375rem;
        z-index: 50;

        .icon-sdf {
          display: block;
          padding: .3125rem .5625rem;
          font-size: 1.625rem;
          color: rgb(241, 241, 241);;
        }
      }

      .title {
        width: 70%;
        margin: 0 auto;
        padding-top: 0.625rem;
        line-height: 1.25rem;
        text-align: center;
        text-overflow: ellipsis;//文本超出隐藏
        overflow: hidden;
        white-space: nowrap;//不换行
        font-size: 1.125rem;
        font-weight: bold;
        color: rgb(241, 241, 241);
      }

      .subtitle {
        width: 70%;
        margin: 0 auto;
        line-height: 1.25rem;
        text-align: center;
        text-overflow: ellipsis;//文本超出隐藏
        overflow: hidden;
        white-space: nowrap;//不换行
        font-size: .75rem;
        color: rgb(241, 241, 241);
      }
    }
    //中部
    .middle {
      position: fixed;
      width: 100%;
      top: 5rem;
      bottom: 11.875rem;
      //前
      .middle-l {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 80%;
        //光碟
        .cd-wrapper {
          position: absolute;
          left: 10%;
          top: 10%;
          width: 80%;
          height: 100%;
          box-sizing: border-box;
          border: .0625rem solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 0 0.625rem rgba(255, 255, 255, 0.1) inset;
          border-radius: 50%;
          


          .cd {
            position: absolute;
            left: -2%;
            top: -2%;
            width: 104%;
            height: 104%;  

            &.play {
              animation: rotate 12s linear infinite;
            }

            &.pause {
              animation-play-state: paused;
            }

            .image {
              position: absolute;
              left: 18%;
              top: 18%;
              width: 64%;
              height: 64%;
              border-radius: 50%;
            }
          }

          .cd:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: url(../../assets/dt/disc.png) no-repeat;
            background-size: contain;
          }
        }
        
        .cd-wrapper:before{ 
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
        //按键栏
        .operators {
          display: flex;      
          align-items: center;
          position: fixed;
          bottom: 17%;
          width: 100%;
  
          .icon {
            flex: 1;
            color: rgb(241, 241, 241);
  
            &.disable {
              color: rgb(212, 68, 57);
            }

            i {
              font-size: 32px;
            }

            &.i-left {
              text-align: right;
            }
  
            &.i-center {
              padding: 0 1.25rem;
              text-align: center;
            }
  
            &.i-right {
              text-align: left;
            }
  
            .icon-like {
              color: rgb(240, 116, 107);
            }
          }
        }
      }
      //后
      .middle-r {
        width: 100%;
        height: 100%;
        overflow: hidden;
        
        
        .progress01-wrapper {
          display: flex;
          align-items: center;
          width: 90%;
          margin: 0 auto;
          padding: 0.625rem 0;
  
          .sound {
            font-size: 0.6875rem;
            flex: 0 0 1.875rem;
            width: 1.875rem;
  
            &.sound-shengyin {
              text-align: right;
              margin-right: .625rem;
            }
          }
  
          .progress01-bar-wrapper {
            flex: 1;
  
            .progress01-bar-inner{
              position: relative;
              top: 0;
              height: .1875rem;
              background: rgba(219,219,219,.3);
  
              .progress01{
                position: relative;
                top: -0.0625rem;
                left: 0;
                box-sizing: border-box;
                width: .375rem;
                height: .375rem;
                border-radius: 50%;
                background: #f1f1f1;
              }
            }
          }
        }

        .lyric-wrapper {
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          text-align: center;

          .text {
            color: #c7c7c7;
            font-size: 0.875rem;

            &.current {
              color: #FFF;
            }
          }

          .no-lyric {
            line-height: 40px;
            margin-top: 60%;
            color: #c7c7c7;
            font-size: 0.875rem;
          }
        }
      }
    }
    //底部
    .bottom {
      position: absolute;
      bottom: 3%;
      width: 100%;
      //上 播放条
      .progress-wrapper {
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding: 0.625rem 0;

        .time {
          color: rgb(241, 241, 241);
          font-size: 0.6875rem;
          flex: 0 0 1.875rem;
          line-height: 1.875rem;
          width: 1.875rem;

          &.time-l {
            text-align: left;
            color: rgb(219, 219, 219);
            margin-right: .625rem;
          }

          &.time-r {
            text-align: right;
            color: rgb(219, 219, 219);
            margin-left: .625rem;
          }
        }

        .progress-bar-wrapper {
          flex: 1;

          // .bar-inner{
          //   position: relative;
          //   top: 0;
          //   height: .1875rem;
          //   background: rgba(219,219,219,.3);

          //   .progress{
          //     position: relative;
          //     top: -0.0625rem;
          //     left: 0;
          //     box-sizing: border-box;
          //     width: .375rem;
          //     height: .375rem;
          //     border-radius: 50%;
          //     background: #f1f1f1;
          //   }
          // }
        }
      }
      //下 按键栏
      .operators1 {
        display: flex;
        align-items: center;

        .icon {
          flex: 1;
          color: rgb(241, 241, 241);

          &.disable {
            color: rgb(212, 68, 57);
          }

          i {
            font-size: 32px;
          }
          
          &.i-left {
            text-align: right;  
          }

          &.i-center {
            padding: 0 1.25rem;
            text-align: center;

            i{
              font-size:40px;
            }
          }

          &.i-right {
            text-align: left;
          }

          .icon-like {
            color: rgb(240, 116, 107);
          }
        }
      }
    }
  }
}
</style>