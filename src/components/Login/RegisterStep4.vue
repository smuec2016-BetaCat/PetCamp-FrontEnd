<template>
	<el-row>
		<el-col>
			<div class="success">你已经成功注册!</div>
		</el-col>
		<el-col>
			<i class="el-icon-loading success"></i>
		</el-col>
		<el-col>
			<div class="success">页面即将跳转，请勿刷新页面</div>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: "LoginStep4",
		data (){
			return {

			}
		},
		methods:{
			goto(){
				this.$router.push({path:"/"})
			}
		},
		created:function () {
			setTimeout(this.goto,900)
		}
	}
</script>

<style scoped>
	.success{
		color: #67c23a;
		font-size: 25px;
		text-decoration: none;
		margin: 5%;
	}
</style>