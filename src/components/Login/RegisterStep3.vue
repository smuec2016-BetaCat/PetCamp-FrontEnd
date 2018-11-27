<template>
	<el-row>
		<el-col>
			<div class="success">你已经成功注册!</div>
		</el-col>
		<el-col>
			<el-button type="danger" style="font-size: 30px" @click="goto">立即登录</el-button>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "LoginStep3",
	data (){
		return {

		}
	},
	methods:{
		goto(){
			this.$router.push({path:"/"})
		}
	}
}
</script>

<style scoped>
.success{
	color: #67c23a;
	font-size: 30px;
	text-decoration: none;
	margin: 10%;
}
</style>