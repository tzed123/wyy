<template>
  <div class='content'>
    <!--图标-->
    <div class='content_one'>
        <img src="@/assets/dj/14.png"/>
    </div>   
    <!--手机号登录-->
    <button v-show="isLogin" @click="login" class="btn" id='d1'>账号登录</button>
    <!--立即体验-->
    <button v-show="isLogin" @click="loginn" class="btn" id='d4'>立即体验</button>
    <!--条款-->
    <p v-show="!isLogout"><input type="checkbox" value="" v-model='isagree'>同意《服务条款》《隐私政策》《儿童政策》</p>
    <!--账号密码登录--> 
    <button class="topback"  v-show="isreturn"  @click='login'>返回</button>
    <div id='login' v-show="isLogout" > 
      <input type="text"  class="form-control" id='d2' placeholder="请输入账号" v-model='uname'>
      <input type="password" class="form-control" placeholder="请输入密码" v-model='upwd'>
      <div class='car'>
        <button class='d3' @click='reg'>登录</button>
        <button class='d3' @click="jump">注册</button>      
      </div>
    </div>
  </div >  
</template>
<script>
  export default {
    data(){
      return{
        isLogin:true,
        isLogout:false,
        uname:'',
        upwd:'',  
        isagree:false,
        isreturn:false
      }
    },
    methods:{
      login(){
      if(this.isagree==false){
       this.$toast("请勾选协议")
       return;
      }
        this.isLogin=false;
        this.isLogout=true;
        this.isreturn=!this.isreturn
      },
      logout(){
        this.isLogin=true;
        this.isLogout=false;
      },
      jump(){
        this.$router.push({path:'/reg'})
      },
      loginn(){
        this.$router.push({path:'/page'})
      },
      goback(){
        this.$router.push(-1);//返回上一页
      },
      reg(){
        var u=this.uname;
        var p=this.upwd;
        var reg=/^\w{6,16}$/;
        if(!reg.test(u)){
          this.$toast('账号格式不正确')
          return;
        }  
        if(!reg.test(p)){
          this.$toast('密码格式不正确')
          return;                 
        }
      },
    }
  } 
</script>
<style scoped>
   /* <!--图标--> */
.content{
    width:100%;
    height:100%;/*问题*/
	background:#e10000;
	position:fixed;
}
/*<!--图标-->*/
.content_one{
    height:4rem;
    width:4rem;
    background:red;
    border-radius:50%;
    position:absolute;   
    top:30%;   
    left:42%;      
}
.content img{
    height:3rem;
    width:3rem;
    margin-left:0.5rem;
    margin-top:0.4rem;
}
/*<!--手机号登录-->*/
.content .btn{
	display:block;
	background:#e10000;
	margin:20px auto;
	text-align:center;
	border-radius:24px;
	border:1px solid white;
	width:70%;
	height:6%;
	outline:none;
	color:white;
}
#d1{
	margin-top:28rem;
  background:white;
  color:red;
}
/*<!--立即体验-->*/
#d4{
  background:white;
  color:red;
  margin-top:2rem;
}
#login{
  width:100%;
  height:100%;
}
/*<!--条款-->*/
.content p{
  margin-left:2rem;
  margin-top:2rem;
  color:white;
}
/*<!--账号密码登录-->*/
::-webkit-input-placeholder{
  color:#e10000;
}
.form-control {
	text-align:center;
	border-radius:24px;
	width:70%;
	height:6%;
  outline:none;
	color:#e10000;
  display:block;
	background:white;
	margin:20px auto;
  }
/*<!--返回-->*/
.topback{
  background:#e10000;
	margin:20px auto;
	text-align:center;
	border-radius:30px;
	border:1px solid white;
	width:15%;
	height:4%;
	outline:none;
	color:white;
  margin-left:1rem;
}
#d2{
  margin-top:20rem;
}
.d3{
  float:left;
	background:#e10000;
  margin-top:2rem;
  margin-left:5rem;
	border-radius:24px;
	border:1px solid white;
  width:20%;              
  height:6%;
  color:white;
}
.car{
width:100%;
height:100%;
}

</style>