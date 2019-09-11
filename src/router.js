import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from './components/home.vue'
import login from './components/login.vue'
import user from './components/user.vue'
import detail from './components/detail.vue'
import column from './components/column.vue'
import flow from './components/flow.vue'
import reg from './components/reg.vue'
import error from './components/error.vue'
let routes = [
	{path:'/home',component:home},
	{path:'/login',component:login},
	{path:'/user',component:user},
	{path:'/flow',component:flow},
	{path:'/detail/:id',component:detail},
	{path:'/column',component:column},
	{path:'/reg',component:reg},
	{path:'/',redirect:'/home'},
	{path:'*',component:error},
]
let router = new VueRouter({
	routes
})
export default router