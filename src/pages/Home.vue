<template>
	<div class="home">
		<van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
			<template #action>
				<div @click="onSearch">搜索</div>
			</template>
		</van-search>
		<!-- <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" /> -->
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>
		<p class="info">这是一个移动端rem布局项目模版</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: ''
		}
	},
	methods: {
		onSearch() {}
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