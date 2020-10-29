import Vue from 'vue'
import App from './App.vue'
import Vab from './utils/common'
import '@/plugins'
import router from '@/router'

Vue.use(Vab)

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app')
