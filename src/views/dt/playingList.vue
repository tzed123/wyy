<template>
  <div class="playingList">
    <div class="top">
      <div class="icon iconMode">
        <i class="iconfont icon-liebiaoxunhuan"></i>
        <span class="top-text">列表循环(12)</span>
      </div>
      <div class="top-right">
        <div class="icon collect">
          <i class="iconfont icon-jiaguanzhuhuati"></i>
          <span class="top-text">收藏全部</span>
        </div>
        <div class="icon empty">
          <i class="iconfont icon-qingkong"></i>
        </div>
      </div>
    </div>
    <div class="middle">
      <ul>
        <li class="item">
          <div class="middle-left">
            <i class="iconfont icon-laba"></i>
            <span class="song">大田後生仔（欢乐加速版）</span>
            <span class="singer">-丫蛋蛋</span>
          </div>
          <div class="middle-right">
            <i class="iconfont icon-guanbi"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">关闭</div>
  </div>
</template>
<style lang="scss" scoped>

.playingList{
  position: fixed;
  top: 40%;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  .top{
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding:10px 0;

    i{
      font-size:16px;
    }
    
    .top-text{
      margin-left:5px;
      font-size:15px;
    }

    .iconMode{
      padding-left: 1rem;
      display: inline-block;
    }

    .top-right{
      float:right;
      display:flex;

      .collect{
        padding:0 1rem;
        border-right: 1px solid #ddd;
      }

      .empty{
        padding:0 1rem;
      }
    }
  }

  .middle{
    width: 100%;
    overflow: hidden;
    z-index: 50;
    margin-left:1rem ;
    .item{
      border-bottom:1px solid #ddd;
      padding: 0.75rem 1rem 0.5rem 0;
      line-height:16px;

      i{
        font-size:16px; 
      }
      .middle-left{
        display:inline-block;
        overflow: hidden;
        .song{
          margin-left:5px;
          font-size:15px;
        }

        .singer{
          font-size:12px;
          color:#888888;
        }

        &.active{
          color:red;
          
        }
      }
      .middle-right{
        float:right;
        margin-right:16px;
      }  
    }
  }

  .bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    border-top:1px solid #ddd;
    padding: 0.8rem; 
    z-index: 100; 
    background: #fff;
  }
}
</style>