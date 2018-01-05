<template>
	<div>
		<div>
			<router-link to="/news/car">汽车</router-link>
			<router-link to="/news/phone">手机</router-link>
			<router-link to="/news/digital">数码</router-link>
		</div>
		<div>
			<transition enter-active-class="animated rollIn" leave-active-class="animated zoomOutRight">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	p {
		color: #C12E2A;
	}
</style>