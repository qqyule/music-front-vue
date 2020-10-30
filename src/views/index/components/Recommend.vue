<template>
	<div>
		<div class="h2">
			推荐歌单
		</div>
		<van-grid :border="false" :column-num="3">
			<van-grid-item
				v-for="item in list"
				:key="item.id"
				@click="toPlaylist(item.id)"
			>
				<van-image class="img" :src="item.picUrl">
					<div class="info">
						<van-icon name="service-o" /> {{ item.playCount | formatNum }}
					</div>
				</van-image>
				<div class="text">{{ item.name }}</div>
			</van-grid-item>
		</van-grid>
		<div class="h2">
			最新音乐
		</div>
		<div class="newsong">
			<div v-for="item in newsongList" :key="item.id" class="song_item">
				<div class="song_l">
					<div>{{ item.name }}</div>
					<div class="song_info">
						<i v-if="item.song.privilege.maxbr >= 999000" class="high"></i>
						{{ item.song.artists[0].name }} -
						{{ item.song.album.name }}
					</div>
				</div>
				<div class="song_r"><van-icon name="play-circle-o" /></div>
			</div>
		</div>
	</div>
</template>

<script>
import { getRecommendList } from '@/api/playlist'
import { getNewsongList } from '@/api/song'
export default {
	data() {
		return {
			list: [],
			newsongList: [],
		}
	},
	filters: {
		formatNum(val) {
			if (!val) return val
			return Math.ceil(val / 10000) + '万'
		},
	},
	created() {
		this.fetchData()
	},
	methods: {
		toPlaylist(id) {
			this.$router.push('/playlist/' + id)
		},
		async fetchData() {
			const { result } = await getRecommendList(6)
			this.list = result

			const result2 = await getNewsongList()
			this.newsongList = result2.result
		},
	},
}
</script>

<style>
.h2 {
	padding-left: 8px;
	margin: 20px 0;
	border-left: 2px solid #dd001b;
}
.van-grid .van-grid-item__content {
	background: none;
	padding: 0;
	margin-bottom: 10px;
}
.van-grid-item:nth-child(1),
.van-grid-item:nth-child(2),
.van-grid-item:nth-child(4),
.van-grid-item:nth-child(5) {
	padding-right: 1px;
}
.van-grid-item:nth-child(2),
.van-grid-item:nth-child(3),
.van-grid-item:nth-child(4),
.van-grid-item:nth-child(6) {
	padding-left: 1px;
}
.info {
	position: absolute;
	top: 4px;
	right: 6px;
	color: #fff;
	font-size: 0.5rem;
}
.text {
	font-size: 0.8rem;
	line-height: 1rem;
	height: 2rem;
	overflow: hidden;
	margin: 4px 4px;
}
.newsong {
	padding: 0 10px;
}
.newsong .song_item {
	position: relative;
	margin: 6px 0;
	border-bottom: 1px dotted #ddd;
	padding: 8px 0;
}

.newsong .song_r {
	position: absolute;
	right: 0;
	top: 20px;
	color: #aaa;
	font-size: 1.5rem;
}
.newsong .song_info {
	font-size: 0.8rem;
	margin-top: 6px;
	color: #999;
}
.newsong .song_info .high {
	background: url('~@/assets/index_icon_2x.png') no-repeat;
	background-size: 166px 97px;
	display: inline-block;
	width: 12px;
	height: 8px;
}
</style>
