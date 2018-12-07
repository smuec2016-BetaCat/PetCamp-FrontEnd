<template>
	<el-form ref="form" :model="form" label-width="70px" style="margin: 5%">
		<error>
			<template slot="inputGroups">
				<el-form-item label="用户名">
					<el-input v-model.trim="$v.form.name.$model"></el-input>
				</el-form-item>
			</template>
			<template slot="errors">
				<div class="error" v-if="!$v.form.name.required && $v.form.name.$anyDirty">您必须填写用户名</div>
				<div class="error" v-if="!$v.form.name.minLength">账号至少{{ $v.form.name.$params.minLength.min }}位</div>
			</template>
		</error>
		<error>
			<template slot="inputGroups">
				<el-form-item label="密码" prop="pass">
					<el-input v-model.trim="$v.form.password1.$model" type="password"></el-input>
				</el-form-item>
			</template>
			<template slot="errors">
				<div class="error" v-if="!$v.form.password1.required && $v.form.password1.$anyDirty">您必须填写密码</div>
				<div class="error" v-if="$v.form.password1.$anyDirty && isSimplePassword && !(!$v.form.password1.required && $v.form.password1.$anyDirty)">
					密码过于简单, 必须包含数字、小写字母、大写字母、特殊字符其三
				</div>
			</template>
		</error>
		<error>
			<template slot="inputGroups">
				<el-form-item label="确认密码" prop="checkPass">
					<el-input v-model="$v.form.password2.$model" type="password"></el-input>
				</el-form-item>
			</template>
			<template slot="errors">
				<div class="error"  v-if="!$v.form.password2.sameAsPassword && $v.form.password2.$anyDirty">密码不一致</div>
			</template>
		</error>
		<error>
			<template slot="inputGroups">
				<el-form-item label="邮箱" prop="checkPass">
					<el-input v-model="$v.form.email.$model"></el-input>
				</el-form-item>
			</template>
			<template slot="errors">
				<div class="error" v-if="!$v.form.email.required && $v.form.email.$anyDirty">您必须填写邮箱</div>
				<div class="error" v-if="!$v.form.email.email">您必须填写正确的邮箱地址</div>
			</template>
		</error>
		<el-button type="warning" style="width: 100%;" @click="goto">立即注册</el-button>
	</el-form>
</template>

<script>
import axios from "axios"
import Error from "@/components/Login/error";
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
	name: "LoginStep3-1",
	components: {Error},
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
	validations:{
		form:{
			name:{
				required,
				minLength:minLength(6)
			},
			password1:{
				required
			},
			password2: {
				required,
				sameAsPassword:sameAs("password1")
			},
			email:{
				required,
				email
			}
		}
	},
	methods:{
		goto(){
			if (this.$v.$invalid) {
				this.$v.$touch()
			}
			else{
				axios.post("/api/v0/register", {
					username:this.name,
					password:this.password1
				})
					.then(response=> {
						this.status = response.status
						this.$message({
							message: 'Congrats, this is a success message.',
							type: 'success'
						})
						this.$router.push({path:"/Register/RegisterStep4"})
						this.$emit("listen",this.active)
					})
					.catch(error=> {
						this.$message.error(error.message);
					})
			}

		}
	},
	computed:{
		isSimplePassword(){
			let s = this.form.password1
			if(s.length<6){
				return true
			}
			else {
				let simple = 0
				if(s.match(/([a-z])+/)){
					simple++;
				}
				if(s.match(/([0-9])+/)){
					simple++;
				}
				if(s.match(/([A-Z])+/)){
					simple++;
				}
				if(s.match(/[^a-zA-Z0-9]+/)){
					simple++;
				}
				return simple<3
			}
		}
	}
}
</script>

<style scoped>
.error{
	bottom: 20px;
	position: absolute;
}
</style>