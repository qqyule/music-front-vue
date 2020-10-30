import request from '../utils/request'

// 每日推荐歌单
export function getRecommendList(num) {
	return request({
		url: '/personalized?limit=' + num,
		method: 'post',
	})
}

// 获取歌单
export function getPlaylist(id) {
	return request({
		url: '/playlist/detail?id=' + id,
		method: 'post',
	})
}
