<template>
	<el-form ref="form" :model="form" label-width="70px" style="margin-top: 5%">
		<el-col>
			<el-form-item label="用户类别" style="margin: 10% 0;">
				<el-radio-group v-model="form.class">
					<el-radio label="注册普通用户"></el-radio>
					<el-radio label="注册机构/商户"></el-radio>
				</el-radio-group>
			</el-form-item>
		</el-col>
		<el-button type="danger" style="width: 100%" @click="goto">下一步</el-button>
	</el-form>
</template>

<script>
export default {
	name: "RegisterStep2",
	data(){
		return{
			active:2,
			form:{
				class:""
			}
		}
	},
	methods:{
		goto(){
			if(this.form.class === "注册普通用户"){
				this.$router.push({path:"/Register/RegisterStep3a"})
				this.$emit("listen",this.active)
			}
			else if (this.form.class === "注册机构/商户") {
				this.$router.push({path:"/Register/RegisterStep3b"})
				this.$emit("listen",this.active)
			}
			else {
				this.$message.error('请选择您要注册的类别')
			}
		}
	}
}
</script>

<style scoped>

</style>