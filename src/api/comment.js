import request from '../utils/request'

// 云村热评
export function gatHotwallList(data) {
	return request({
		url: '/comment/hotwall/list',
		method: 'post',
		data,
	})
}
