<template>
	<div>
		<h2>汽车</h2>
		<!--<p>{{ctitle}}</p>-->
		<p>{{page}}</p>
		<ul>
			<li v-for="item in list">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				page: 1,
				list: null
			}
		},
		created() {
			this.fetchData();
		},
		watch: {
			'$router': 'fetchData'
		},
		methods: {
			fetchData() {
				let _this = this;
				this.$http.get('/src/data/car.data').then(function(res) {
					_this.list = res.data;
				}).catch(function(err) {
					throw new Error('请求数据异常')
				})
			}
		}
	}
</script>

<style>
	p {
		color: #C7254E;
	}
</style>