<template>
	<el-form ref="form" :model="form" label-width="150px" style="margin-top: 5%">
		<el-form-item label="用户名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="pass">
			<el-input type="password"  v-model="form.password"></el-input>
		</el-form-item>
		<el-form-item label="确认密码" prop="checkPass">
			<el-input type="password"  v-model="form.password"></el-input>
		</el-form-item>
		<el-form-item label="邮箱" prop="checkPass">
			<el-input  v-model="form.email"></el-input>
		</el-form-item>
		<el-form-item label="城市" prop="checkPass">
			<el-input  v-model="form.city"></el-input>
		</el-form-item>
		<el-form-item label="地址" prop="checkPass">
			<el-input  v-model="form.address"></el-input>
		</el-form-item>
		<el-form-item label="寄养种类" prop="checkPass">
			<el-checkbox v-model="form.value1">可寄养的猫猫容量 ：</el-checkbox>
			<el-input-number size="mini" v-model="form.num1" :min="1" :disabled="!form.value1"></el-input-number>
			<el-checkbox v-model="form.value2">可寄养的狗狗容量 ：</el-checkbox>
			<el-input-number size="mini" v-model="form.num2" :min="1" :disabled="!form.value2"></el-input-number>
			<el-checkbox v-model="form.value3">可寄养的乌龟容量 ：</el-checkbox>
			<el-input-number size="mini" v-model="form.num3" :min="1" :disabled="!form.value3"></el-input-number>
			<el-checkbox v-model="form.value4">可寄养的仓鼠容量 ：</el-checkbox>
			<el-input-number size="mini" v-model="form.num4" :min="1" :disabled="!form.value4"></el-input-number>
		</el-form-item>
		<el-form-item label="详情">
			<el-input type="textarea" v-model="form.desc"></el-input>
		</el-form-item>
		<el-button type="danger" style="width: 100%" @click="goto">立即注册</el-button>
	</el-form>
</template>

<script>
import axios from 'axios'
export default {
	name: "RegisterStep3-2",
	data (){
		return {
			form: {
				name:"",
				password1:"",
				password2:"",
				email:"",
				city:"",
				address:"",
				desc: '',
				num1:0,
				num2:0,
				num3:0,
				num4:0,
				value1:false,
				value2:false,
				value3:false,
				value4:false
			},
			active:4,
			status:"",
			value: ''
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