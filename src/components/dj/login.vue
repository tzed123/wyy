<template>
  <div class='content'>
    <!--图标-->
    <div class='content_one'>
        <img src="@/assets/dj/14.png"/>
    </div>
    <!--手机号登录-->
    <div class='content_two'>
        <a href=""><input type="button" class="btn" id='d1' value='账号登录' ></a> 
    <!--立即体验-->
        <!--<input type="button" class="btn" value='立即体验'>-->
    <!--条款-->
        <p><input type="checkbox" value="" >同意<a href="">《服务条款》</a><a href="">《隐私政策》</a><a href="">《儿童隐私政策》</a></p>     
    </div>



  </div>  
</template>
<script>

  export default {
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        }
 
      }
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
.content  .content_two{
	height:100%;
}
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
.content  .content_two #d1{
	margin-top:30rem;
    background:white;
    color:red;
}
/*<!--条款-->*/
.content  .content_two p{
	text-align:center;
}
.content  .content_two a{
	font-size:0.8rem;
	color:white;	
}
  .qxs-ic_user {
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }
</style>