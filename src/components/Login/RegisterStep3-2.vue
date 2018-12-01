<template>
	<el-form ref="form" :model="form" label-width="150px" style="margin-top: 5%">
		<el-form-item label="用户名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="pass">
			<el-input type="password"></el-input>
		</el-form-item>
		<el-form-item label="确认密码" prop="checkPass">
			<el-input type="password"></el-input>
		</el-form-item>
		<el-form-item label="邮箱" prop="checkPass">
			<el-input></el-input>
		</el-form-item>
		<el-form-item label="城市" prop="checkPass">
			<el-select v-model="value" placeholder="Select" style="width: 100%">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="地址" prop="checkPass">
			<el-input></el-input>
		</el-form-item>
		<el-form-item label="寄养种类" prop="checkPass">
			<el-checkbox v-model="form.value1">可寄养的猫猫容量 ：</el-checkbox>
			<el-input-number size="mini" v-model="form.num1" :min="0" :disabled="!form.value1"></el-input-number>
			<el-checkbox v-model="form.value2">可寄养的狗狗容量 ：</el-checkbox>
			<el-input-number size="mini" v-model="form.num2" :min="0" :disabled="!form.value2"></el-input-number>
			<el-checkbox v-model="form.value3">可寄养的乌龟容量 ：</el-checkbox>
			<el-input-number size="mini" v-model="form.num3" :min="0" :disabled="!form.value3"></el-input-number>
		</el-form-item>
		<el-form-item label="详情">
			<el-input type="textarea" v-model="form.desc"></el-input>
		</el-form-item>
		<el-button type="danger" style="width: 100%" @click="goto">立即注册</el-button>
	</el-form>
</template>

<script>
export default {
	name: "RegisterStep3-2",
	data (){
		return {
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: '',
				num1:0,
				num2:0,
				num3:0,
				value1:false,
				value2:false,
				value3:false
			},
			active:4,
			options: [{
				value: 'Option1',
				label: 'Option1'
			}, {
				value: 'Option2',
				label: 'Option2'
			}, {
				value: 'Option3',
				label: 'Option3'
			}, {
				value: 'Option4',
				label: 'Option4'
			}, {
				value: 'Option5',
				label: 'Option5'
			}],
			value: ''
		}
	},
	methods:{
		goto(){
			this.$emit("listen",this.active)
			this.$router.push({path:"/Register/RegisterStep4"})
		}
	}
}
</script>

<style scoped>

</style>