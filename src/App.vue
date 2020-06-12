<template>
	<div id="app">
		<!--路由跳转过度效果  可手动添加类名 -->
		<transition enter-active-class="animate__animated  animate__fadeIn">
			<router-view />
		</transition>
		<bottom-bar></bottom-bar>
	</div>
</template>
<script>
import bottombar from './components/BottomBar'
export default {
	computed: {
		// preRouter() {
		// 	return
		// }
	},
	components: {
		'bottom-bar': bottombar
	},
	created() {}
}
</script>
<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	width: 100%;
	overflow: hidden;
	padding-bottom: 40px;
}
</style>
