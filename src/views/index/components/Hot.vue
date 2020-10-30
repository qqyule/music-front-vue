<template>
	<div>
		<div class="hot_top">
			<div class="hot_wrap">
				<div class="title"></div>
				<div class="hottime">更新日期：</div>
			</div>
		</div>
		<div class="hotsong">
			<div v-for="item in topList" :key="item.id" class="song_item">
				<div class="song_l">
					<div>{{ item.name }}</div>
					<div class="song_info">
						<!-- <i v-if="item.song.privilege.maxbr >= 999000" class="high"></i> -->
						{{ item.ar[0].name }} -
						{{ item.al.name }}
					</div>
				</div>
				<div class="song_r"><van-icon name="play-circle-o" /></div>
			</div>
		</div>
	</div>
</template>

<script>
import { getToplist } from '@/api/song'
export default {
	data() {
		return {
			topList: [],
		}
	},
	created() {
		this.fetchData()
	},
	methods: {
		async fetchData() {
			const { playlist } = await getToplist()
			this.topList = playlist.tracks.slice(0, 20)
		},
	},
}
</script>

<style scoped>
.hot_top {
	background: url('~@/assets/hot_music_bg_3x.jpg') no-repeat;
	position: relative;
	padding-top: 38.9%;
	background-size: contain;
}
.hot_top:after {
	background-color: rgba(0, 0, 0, 0.2);
}
.hot_wrap {
	position: absolute;
	left: 20px;
	top: 0;
}
.title {
	margin-top: 30px;
	background: url('~@/assets/index_icon_2x.png') no-repeat;
	background-size: 166px 97px;
	width: 142px;
	height: 67px;
	background-position: -24px -30px;
}
.hottime {
	margin-top: 10px;
	color: #fff;
	font-size: 0.6rem;
}
.hotsong {
	padding: 0 10px;
}
.hotsong .song_item {
	position: relative;
	margin: 6px 0;
	border-bottom: 1px dotted #ddd;
	padding: 8px 0;
}

.hotsong .song_r {
	position: absolute;
	right: 0;
	top: 20px;
	color: #aaa;
	font-size: 1.5rem;
}
.hotsong .song_info {
	font-size: 0.8rem;
	margin-top: 6px;
	color: #999;
}
.hotsong .song_info .high {
	background: url('~@/assets/index_icon_2x.png') no-repeat;
	background-size: 166px 97px;
	display: inline-block;
	width: 12px;
	height: 8px;
}
</style>
