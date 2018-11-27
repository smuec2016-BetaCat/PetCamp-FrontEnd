<template>
	<el-row>
		<el-col style="display: flex;background-color: #780701">
			<el-col id="banner" :span="19"></el-col>
		</el-col>
		<div id="LoginForm">
			<el-col>
				<div id="title">账户登录</div>
			</el-col>
			<el-col :span="20" :offset="2">
				<el-input placeholder="邮箱/用户名/已验证手机" v-model="input3" class="MyMargin">
					<template slot="prepend">
						<i class="el-icon-loading"></i>
					</template>
				</el-input>
				<el-input placeholder="密码" v-model="input3" class="MyMargin">
					<template slot="prepend">
						<i class="el-icon-loading"></i>
					</template>
				</el-input>
				<el-col class="MyMargin">
					<router-link to="" style="float: right">忘记密码</router-link>
				</el-col>
				<el-col class="MyMargin">
					<el-button type="danger" style="width: 100%">登录</el-button>
				</el-col>
				<el-col class="MyMargin">
					<router-link to="" style="float: right">
						<i class="el-icon-caret-right"></i>立即注册
					</router-link>
				</el-col>
			</el-col>
		</div>
	</el-row>
</template>

<script>
export default {
	name: "LoginBody",
	data (){
		return {
			input3:""
		}
	}
}
</script>

<style scoped>
#title{
	font-weight: 700;
	color: #e4393c;
	padding: 20px;
	font-size: 22px;
}
#banner{
	background: url(//img13.360buyimg.com/da/jfs/t28450/179/586923643/72805/d0fc7270/5bf76417N8cb09987.jpg) 0 0 no-repeat;
	height: 475px;
	margin: auto;
}
#LoginForm{
	background-color: #fff;
	width: 350px;
	height:380px;
	position: absolute;
	z-index: 20;
	right: 10%;
	margin: 48px 35px;
}
.MyMargin{
	margin-top: 20px;
}
</style>