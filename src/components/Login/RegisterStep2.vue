<template>
	<el-form ref="form" :model="form" label-width="70px" style="margin-top: 5%">
		<el-form-item label="用户名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="pass">
			<el-input type="password"></el-input>
		</el-form-item>
		<el-form-item label="确认密码" prop="checkPass">
			<el-input type="password"></el-input>
		</el-form-item>
		<el-form-item label="邮箱" prop="checkPass">
			<el-input type="password"></el-input>
		</el-form-item>
		<el-button type="danger" style="width: 100%" @click="goto">立即注册</el-button>
	</el-form>
</template>

<script>
export default {
	name: "LoginStep2",
	data (){
		return {
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			active:3
		}
	},
	methods:{
		goto(){
			this.$emit("listen",this.active)
			this.$router.push({path:"/Register/RegisterStep3"})
		}
	}

}
</script>

<style scoped>

</style>