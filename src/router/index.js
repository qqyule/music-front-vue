import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
	{
		path: '/',
		component: () => import('@/views/index/'),
	},
	{
		path: '/playlist/:id',
		component: () => import('@/views/playlist/'),
	},
]

const router = new VueRouter({
	base: '',
	mode: 'hash',
	scrollBehavior: () => ({
		y: 0,
	}),
	routes,
})

export default router
