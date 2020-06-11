<template>
	<div class="notfound">
		<div class="img_box">
			<img :src="img" alt="">
			<p>You may have lost your way </p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			img: require('../assets/img/lose.gif')
		}
	},
	methods: {},
	created() {}
}
</script>
<style lang='less' scoped>
.notfound {
	width: 100%;
	height: 100%;
	.img_box {
		width: 100%;
		img {
			width: 100%;
		}
		p {
			font-size: 20px;
			line-height: 50px;
			height: 50px;
			text-align: center;
		}
	}
}
</style>