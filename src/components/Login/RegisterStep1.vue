<template>
	<div>
		<el-col class="MyMargin">
			<el-input placeholder="建议使用常用手机号" v-model="input5" class="input-with-select">
				<el-select v-model="select" slot="prepend" placeholder="Select" style="width: 100px">
					<el-option label="+86" value="1"></el-option>
					<el-option label="+62" value="2"></el-option>
				</el-select>
			</el-input>
		</el-col>
		<el-col class="MyMargin">
			<el-button type="danger" style="width: 100%" @click="goto">下一步</el-button>
		</el-col>
	</div>
</template>

<script>
export default {
	name: "LoginStep1",
	data (){
		return {
			input5:"",
			select:"+86",
			active:1
		}
	},
	methods:{
		goto(){
			this.$emit("listen",this.active)
			this.$router.push({path:"/Register/RegisterStep2"})
		}
	}
}
</script>

<style scoped>
.MyMargin{
	margin-top: 10%;
}
</style>