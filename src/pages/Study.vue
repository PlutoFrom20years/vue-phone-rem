<template>
	<div class="study">
		<van-search v-model="value" shape="round" background="#cccc" placeholder="输入数字试试吧～" @input="onInput" />
		<vue-falls :photoList='photoList' :row='row'></vue-falls>
	</div>
</template>
<script>
import { Toast } from 'vant'
export default {
	data() {
		return {
			// mock 数据
			photoList: [
				{
					url: require('../assets/img/1.jpeg')
				},
				{
					url: require('../assets/img/2.jpeg')
				},
				{
					url: require('../assets/img/3.jpeg')
				},
				{
					url: require('../assets/img/4.jpeg')
				},
				{
					url: require('../assets/img/5.jpeg')
				},
				{
					url: require('../assets/img/6.jpeg')
				},
				{
					url: require('../assets/img/7.jpeg')
				},
				{
					url: require('../assets/img/8.jpeg')
				},
				{
					url: require('../assets/img/9.jpeg')
				},
				{
					url: require('../assets/img/10.jpeg')
				},
				{
					url: require('../assets/img/1.jpeg')
				}
			],
			row: 3,
			value: ''
		}
	},
	methods: {
		onInput(val) {
			val = +val
			if (typeof val === 'number' && val % 1 === 0) {
				this.row = val
			} else {
				Toast.fail('请输入纯数字')
				this.row = 3
			}
		}
	},
	created() {}
}
</script>
<style lang='less' scoped>
</style>