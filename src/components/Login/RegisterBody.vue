<template>
	<div>
		<el-row style="display: flex">
			<el-col :span="10" style="margin: auto">
				<el-col id="step">
					<el-steps :space="200" :active="active" finish-status="success" align-center>
						<el-step title="验证手机号"></el-step>
						<el-step title="选择用户类别"></el-step>
						<el-step title="填写账号信息"></el-step>
						<el-step title="注册成功"></el-step>
					</el-steps>
				</el-col>
				<el-col :span="20" :offset="2">
					<router-view v-on:listen="changeActive"></router-view>
				</el-col>
			</el-col>
		</el-row>
	</div>

</template>

<script>
export default {
	name: "RegisterBody",
	data (){
		return {
			active:0,
			select: '+86',
			input5: ''
		}
	},
	methods:{
		changeActive:function (data) {
			this.active = data
		}
	}
}
</script>

<style scoped>
#step{
	margin-top: 25%;
}
</style>