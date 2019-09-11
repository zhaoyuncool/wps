<template>
  <div class="newsList">
    <list :list="follow" :dataName="'follow'"></list>
  </div>
</template>
<script>
	let top = 0
  import list from './list.vue'
  import {mapGetters} from 'vuex';
  export default{
    components:{
      list
    },
    computed:mapGetters([
      'follow'
    ]),
	 updated() {
	 		 document.documentElement.scrollTop = top
	 },
	 destroyed(){
	 		 top = document.documentElement.scrollTop
	 },
    mounted(){
      let url = `/data/follow.data`;
      this.$store.dispatch('UPDATA_DATA',{url:url,mutationsType:'UPDATA_FOLLOW'});
    }
  }
</script>

<style scoped>
	.newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>
