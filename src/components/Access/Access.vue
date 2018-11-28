<template>
	<div>
		<el-container>

			<!--左部导航栏组件-->
			<AccessNavigation></AccessNavigation>

			<!--访问记录组件-->
			<router-view></router-view>
			<!--<AccessRecording></AccessRecording>-->

			<!--详情组件-->
			<!--<AccessDetails></AccessDetails>-->
		</el-container>
	</div>
</template>

<script>
import AccessNavigation from "./AccessNavigation"

export default {
	name: "count",
    components: {AccessNavigation},
}
</script>

<style scoped>
.el-main{
	padding: 0;
}
.el-menu-demo{
	height: 30px;
}
</style>
