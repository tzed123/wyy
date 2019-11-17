<template>
  <div class='content'>
    <!--图标-->
    <div class='content_one'>
        <img src="@/assets/dj/14.png"/>
    </div>
    <!--手机号登录-->
    <div class='content_two'>
        <input type="button" class="btn" id='d1' value='手机号登录'>
    <!--立即体验-->
        <input type="button" class="btn" value='立即体验'> 
    <!--条款-->
        <p><input type="checkbox">同意<a href="">《服务条款》</a><a href="">《隐私政策》</a><a href="">《儿童隐私政策》</a></p>      
    </div>
  </div>  
</template>
<script>
export default {
  
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
}
/*<!--条款-->*/
.content  .content_two p{
	text-align:center;
}
.content  .content_two a{
	font-size:0.8rem;
	color:white;	
}
</style>