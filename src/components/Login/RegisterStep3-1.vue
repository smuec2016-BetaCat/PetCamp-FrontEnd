<template>
	<el-form ref="form" :model="form" label-width="70px" style="margin-top: 5%">
		<el-form-item label="用户名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="pass">
			<el-input v-model="form.password1" type="password"></el-input>
		</el-form-item>
		<el-form-item label="确认密码" prop="checkPass">
			<el-input v-model="form.password2" type="password"></el-input>
		</el-form-item>
		<el-form-item label="邮箱" prop="checkPass">
			<el-input v-model="form.email"></el-input>
		</el-form-item>
		<el-button type="danger" style="width: 100%" @click="goto">立即注册</el-button>
	</el-form>
</template>

<script>
import axios from "axios"
export default {
	name: "LoginStep3-1",
	data (){
		return {
			form: {
				name: '',
				password1:"",
				password2:"",
				email:""
			},
			active:4,
			status:""
		}
	},
	methods:{
		goto(){
			axios.post("/api/v0/register", {
				username:this.name,
				password:this.password1
			})
				.then(response=> {
					this.status = response.data.msg
					this.$message({
						message: 'Congrats, this is a success message.',
						type: 'success'
					})
					this.$router.push({path:"/Register/RegisterStep4"})
					this.$emit("listen",this.active)
				})
				.catch(error=> {
					this.$message.error(error);
				})
		}
	}
}
</script>

<style scoped>

</style>