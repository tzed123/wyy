<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn"
            @touchstart.prevent="progressTouchStart"
            @touchmove.prevent="progressTouchMove"
            @touchend="progressTouchEnd"
      > 
      <!-- .prevent阻止浏览器默认行为 拖动的时候不会拖动到浏览器 -->
          <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
const progressBtnWidth = 16;
export default {
    props: {
        percent: {
            type: Number,
            default: 0
        }
    },
    created() {
      this.touch = {}
    },
    methods: {
      progressTouchStart(e) {
        this.touch.initiated = true;//记录已点击
        this.touch.startX = e.touches[0].pageX;//记录横向坐标
        this.touch.left = this.$refs.progress.clientWidth//记录进度条长度
      },
      progressTouchMove(e) {
        if(!this.touch.initiated) {
          return
        }
        const deltaX = e.touches[0].pageX - this.touch.startX;//当前横向坐标-初始点击横向坐标
        const offsetWidth = Math.min(
          this.$refs.progressBar.clientWidth - progressBtnWidth,Math.max(0,this.touch.left + deltaX)
        );
        this._offset(offsetWidth)
      },
      progressTouchEnd() {
        this.touch.initiated = false;
        this._triggerPercent();
      },
      /* 点击整个进度条时 */
      progressClick(e) {
        this._offset(e.offsetX);
        this._triggerPercent();
      },
      _offset(offsetWidth) { //设置滚动条样式以改变滚动条位置
        this.$refs.progress.style.width = `${offsetWidth}px`;
        this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`;
        this.$refs.progressBtn.style.webkitTransform = `translate3d(${offsetWidth}px,0,0)`;
      },
      _triggerPercent() {  //监听拖动后的percent并派发percentChange事件
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;
        const percent = this.$refs.progress.clientWidth / barWidth;
        this.$emit('percentChange',percent)
      }
    },
    watch: {
        percent(newPercent) {
            if(newPercent >= 0 && !this.touch.initiated) { //在拖动时进度不随percent改变  拖动事件优先于percent改变
                const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;// 总宽-按钮宽度
                const offsetWidth = newPercent*barWidth; //偏移宽度
                // console.log(this.$refs.progress);
                this._offset(offsetWidth)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/dt/css/mixin.scss";
.progress-bar {
  height: rem(30);
  .bar-inner {
    position: relative;
    top: rem(13);
    height: rem(3);
    background: rgba(219,219,219,.3);
    .progress {
      position: absolute;
      height: 100%;
      background: rgb(219, 219, 219);
    }
    .progress-btn-wrapper {
      position: absolute;
      left: rem(-8);
      top: rem(-13);
      width: rem(30);
      height: rem(30);
      .progress-btn {
        position: relative;
        top: rem(10);
        left: rem(7);
        box-sizing: border-box;
        width: rem(9);
        height: rem(9);
        border: rem(5) solid rgb(241, 241, 241);
        border-radius: 50%;
        background: rgb(212, 68, 57);
      }
    }
  }
}
</style>


