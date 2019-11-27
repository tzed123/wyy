<template>
<div class="body">
        <!-- 返回 -->
  <div class="bg d-flex header">
      <a href=""><img src="../../assets/yh/return.png" alt=""></a><div class="t-24">单曲购买</div> 
    </div>
        <!--兑换码-->
  <div class="d-flex exchange-f">
    <input type="text" placeholder="请输入兑换码" class="exchange"><div class="exchange-font">兑换</div>   
  </div>

  <!--选中区域-->
  <div class="pitch">
    <div>全部</div>
    <div>会员</div>
    <div>演出</div>
    <div>商城</div>
  </div>

</div>
</template>

<style scoped>
.body{
  background:#f4f5f7;
}
/*返回*/
  .header{
    background:#fff;
    padding:0.5rem 0.5rem;

  }
  .header div{
    margin-left:0.5rem;
  }
  /*兑换码 */
  .exchange-f{
    margin:0 auto;
    text-align:center;
    padding:3% 5%;
    background:#fff;
  }
  .exchange{
  border-radius: 2.5rem;      
	border-style: none ;
	text-shadow: none ;
	box-shadow: none; 
  background:#f2f2f2;
  height:2rem;
  width:88%;
  text-align:center;
  color:#cbcbcb;
  }
  .exchange-font{
    line-height:2;
    margin-left:0.5rem;
    color:#9b9b9b;
  }
  /*选中区域*/
  .pitch{
    display:flex;
    justify-content: space-around;
    background: #fff;
    margin-top:0.15rem;
  }
  .pitch div{
    font-size:18px;
    font-weight:bold;
  }
</style>