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
import AccessRecording from "./AccessRecording";
import AccessDetails from "./AccessDetails";
import AccessNavigation from "./AccessNavigation";
const axios = require("axios")
export default {
	name: "count",
    components: {AccessNavigation, AccessDetails, AccessRecording},
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