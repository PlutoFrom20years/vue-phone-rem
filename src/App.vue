<template>
	<div id="app">
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
}
</style>
