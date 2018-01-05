import News from './components/news.vue'
import Home from './components/home.vue'
import Car from './components/car.vue'
import Phone from './components/phone.vue'
import Digital from './components/digital.vue'
export default {
	routes: [{
		path: '/home',
		component: Home
	}, {
		path: '/news',
		component: News,
		children: [{
			path: 'phone',
			component: Phone
		}, {
			path: 'car',
			component: Car
		}, {
			path: 'digital',
			component: Digital
		}]
	}, {
		path: '*',
		redirect: '/home'
	}]
}