<template>
	<el-row style="display: flex">
		<div id="LoginForm">
			<el-col>
				<div id="title">账户登录</div>
			</el-col>
			<el-col :span="20" :offset="2">
				<error>
					<template slot="inputGroups">
						<el-input placeholder="邮箱/用户名/已验证手机" v-model.trim="$v.UserName.$model" class="MyMargin">
							<template slot="prepend">
								<i class="el-icon-loading"></i>
							</template>
						</el-input>
					</template>
					<template slot="errors">
						<div class="error" v-if="!$v.UserName.required && $v.UserName.$anyDirty">您必须填写登录账号</div>
						<div class="error" v-if="!$v.UserName.minLength">账号至少{{ $v.UserName.$params.minLength.min }}位</div>
					</template>
				</error>
				<error style="margin-bottom: 10%">
					<template slot="inputGroups">
						<el-input placeholder="密码" v-model.trim="$v.Password.$model" class="MyMargin">
							<template slot="prepend">
								<i class="el-icon-loading"></i>
							</template>
						</el-input>
					</template>
					<template slot="errors">
						<div class="error" v-if="$v.Password.$anyDirty && isSimplePassword"  style="position: absolute;bottom: -22px;">
							密码过于简单, 必须包含数字、小写字母、<br>大写字母、特殊字符其三
						</div>
					</template>
				</error>
				<el-col class="MyMargin">
					<router-link to="" style="float: right;" class="link">忘记密码</router-link>
				</el-col>
				<el-col class="MyMargin">
					<el-button type="warning" style="width: 100%" @click="login">登录</el-button>
				</el-col>
				<el-col class="MyMargin">
					<router-link to="/Register/RegisterStep1" style="float: right" class="link">
						<i class="el-icon-caret-right"></i>立即注册
					</router-link>
				</el-col>
			</el-col>
		</div>
	</el-row>
</template>

<script>
import axios from 'axios'
import { required,minLength } from 'vuelidate/lib/validators'
import Error from "./error";
export default {
	name: "LoginBody",
	components: {Error},
	data (){
		return {
			input3:"",
			UserName:"",
			Password:"",
			token:""
		}
	},
	validations: {
		UserName: {
			required,
			minLength: minLength(6)
		},
		Password: {
			required,
		}
	},
	methods:{
		login(){
			if (this.$v.$invalid) {
				this.$v.$touch()
			}
			else {
				axios.post("/api/v0/auth",{
					username:this.UserName,
					password:this.Password
				})
					.then(response=>{
						this.token = response.data.token
						this.message({
							message:"login succeed",
							type:"success"
						})
						this.$router.push({path:"/"})
					})
					.catch(error=>{
						this.$message.error("如有问题，请联系我")
					})
			}
		}
	},
	computed:{
		isSimplePassword(){
			let s = this.Password
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
#title{
	font-weight: 700;
	color: #6A3906;
	padding: 20px;
	font-size: 22px;
}
#LoginForm{
	background-color: #fff;
	width: 400px;
	height:400px;
	z-index: 20;
	margin: auto;
	opacity: 0.85;
}
.MyMargin{
	margin-top: 15px;
}
.link{
	text-decoration: none;
}
.link:hover{
	text-decoration: #6A3906 underline;
	color: #6A3906;
}
</style>