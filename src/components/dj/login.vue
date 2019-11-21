<template>
  <div class='content'>
    <!--图标-->
    <div class='content_one'>
        <img src="@/assets/dj/14.png"/>
    </div>   
    <!--手机号登录-->
    <button v-show="isLogin" @click="login" class="btn" id='d1'>账号登录</button>
    <!--条款
    <p><input type="checkbox" value="" >同意<a href="">《服务条款》</a><a href="">《隐私政策》</a><a href="">《儿童政策》</a></p> -->  
    <!--账号密码登录--> 
    <div id='login' v-show="isLogout" >
      <input type="text" ref="name" class="form-control" id='d2' placeholder="请输入账号">
      <input type="password" ref="pwd" class="form-control" placeholder="请输入密码">
      <div class='car'>
        <button id='d3'>登录</button>
        <button id='d3' @click="jump">注册</button>            
      </div>

    </div>
  </div>  
</template>
<script>
  export default {
    data(){
      return{
        isLogin:true,
        isLogout:false
      }
    },
    methods:{
      login(){
        this.isLogin=false;
        this.isLogout=true;
      },
      logout(){
        this.isLogin=true;
        this.isLogout=false;
      },
      jump(){
        this.$router.push({path:'/'})/*注册页面*/
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
	margin-top:30rem;
  background:white;
  color:red;
}
#login{
  width:100%;
  height:100%;
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
#d2{
  margin-top:25rem;
}
#d3{
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