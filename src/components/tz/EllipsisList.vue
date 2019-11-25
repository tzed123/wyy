<template>
  <ul>
    <li class="frame" v-for="(val,i) of lis" :key="i">
      <img class="pic" :src="require(`../../assets/tz/${val}.png`)">
      <p>{{i}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  props:[
    'lis'
  ]
}
</script>
<style scoped>
  .frame{
    display:flex;
    align-items:center;
    padding:0.5rem;
    border:transparent;
    border-bottom:0.05rem solid #ccc;
  }
  .frame:active{
    background:#eee;
  }
  .pic{
    width:1rem;
    height:1rem;
    margin-right:0.5rem;
  }
</style>