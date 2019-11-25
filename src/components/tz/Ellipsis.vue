<template>
<div id="container">
  <ellipsistitle></ellipsistitle>
  <ellipsisList :lis='lis'></ellipsisList>
</div>
</template>
<script>
import ellipsistitle from '@/components/tz/EllipsisTitle.vue'
import ellipsisList from '@/components/tz/EllipsisList.vue'
export default {
  components:{ellipsistitle,ellipsisList},
  data(){
    return{
      lis:{"下载":"download","删除":"trashcan"}
    }
  }
}
</script>
<style scoped>
  #container{
    position:fixed;
    bottom:0;
    background-color:white;
    border-top-right-radius:0.5rem;
    border-top-left-radius:0.5rem;
    width:100%;
    z-index:300;
    padding:1rem 0 0.3rem 0;
  }
</style>