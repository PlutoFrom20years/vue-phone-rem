<template>
	<div class="bottom">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o">标签</van-tabbar-item>
			<van-tabbar-item icon="search">标签</van-tabbar-item>
			<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
			<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
export default {
	data() {
		return {
			active: 0
		}
	},
	methods: {},
	created() {
		console.log('aa')
	}
}
</script>
<style lang='less' scoped>
.bottom {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
}
</style>