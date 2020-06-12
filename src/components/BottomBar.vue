<template>
	<div class="bottom">
		<van-tabbar route>
			<van-tabbar-item icon="	iconfont icon-navbar_zhuye_xuanzhong" replace to="/">首页</van-tabbar-item>
			<van-tabbar-item icon="	iconfont icon-iconnavbar07" replace to="/study">学习</van-tabbar-item>
			<van-tabbar-item icon=" iconfont icon-navbar_zhanpin_xuanzhong" replace to="/home">Blink</van-tabbar-item>
			<van-tabbar-item icon=" iconfont icon-navbar_guanzhong_xuanzhong" replace to="/home">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
export default {
	data() {
		return {}
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
	z-index: 99;
}
</style>