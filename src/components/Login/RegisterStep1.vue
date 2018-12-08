<template>
	<el-col ref="grandson">
		<el-col class="MyMargin">
			<error>
				<template slot="inputGroups">
					<el-input placeholder="建议使用常用手机号" v-model="form.tel" class="input-with-select">
						<el-select v-model="select" slot="prepend" placeholder="Select" style="width: 100px">
							<el-option label="+86" value="1"></el-option>
							<el-option label="+62" value="2"></el-option>
						</el-select>
					</el-input>
				</template>
				<template slot="errors">
					<div v-if="!$v.form.tel.required && $v.form.tel.$anyDirty">您必须填写手机号</div>
					<div v-if="!$v.form.tel.minLength || !$v.form.tel.maxLength">手机号填写错误</div>
					<div v-if="!$v.form.tel.numeric" style="position: absolute;bottom: -22px">手机号必须为数字</div>
				</template>
			</error>
		</el-col>
		<el-col class="MyMargin">
			<el-button type="warning" style="width: 100%" @click="goto">下一步</el-button>
		</el-col>
	</el-col>
</template>

<script>
import { required,minLength ,maxLength,numeric} from 'vuelidate/lib/validators'
import Error from "./error";
export default {
	name: "LoginStep1",
	components: {Error},
	data (){
		return {
			select:"+86",
			form:{
				active:1,
				tel:null
			}
		}
	},
	validations: {
		form:{
			tel: {
				required,
				minLength: minLength(11),
				maxLength: maxLength(11),
				numeric
			}
		}
	},
	methods:{
		goto(){
			if (this.$v.$invalid) {
				this.$v.$touch()
			}
			else{
				this.$emit("listen",this.form)
				this.$router.push({path:"/Register/RegisterStep2"})
			}

		}
	}
}
</script>

<style scoped>
.MyMargin{
	margin-top: 10%;
}
</style>