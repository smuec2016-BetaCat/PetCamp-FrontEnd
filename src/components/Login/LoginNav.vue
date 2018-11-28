<template>
	<el-row>
		<el-col id="RegisterNav" :span="22" :offset="2">
			<span id="logo"></span>
			<span id="logo-title">欢迎登录</span>
		</el-col>
		<el-col>
			<div style="border-bottom: white solid 1px;box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);"></div>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "LoginNav"
}
</script>

<style scoped>
#RegisterNav{
	height: 110px;

}
#RegisterNav #logo{
	width: 160px;
	height: 50px;
	float: left;
	margin-top: 24px;
	background: url("https://misc.360buyimg.com/user/reg/3.0.0/css/i/icon.png");
}
#RegisterNav #logo-title{
	float: left;
	height: 34px;
	line-height: 34px;
	font-size: 24px;
	color: #333;
	margin-top: 40px;
}
</style>