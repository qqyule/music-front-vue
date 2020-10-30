import request from '../utils/request'

// 每日推荐音乐
export function getNewsongList() {
	return request({
		url: '/personalized/newsong',
		method: 'post',
	})
}

// 热歌榜
export function getToplist() {
	return request({
		url: '/playlist/detail?id=3778678',
		method: 'post',
	})
}
