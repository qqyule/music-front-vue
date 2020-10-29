<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick" class="tabs_top">
			<el-tab-pane label="推荐音乐" name="recommend"></el-tab-pane>
			<el-tab-pane label="热歌榜" name="hot"></el-tab-pane>
			<el-tab-pane label="搜索" name="search"></el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeName: 'recommend',
		}
	},
	methods: {
		handleClick() {},
	},
}
</script>

<style>
.tabs_top {
	width: 100%;
}
.tabs_top .el-tabs__item {
	width: 33%;
}
.el-tabs__item.is-active {
	color: #dd001b;
}
.el-tabs__active-bar {
	background-color: #dd001b;
}
</style>
