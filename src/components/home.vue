<template>
  <div class="home">
    <slider></slider>
    <list :list="home" :dataName="'home'"></list>
  </div>
</template>
<script>
  import slider from './slider.vue'
  import list from './list.vue'
  import {mapGetters} from 'vuex';
	let top = 0
  export default{
    components:{
      slider,list
    },
    // data(){
    //   return {
    //     list:[]
    //   }
    // },
    computed:mapGetters([
      'home'
    ]),
    updated(){
       document.documentElement.scrollTop = top
	 },
    destroyed(){
      top = document.documentElement.scrollTop
	 },
    mounted(){
      //显示loading......
      let url = `/data/index.data`;
      this.$store.dispatch('UPDATA_DATA',{url:url,mutationsType:'UPDATA_HOME'});
      /* this.$http({
        url:url,

        // url:'http://localhost:3000/index'
        // params:{start:0,count:0}

      }).then(
        res=>this.list = res.data
      ) */
    }
  }
</script>