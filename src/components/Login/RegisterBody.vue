<template>
	<div>
		<el-row style="display: flex">
			<el-col :span="12" style="margin: auto">
				<el-col id="step">
					<el-steps :space="200" :active="0" finish-status="success" align-center>
						<el-step title="验证手机号"></el-step>
						<el-step title="填写账号信息"></el-step>
						<el-step title="注册成功"></el-step>
					</el-steps>
				</el-col>
				<el-col :span="18" :offset="3">
					<el-col class="MyMargin">
						<el-input placeholder="建议使用常用手机号" v-model="input5" class="input-with-select">
							<el-select v-model="select" slot="prepend" placeholder="Select" style="width: 100px">
								<el-option label="+86" value="1"></el-option>
								<el-option label="+62" value="2"></el-option>
							</el-select>
							<el-button slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</el-col>
					<el-col class="MyMargin">
						<el-button type="danger" style="width: 100%">下一步</el-button>
					</el-col>
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
			active:3,
			select: '+86',
			input5: ''
		}
	}
}
</script>

<style scoped>
#step{
	margin-top: 25%;
}
.MyMargin{
	margin-top: 10%;
}
</style>