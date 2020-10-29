import Vue from 'vue'
import App from './App.vue'
import Vab from './utils/common'
import './plugins'

Vue.use(Vab)

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
}).$mount('#app')
