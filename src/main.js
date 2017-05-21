import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store'
import axios from 'axios'

import filters from './filter'

// Vue.filter(函数名， 函数体)
// es6对象的遍历
Object.keys(filters).forEach((key)=>{
	Vue.filter(key, filters[key])
})


Vue.use(VueRouter);

// 路由配置
const router = new VueRouter({
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
	 	return {y: 0 }
	},
	routes: routerConfig
})

// axios 的配置

axios.interceptors.request.use(function (config) {
	// 请求前做的事情
	// 让loading 显示
	// store.dispatch('');
	console.log("请求前");

	return config;
}, function (err) {
	return Promise.reject(err);
})

axios.interceptors.response.use(function (config) {
	// 请求前做的事情
	// 让loading 显示
	// store.dispatch('');
	console.log("请求成功");

	return config;
}, function (err) {
	return Promise.reject(err);
})
// 配置根路径 可以理解为host
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencode';

Vue.prototype.$http = axios;


new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
})
