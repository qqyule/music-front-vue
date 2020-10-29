<template>
	<div class="hello">
		<el-button>默认按钮</el-button>
	</div>
</template>

<script>
import { gatHotwallList } from '../api/comment'
export default {
	name: 'Test',
	mounted() {
		this.feachData()
	},
	methods: {
		async feachData() {
			const a = await gatHotwallList()
			console.log(a)
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
