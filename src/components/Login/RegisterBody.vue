<template>
	<div ref="son">
		<el-row style="display: flex">
			<el-col :md="10" :xs="24" style="margin: auto">
				<el-col id="step">
					<el-steps :space="200" :active="active" finish-status="success" align-center>
						<el-step title="验证手机号"></el-step>
						<el-step title="选择用户类别"></el-step>
						<el-step title="填写账号信息"></el-step>
						<el-step title="注册成功"></el-step>
					</el-steps>
				</el-col>
				<el-col :span="20" :offset="2">
					<transition name="slide-fade" mode="out-in">
						<router-view v-on:listen="changeActive" :tel=this.tel></router-view>
					</transition>
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
			input5: '',
			tel:null
		}
	},
	methods:{
		changeActive:function (data) {
			this.active = data.active
			this.tel = data.tel
		}
	}
}
</script>

<style scoped>
#step{
	margin-top: 25%;
}
.slide-fade-enter-active {
	transition: all .3s ease;
}
.slide-fade-leave-active {
	transition: all .3s ease;
}
.slide-fade-enter {
	transform: translateX(10px);
	opacity: 0;
}
.slide-fade-leave-to{
	transform: translateX(-10px);
	opacity: 0;
}
</style>