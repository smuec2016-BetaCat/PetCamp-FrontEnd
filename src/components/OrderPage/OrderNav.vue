<template>
	<el-row>
		<el-col :span="18" :offset="3">
			<el-col id="logo">
				<div id="myLogo">Here has a logo</div>
				<h3>结算页</h3>
			</el-col>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "OrderNav"
}
</script>

<style scoped>
#logo {
	margin: 20px 0;
	text-align: left;
}
#myLogo{
	height: 50px;
	width: 150px;
	float: left;
	line-height: 50px;
}
#logo h3{
	display: inline;
	float: left;
	margin: 0;
	height: 50px;
	line-height: 50px;
}
</style>