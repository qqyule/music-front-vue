module.exports = {
	devServer: {
		proxy: {
			'/': {
				target: 'http://localhost:3333',
				changeOrigin: true,
			},
		},
	},
}
