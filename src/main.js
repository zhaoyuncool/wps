import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './assets/css/base.css'
import './assets/js/font.js'
import router from './router.js'
import axios from 'axios'
Vue.prototype.$http = axios

// axios 的拦截器
axios.interceptors.request.use(function (config) {
  // 发送请求成功时，拦截，做点事，config=请求时的配置
  store.state.bLoading=true;
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
  store.state.bLoading=false
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

import loading from './commom/loading'
Vue.use(loading);

// 配置全局过滤器
import filters from './filters'
for (var key in filters) {
	Vue.filter(key, filters[key])
}

import store from './store/index.js'
import {mapGetters} from 'vuex'


var vm = new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')

