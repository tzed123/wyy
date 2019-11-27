<template>
<div id="container">
  <ellipsistitle :title='title'></ellipsistitle>
  <ellipsislist :lis='lis' @cancel='cancel'></ellipsislist>
</div>
</template>
<script>
import ellipsistitle from '@/components/tz/EllipsisTitle.vue'
import ellipsislist from '@/components/tz/EllipsisList.vue'
export default {
  components:{ellipsistitle,ellipsislist},
  props:['title','lis'],
  data(){
    return{
      
    }
  },
  methods:{
     cancel(){
      this.$emit('cancel')
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
    padding:0.5rem 0 1rem 0;
  }
</style>