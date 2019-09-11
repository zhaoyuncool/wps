<template>
	<div class="content">
	  <div class="header">
	    <h2><img src="../assets/img/headimg.png" alt=""/></h2>
	    <div class="user-box">
				<router-link to="/login"><a href="javascript:;">登录</a></router-link>
				<router-link to="/reg"><a href="javascript:;">注册</a></router-link>
	    </div>
	    <ul class="clear">
	      <li>
	        <span>0</span>
	        <p>关注</p>
	      </li>
	      <li>
	        <span>0</span>
	        <p class="end">粉丝</p>
	      </li>
	    </ul>
	  </div>
	  <div class="docList">
	    <ul>
	      <li class="gk-text">
	        <i></i>
	        <p>公开博文</p>
	        <b></b>
	        <span>0</span>
	      </li>
	      <li class="mm-text">
	        <i></i>
	        <p>秘密博文</p>
	        <b></b>
	        <span>0</span>
	      </li>
	      <li class="cg-text">
	        <i></i>
	        <p>草稿箱</p>
	        <b></b>
	        <span>0</span>
	      </li>
	      <li class="sc-text">
	        <i></i>
	        <p>收藏夹</p>
	        <b></b>
	        <span>0</span>
	      </li>
	      <li class="my_cz">
	        <i></i>
	        <p>收藏夹</p>
	      </li>
	    </ul>
	  </div>
	</div>
</template>

<script>
	import store from '../store'
	// import axios from 'axios';
	export default {
	  data(){
	    return {
	      userdata:{}
	    }
	  },
	  beforeRouteEnter(to, from, next) {
	    console.log("组件内前置守卫");
	    //true 条件  vuex同步拿到  异步: axios
	    if (store.state.user.auth) {
	      //数据预载  axios
	      next(_this => {
	        _this.userdata = store.state.user.data;
	      });
	    } else {
	      next("/login");
	    }
		}
	  }
	  
</script>

<style scoped>
	@import url("../assets/css/mydoc.css");
</style>
