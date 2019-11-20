<template>
  <div class="reg">
    <div class="reg-cancel">
      <div class="cancel">取消</div> 
    </div>
    <div class="mailbox">
      <div class="top">
        <h2 class="title">请输入邮箱地址</h2>    
        <h4 class="subtitle">已开启安全注册通道</h4>
      </div>
      <div class="middle">
        <div class="user">
          <input v-model:text="isAgree" class="user-left" type="text" placeholder="字母开头，6~18个字符">
          <div class="user-center">
            <img src="@/assets/dt/icon-empty.png" alt="">
          </div>
          <div class="user-right">
            <div class="email">@163.com</div>
            <span class="toggledown"></span>
            <div class="List">
              <div class="emailList">@163.com</div>
              <div class="emailList">@126.com</div>
              <div class="emailList">@yeah.net</div>
            </div>
          </div>
        </div>
        <div class="transverse"></div>
        <div class="pwd">
          <input type="password" placeholder="设置密码，6~16个字符，区分大小写">
        </div>
        <div class="transverse"></div>
        <div :disabled="isAgree==false" class="next">注册</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  .reg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0; }
  .reg .reg-cancel {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    background: #eeeeee; }
    .reg .reg-cancel .cancel {
      width: 20%;
      padding: 5%; }
  .reg .mailbox {
    position: fixed;
    top: 10%;
    width: 100%; }
    .reg .mailbox .top {
      text-align: center;
      margin-bottom: 10%; }
      .reg .mailbox .top .title {
        margin: 0 auto;
        font-size: 1.5rem;
        font-weight: lighter;
        line-height: 3rem; }
      .reg .mailbox .top .subtitle {
        margin: 0 auto;
        font-size: 0.75rem;
        font-weight: lighter; }
    .reg .mailbox .middle .user {
      margin: 0 auto;
      width: 90%;
      display: flex; }
      .reg .mailbox .middle .user .user-left {
        width: 60%;
        border: 0;
        outline: none; }
      .reg .mailbox .middle .user .user-center {
        margin-left: 3%;
        margin-right: 2%; }
      .reg .mailbox .middle .user .user-right {
        display: flex;
        position: relative; }
        .reg .mailbox .middle .user .user-right .email {
          color: #074ff7; }
        .reg .mailbox .middle .user .user-right .toggledown {
          position: absolute;
          top: 22%;
          left: 100%;
          width: 1rem;
          height: 1rem;
          margin-left: 5%;
          background: url(../../assets/dt/icon-down.png) no-repeat; }
        .reg .mailbox .middle .user .user-right .List {
          position: absolute;
          top: 200%;
          left: -21%;
          width: 140%;
          background: #eeeeee;
          display: none; }
          .reg .mailbox .middle .user .user-right .List .emailList {
            padding: 7% 15%; }
          .reg .mailbox .middle .user .user-right .List .emailList:not(:first-child) {
            border-top: 1px solid #bfbfbf; }
      .reg .mailbox .middle .user .user-right:hover .toggledown {
        background: url(../../assets/dt/icon-Upward.png) no-repeat; }
      .reg .mailbox .middle .user .user-right:hover .List {
        display: block; }
    .reg .mailbox .middle .transverse {
      margin: 4% 0 10% 5%;
      width: 95%;
      height: 0.1rem;
      background: #bfbfbf; }
    .reg .mailbox .middle .pwd {
      width: 90%;
      margin: 0 auto; }
      .reg .mailbox .middle .pwd input {
        width: 100%;
        border: 0;
        outline: none; }
    .reg .mailbox .middle .next {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      background: #e10000;
      padding: 4% 0;
      border-radius: 0.25rem;
      color: #fff; }
    .reg .mailbox .middle .next:active {
      background: #a21b1b; }

</style>