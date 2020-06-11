<template>
	<div class="bottom">
		<van-tabbar v-model="active">
			<van-tabbar-item icon=" iconfont icon-navbar_zhuye_xuanzhong">首页</van-tabbar-item>
			<van-tabbar-item icon=" iconfont icon-iconnavbar07">标签</van-tabbar-item>
			<van-tabbar-item icon=" iconfont icon-navbar_zhanpin_xuanzhong">标签</van-tabbar-item>
			<van-tabbar-item icon=" iconfont icon-navbar_guanzhong_xuanzhong">我的</van-tabbar-item>
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