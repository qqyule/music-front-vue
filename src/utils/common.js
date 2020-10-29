// import * as lodash from 'lodash'
import { Loading, Message } from 'element-ui'
export default {
	install: (Vue) => {
		/* 全局加载层 */
		Vue.prototype.$baseLoading = (index, text) => {
			let loading
			if (!index) {
				loading = Loading.service({
					lock: true,
					text: text || '加载中',
					background: 'hsla(0,0%,100%,.8)',
				})
			} else {
				loading = Loading.service({
					lock: true,
					text: text || '加载中',
					spinner: 'vab-loading-type' + index,
					background: 'hsla(0,0%,100%,.8)',
				})
			}
			return loading
		}
		/* 全局Message */
		Vue.prototype.$baseMessage = (message, type) => {
			Message({
				offset: 60,
				showClose: true,
				message: message,
				type: type,
				dangerouslyUseHTMLString: true,
				duration: 3000,
			})
		}
		/* 全局lodash */
		// app.config.globalProperties.$baseLodash = lodash
	},
}
