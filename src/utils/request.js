import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

let loadingInstance

const instance = axios.create({
	baseURL: '',
	timeout: 3333,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
})

instance.interceptors.request.use(
	(config) => {
		if (config.params)
			if (
				config.data &&
				config.headers['Content-Type'] ===
					'application/x-www-form-urlencoded;charset=UTF-8'
			) {
				// config.params = app.config.globalProperties.$baseLodash.pickBy(
				// 	config.params,
				// 	app.config.globalProperties.$baseLodash.identity
				// )
				config.data = qs.stringify(config.data)
			}
		loadingInstance = Vue.prototype.$baseLoading()
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	(response) => {
		if (loadingInstance) loadingInstance.close()
		const { data } = response
		Vue.prototype.$baseMessage(`后端接口未知异常`, 'success')
		return data
	},
	(error) => {
		// const { response } = error
		if (error.response && error.response.data) {
			// const { status, data } = response
			// handleCode(status, data.msg || message)
			return Promise.reject(error)
		} else {
			let { message } = error
			if (message === 'Network Error') {
				message = '后端接口连接异常'
			}
			if (message.includes('timeout')) {
				message = '后端接口请求超时'
			}
			if (message.includes('Request failed with status code')) {
				const code = message.substr(message.length - 3)
				message = '后端接口' + code + '异常'
			}
			Vue.prototype.$baseMessage(message || `后端接口未知异常`, 'error')
			return Promise.reject(error)
		}
	}
)

export default instance
