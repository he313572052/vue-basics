<template>
	<div>
		<h2>汽车</h2>
		<!--<p>{{ctitle}}</p>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				page: 1
			}
		},
		mounted() {
//			this.$http.post('http://api.honpe.com:3000/news/list', {
//				'type': 'car',
//				'page': this.page
//			}).then(res => {
//				console.log(res)
//			}, res => {
//				console.log(res.status)
//			})
		}
	}
</script>

<style>
	p {
		color: #C7254E;
	}
</style>