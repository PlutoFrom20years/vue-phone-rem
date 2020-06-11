<template>
	<div class="home">
		<van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>
		<p class="info">这是一个rem布局项目模版</p>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {
		onClickLeft() {
			// Toast('返回')
		},
		onClickRight() {
			// Toast('按钮')
		}
	},
	created() {}
}
</script>
<style lang='less' scoped>
.home {
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
	.info {
		font-size: 20px;
		text-align: center;
		height: 50px;
		line-height: 50px;
	}
}
</style>