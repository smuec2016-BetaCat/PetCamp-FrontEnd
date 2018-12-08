<template>
	<div style="color: #6A3906;">
		<el-col :md="{offset:4,span:16}" :xs="{offset:1,span:22}">
			<el-card style="margin-bottom: 50px;border-radius: 15px;box-shadow: 0 7px 10px 5px #eeeeee;">
				<h2>预约寄养</h2>
				<el-form :model="form" style="text-align:left;" class="hidden-xs-only">
					<el-form-item label="宠物昵称" :label-width="formLabelWidth" style="width: 70%">
						<el-input v-model="form.pet_name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="宠物性别" :label-width="formLabelWidth">
						<el-radio-group v-model="form.sex">
							<el-radio label="公"></el-radio>
							<el-radio label="母"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="宠物类型" :label-width="formLabelWidth" style="width: 70%">
						<el-select v-model="form.species" placeholder="Please select a zone" style="width: 100%">
							<el-option label="狗" value="狗"></el-option>
							<el-option label="猫" value="猫	"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="宠物年龄" :label-width="formLabelWidth" style="width: 70%">
						<el-input v-model="form.age"></el-input>
					</el-form-item>
					<el-form-item label="宠物体重" :label-width="formLabelWidth" style="width: 70%">
						<el-input v-model="form.weight"></el-input>
					</el-form-item>
					<el-form-item label="是否绝育" :label-width="formLabelWidth">
						<el-radio-group v-model="form.sterilization">
							<el-radio label=true></el-radio>
							<el-radio label=false></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA是调皮鬼吗？" :label-width="formLabelWidth">
						<el-radio-group v-model="form.naughty">
							<el-radio label=true></el-radio>
							<el-radio label=false></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA胆子特别小吗？" :label-width="formLabelWidth">
						<el-radio-group v-model="form.shy">
							<el-radio label=true></el-radio>
							<el-radio label=false></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA与其他伙伴好相处吗？" :label-width="formLabelWidth">
						<el-radio-group v-model="form.friendly">
							<el-radio label=true></el-radio>
							<el-radio label=false></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="请选择需要寄养的时间" :label-width="formLabelWidth">
						<el-date-picker style="width: 100%" v-model="form.date" type="datetimerange" range-separator="To" start-placeholder="Start date" end-placeholder="End date"></el-date-picker>
					</el-form-item>
					<el-form-item label="宠物简介" :label-width="formLabelWidth">
						<el-input type="textarea" v-model="form.comment"></el-input>
					</el-form-item>
					<!--<el-form-item>-->
						<!--<el-upload-->
								<!--class="upload-demo"-->
								<!--drag-->
								<!--action=""-->
								<!--:auto-upload="false"-->
								<!--multiple>-->
							<!--<i class="el-icon-upload"></i>-->
							<!--<div class="el-upload__text">拖动图片或 <em>点击上传宠物图片</em></div>-->
							<!--<div class="el-upload__tip" slot="tip" style="text-align: center">jpg/png图片小于500kb</div>-->
						<!--</el-upload>-->
					<!--</el-form-item>-->
				</el-form>
				<el-form :model="form" style="text-align:left;" class="hidden-sm-and-up">
					<el-form-item label="宠物昵称" style="width: 70%">
						<el-input v-model="form.pet_name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="宠物性别">
						<el-radio-group v-model="form.sex">
							<el-radio label="公"></el-radio>
							<el-radio label="母"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="宠物类型" style="width: 70%">
						<el-select v-model="form.species" placeholder="Please select a zone" style="width: 100%">
							<el-option label="狗" value="狗"></el-option>
							<el-option label="猫" value="猫"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="宠物年龄" style="width: 70%">
						<el-input v-model="form.age"></el-input>
					</el-form-item>
					<el-form-item label="宠物体重" style="width: 70%">
						<el-input v-model="form.weight"></el-input>
					</el-form-item>
					<el-form-item label="是否绝育">
						<el-radio-group v-model="form.sterilization">
							<el-radio label=true></el-radio>
							<el-radio label=false></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA是调皮鬼吗？">
						<el-radio-group v-model="form.naughty">
							<el-radio label=true></el-radio>
							<el-radio label=false></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA胆子特别小吗？">
						<el-radio-group v-model="form.shy">
							<el-radio label=true></el-radio>
							<el-radio label=false></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA与其他伙伴好相处吗？">
						<el-radio-group v-model="form.friendly">
							<el-radio label=true></el-radio>
							<el-radio label=false></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="请选择需要寄养的时间">
						<el-date-picker style="width: 100%" v-model="form.date" type="datetimerange" range-separator="To" start-placeholder="Start date" end-placeholder="End date"></el-date-picker>
					</el-form-item>
					<el-form-item label="宠物简介">
						<el-input type="textarea" v-model="form.comment"></el-input>
					</el-form-item>
					<el-form-item>
						<el-upload
								class="upload-demo"
								drag
								action=""
								:auto-upload="false"
								multiple>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">拖动图片或 <em>点击上传宠物图片</em></div>
							<div class="el-upload__tip" slot="tip" style="text-align: center">jpg/png图片小于500kb</div>
						</el-upload>
					</el-form-item>
				</el-form>
				<el-col style="margin-bottom: 20px">
					<el-button type="primary" @click="addToCart">提交表单</el-button>
				</el-col>
			</el-card>

		</el-col>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: "FosterForm",
	data(){
		return{
			formLabelWidth: '250px',
			form: {
				species: "",
				pet_name: "",
				age:null,
				weight: null,
				date:"",
				sterilization: null,
				naughty:null,
				shy: null,
				friendly: null,
				comment: "aaaaaaa",
				agency_id: 1,
				user_id: 1,
				image_names: ["order_test1"],
				sex:""
			},
			ord_num:null
		}
	},
	methods:{
		addToCart(){
			let a = {
				species:this.form.species,
				pet_name: this.form.pet_name,
				age: this.form.age,
				weight :this.form.weight,
				expiration: (this.form.date[1]-this.form.date[0])/360000/24,
				sterilization: this.form.sterilization,
				naughty:this.form.naughty,
				shy:this.form.shy,
				friendly: this.form.friendly,
				comment: this.form.comment,
				price: 1000,
				agency_id: 1,
				user_id: 1,
				image_names: ["order_test1"]
			}
			let map = {
				"true" : true,
				"false" : false,
				"null" : null
			}
			for(let arg of ["naughty","shy","friendly","sterilization"]){
				if (a[arg] in map){
					a[arg] = map[a[arg]]
				}
			}
			axios.post('/api/v0/cart',a)
					.then(response=>{
						this.ord_num = response.data.ord_num
						this.$message.success("your ord_num is " + this.ord_num)
					})
					.catch(error=>{
						this.$message.success("please contact with me"+error.message.data.error)
					})
		}
	}
}
</script>

<style scoped>

</style>