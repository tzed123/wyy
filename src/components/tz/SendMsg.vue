<template>
  <div id="container">
    <input class="input" type="text" placeholder="听了这么多，你可能有话想说" v-model:value="content">
    <mt-button class="btn" size="small" type="danger" @click="comment">发送</mt-button>
  </div>
</template>
<script>
export default {
  name:"SendMsg",
  data() {
    return {
      content:"",//内容
    }
  },
  methods:{
    comment() {
      var $content= this.content;
      //ajax
      var url="/comment";
      var obj=`content=${$content}`      
      this.axios.post(url,obj)
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
  #container{
    width:95%;
    margin:0 auto;
    padding:0.3rem 0;
    text-align:center;
  }
  .input{
    padding:0.5rem 0.3rem;
    width:70%;
    border:transparent;
    border-bottom:0.05rem solid black;
  }
  .btn{
    margin-left:1rem;
    padding:0.3rem 1rem;
  }
</style>