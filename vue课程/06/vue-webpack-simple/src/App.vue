<template>
	<div id="app">
		<img src="./assets/logo.png">
		<h1>{{ msg }}</h1>
		<router-link to="/home">主页</router-link>
		<router-link to="/news">新闻</router-link>
		<transition enter-active-class="animated rollIn" leave-active-class="animated zoomOutRight">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style lang="scss">
	#app {
		width: 80%;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.router-link-active {
		color: #2B669A;
	}
</style>