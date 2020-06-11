<template>
	<div id="app">
		<!--路由跳转过度效果  可手动添加类名 -->
		<router-view />
		<bottom-bar></bottom-bar>
	</div>
</template>
<script>
import bottombar from './components/BottomBar'
export default {
	components: {
		'bottom-bar': bottombar
	}
}
</script>
<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	width: 100%;
	overflow: hidden;
}
</style>
