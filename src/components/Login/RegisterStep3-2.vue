<template>
	<el-form ref="form" :model="form" label-width="150px" style="margin-top: 5%">
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
		<error>
			<template slot="inputGroups">
				<el-form-item label="城市" prop="checkPass">
					<el-input  v-model="form.city"></el-input>
				</el-form-item>
			</template>
			<template slot="errors">

			</template>
		</error>
		<error>
			<template slot="inputGroups">
				<el-form-item label="地址" prop="checkPass">
					<el-input  v-model="form.address"></el-input>
				</el-form-item>
			</template>
			<template slot="errors">

			</template>
		</error>
		<error>
			<template slot="inputGroups">
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
			</template>
			<template slot="errors">
				<div class="error" v-if="!noClass && $v.form.desc.$anyDirty">您必须选择至少一种可寄养的宠物种类</div>
			</template>
		</error>
		<error>
			<template slot="inputGroups">
				<el-form-item label="详情">
					<el-input type="textarea" v-model="$v.form.desc.$model"></el-input>
				</el-form-item>
			</template>
			<template slot="errors">
				<div class="error" v-if="!$v.form.desc.required && $v.form.desc.$anyDirty">请填写店铺介绍</div>
				<div class="error" v-if="!$v.form.desc.minLength">店铺介绍至少需要{{ $v.form.desc.$params.minLength.min }}个字</div>
			</template>
		</error>
		<el-button type="danger" style="width: 100%" @click="goto">立即注册</el-button>
	</el-form>
</template>

<script>
import axios from 'axios'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import Error from "@/components/Login/error";
export default {
	name: "RegisterStep3-2",
	components: {Error},
	data (){
		return {
			form: {
				name: '',
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
			active:5,
			status:"",
			value: '',
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
			},
			desc:{
				required,
				minLength:minLength(20)
			}
		}
	},
	methods:{
		goto(){
			if (this.$v.$invalid) {
				this.$v.$touch()
				this.noClass()
			}
			else {
				axios.post("/api/v0/register", {
					username:this.form.name,
					password:this.form.password1,
					email:this.form.email,
					city:this.form.city,
					address:this.form.address,
					desc:this.form.desc
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
						this.$message.error(error.message);
					})
			}

		}
	},
	computed:{
		noClass() {
			return this.form.value1 || this.form.value2 || this.form.value3 || this.form.value4
		}
	}
}
</script>

<style scoped>
.error{
	position: absolute;
	bottom: 20px;
	margin-left: 15%;
}
</style>