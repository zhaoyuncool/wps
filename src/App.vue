<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <navbar v-show="bNav"></navbar>
    <!-- <transition -->
      <!-- enter-active-class="animated fadeIn" -->
    <!-- > -->
      <router-view></router-view>
    <!-- </transition> -->
    <footbar v-show="bFoot"></footbar>
  </div>
</template>
<script>
  import navbar from './components/navbar.vue'
  import footbar from './components/footbar.vue'

  import {mapGetters} from 'vuex';
  import * as types from './store/types.js'
  export default{
    name:'app',
    components:{
      navbar,footbar
    },
    methods:{
      checkRouterChange(to){
        let path=to.path;

        if(/home|flow|column/.test(path)){//home|follow|column
          this.$store.dispatch(types.VIEW_NAV,true)
          this.$store.dispatch(types.VIEW_FOOT,true)
        }
        if(/login|reg|detail/.test(path)){//login|reg|detail
          this.$store.dispatch(types.VIEW_NAV,false)
          this.$store.dispatch(types.VIEW_FOOT,false)
        }
        if(/user/.test(path)){//user
          this.$store.dispatch(types.VIEW_FOOT,true)
          this.$store.dispatch(types.VIEW_NAV,false)
        }

      }
    },
    watch:{
      $route:{
        deep:true,
        immediate:true,
        handler:'checkRouterChange'
      }
    },
    computed:mapGetters([
      'bNav','bFoot','bLoading'
    ])
  }
</script>
