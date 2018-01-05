import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
// 引入 axios
import axios from 'axios';
import routes from './router.config.js';

//请求根路径
axios.defaults.baseUrl = 'http://localhost:3000';
// 将axios绑定给vue成为一个属性
Vue.prototype.$http = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	scrollBehavior: () => ({
		y: 0
	}),
	routes
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})