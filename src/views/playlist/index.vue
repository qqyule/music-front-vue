<template>
	<div></div>
</template>

<script>
import { getPlaylist } from '@/api/playlist'
export default {
	data() {
		return {}
	},
	created() {
		const playlistId = this.$route.params.id
		this.fetchData(playlistId)
	},
	methods: {
		async fetchData(id) {
			const { playlist } = await getPlaylist(id)
			console.log(playlist)
		},
	},
}
</script>

<style scoped></style>
