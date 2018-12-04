<template>
	<el-col class="errorItems">
		<slot name="inputGroups"></slot>
		<el-col class="error">
			<slot name="errors"></slot>
		</el-col>
	</el-col>
</template>

<script>
export default {
	name: "error"
}
</script>

<style scoped>
.error{
	color: #780701;
	font-size: 0.63em;
	text-align: left;
	margin-left: 20%;
	position: absolute;
	bottom: -22px;
}
.errorItems{
	margin-bottom: 15px;
	position: relative;
}
</style>