<template>
	<div style="color: #6A3906;">
		<el-col :md="{offset:4,span:16}" :xs="{offset:1,span:22}">
			<el-card style="margin-bottom: 50px;border-radius: 15px;box-shadow: 0 7px 10px 5px #eeeeee;">
				<h2>预约寄养</h2>
				<el-form :model="form" style="text-align:left;" class="hidden-xs-only">
					<el-form-item label="宠物昵称" :label-width="formLabelWidth" style="width: 70%">
						<el-input v-model="form.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="宠物性别" :label-width="formLabelWidth">
						<el-radio-group v-model="form.sex">
							<el-radio label="公"></el-radio>
							<el-radio label="母"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="宠物类型" :label-width="formLabelWidth" style="width: 70%">
						<el-select v-model="form.type" placeholder="Please select a zone" style="width: 100%">
							<el-option label="狗" value="shanghai"></el-option>
							<el-option label="猫" value="beijing"></el-option>
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
							<el-radio label="是"></el-radio>
							<el-radio label="否"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA是调皮鬼吗？" :label-width="formLabelWidth">
						<el-radio-group v-model="form.naughty">
							<el-radio label="是"></el-radio>
							<el-radio label="不是"></el-radio>
							<el-radio label="不确定"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA胆子特别小吗？" :label-width="formLabelWidth">
						<el-radio-group v-model="form.timid">
							<el-radio label="是"></el-radio>
							<el-radio label="不是"></el-radio>
							<el-radio label="不确定"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA与其他伙伴好相处吗？" :label-width="formLabelWidth">
						<el-radio-group v-model="form.friends">
							<el-radio label="是"></el-radio>
							<el-radio label="不是"></el-radio>
							<el-radio label="不确定"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="请选择需要寄养的时间" :label-width="formLabelWidth">
						<el-date-picker style="width: 100%" v-model="form.date" type="datetimerange" range-separator="To" start-placeholder="Start date" end-placeholder="End date"></el-date-picker>
					</el-form-item>
					<el-form-item label="宠物简介" :label-width="formLabelWidth">
						<el-input type="textarea" v-model="form.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-upload
								class="upload-demo"
								drag
								action=""
								:on-preview="handlePreview"
								:before-remove="beforeRemove"
								:on-change="handleChange"
								:file-list="fileList"
								:auto-upload="false"
								multiple>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">拖动图片或 <em>点击上传宠物图片</em></div>
							<div class="el-upload__tip" slot="tip" style="text-align: center">jpg/png图片小于500kb</div>
						</el-upload>
					</el-form-item>
				</el-form>
				<el-form :model="form" style="text-align:left;" class="hidden-sm-and-up">
					<el-form-item label="宠物昵称" style="width: 70%">
						<el-input v-model="form.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="宠物性别">
						<el-radio-group v-model="form.sex">
							<el-radio label="公"></el-radio>
							<el-radio label="母"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="宠物类型" style="width: 70%">
						<el-select v-model="form.type" placeholder="Please select a zone" style="width: 100%">
							<el-option label="狗" value="shanghai"></el-option>
							<el-option label="猫" value="beijing"></el-option>
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
							<el-radio label="是"></el-radio>
							<el-radio label="否"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA是调皮鬼吗？">
						<el-radio-group v-model="form.naughty">
							<el-radio label="是"></el-radio>
							<el-radio label="不是"></el-radio>
							<el-radio label="不确定"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA胆子特别小吗？">
						<el-radio-group v-model="form.timid">
							<el-radio label="是"></el-radio>
							<el-radio label="不是"></el-radio>
							<el-radio label="不确定"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="TA与其他伙伴好相处吗？">
						<el-radio-group v-model="form.friends">
							<el-radio label="是"></el-radio>
							<el-radio label="不是"></el-radio>
							<el-radio label="不确定"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="请选择需要寄养的时间">
						<el-date-picker style="width: 100%" v-model="form.date" type="datetimerange" range-separator="To" start-placeholder="Start date" end-placeholder="End date"></el-date-picker>
					</el-form-item>
					<el-form-item label="宠物简介">
						<el-input type="textarea" v-model="form.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-upload
								class="upload-demo"
								drag
								action=""
								:on-preview="handlePreview"
								:before-remove="beforeRemove"
								:on-change="handleChange"
								:file-list="fileList"
								:auto-upload="false"
								multiple>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">拖动图片或 <em>点击上传宠物图片</em></div>
							<div class="el-upload__tip" slot="tip" style="text-align: center">jpg/png图片小于500kb</div>
						</el-upload>
					</el-form-item>
				</el-form>
				<el-col style="margin-bottom: 20px">
					<el-button type="primary" @click="dialogFormVisible = false">提交表单</el-button>
				</el-col>
			</el-card>

		</el-col>
	</div>
</template>

<script>
export default {
	name: "FosterForm",
	data(){
		return{
			formLabelWidth: '250px',
			form: {

			},
		}
	}
}
</script>

<style scoped>

</style>