<template>
	<div class="home">
		<van-tabs v-model="tabActive" sticky>
			<van-tab title="推荐音乐" name="recommend"></van-tab>
			<van-tab title="热歌榜" name="hot"></van-tab>
			<van-tab title="搜索" name="search"></van-tab>
		</van-tabs>
		<recommend v-show="tabActive === 'recommend'" />
		<hot v-show="tabActive === 'hot'" />
	</div>
</template>

<script>
import Recommend from './components/Recommend'
import Hot from './components/Hot'
export default {
	data() {
		return {
			tabActive: 'hot',
		}
	},
	components: {
		Recommend,
		Hot,
	},
	methods: {},
}
</script>

<style>
.home {
	background: #fcfcfd;
}
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
