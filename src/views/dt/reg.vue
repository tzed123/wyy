<template>
  <div class="reg">
    <div class="reg-cancel">
      <div class="cancel" @click="change">取消</div> 
    </div>
    <div class="mailbox">
      <h2 class="title">请输入用户名及密码</h2> 
      <h4 class="subtitle">
        <img src="@/assets/dt/icon-security.png">已开启安全注册通道
      </h4>
    </div>
    <mt-field placeholder="输入用户名，6~16个字符，区分大小写" v-model:value="uname"></mt-field>
    <mt-field placeholder="设置密码，6~16个字符，区分大小写" v-model:value="upwd" type="password"></mt-field>
    <div class="transverse"></div>
    <mt-button :disabled="uname==''||upwd==''" size="large" class="next" @click="reg">用户注册</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname:"",//双向绑定用户名
      upwd:"",//双向绑定密码
    }
  },
  methods:{
    change() {
      
    },
    reg() {
      //1.1获取用户输入用户名
      var $uname = this.uname;
      //1.2获取用户输入密码
      var $upwd = this.upwd;
      //1.3创建正则表达式验证用户名及密码6~16个字符，区分大小写
      var x =/^\w{6,16}$/;
      //1.4通过正则表达式验证用户名，没通过提示交互
      if(!x.test($uname)){
        this.$messagebox("用户名长度应为6~16个字符");
        return;
      }
      if(!x.test($upwd)){
        this.$messagebox("密码长度应为6~16个字符")
        return;
      }
      //ajax
      var url="/reg";
      var obj=`uname=${$uname}&upwd=${$upwd}`      
      this.axios.post(url,obj)
      .then(res=>{
        if(res.data.code==1){
          alert("注册成功")
          this.$router.push("/")
        }else{
          alert("注册失败")
        }
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>
<style scoped lang="scss">
 .reg {
  .reg-cancel {
    width: 100%;
    background: rgb(238, 238, 238);
    margin-bottom:15%;

    .cancel {
      width: 20%;
      padding: 4% 5%; 
    }
  }

  .mailbox {
    width: 100%;
    text-align: center;
    margin-bottom: 10%;

    .title {
      margin: 0 auto;
      font-size: 1.5rem;
      font-weight: lighter;
      line-height: 3rem;
    }

    .subtitle {
      margin: 0 auto;
      font-size: 0.75rem;
      font-weight: lighter;
    }
  }
  
  .next {
    width: 90%;
    margin: 0 auto;
    background: #e10000;
    color: #fff;
    margin-top:5%;
  }
  .next:active{
    background: #b00505;
  }
}

</style>