<template>
	<div>
		<!--这个组件存在bug，需要纯手撸-->
		<div style="margin-bottom: 5%;overflow: hidden">
			<div style="margin-left: 8.333333%;width: 400px;float: left">
				<div id="zoom">
					<pic-zoom :url="myImgUrl" :scale="2.5"></pic-zoom>
				</div>
				<el-row>
					<el-col :span="6" v-for="i in img" :key="i.id" style="height: 100px;display: flex">
						<el-button style="padding: 5px;margin: auto;height: 95px" @mouseover.native="changeMyImage(i.id)">
							<el-card :body-style="{ padding: '0px' }" shadow="hover" >
								<img :src="i.url" alt="">
							</el-card>
						</el-button>
					</el-col>
				</el-row>
			</div>
			<div style="margin-right: 8.333333%;float: left;width:43.66666%">
				<el-row style="text-align: left" id="right">
					<el-col :span="20" :offset="2">
						<el-col>
							<span id="introduce">宠物寄养</span>
						</el-col>
						<el-col>
							<el-col :span="12" style="margin-bottom: 0">
								<el-rate
										v-model="value"
										disabled
										show-score
										text-color="#ff9900"
										score-template="{value} points">
								</el-rate>
							</el-col>
							<el-col :span="12" style="margin-bottom: 0">
								<span>(100位顾客已浏览)</span>
							</el-col>
						</el-col>
						<el-col>
							<p style="margin:0">寄养服务</p>
							<el-col :span="6">
								<h5 style="margin: 10px 0">小型犬</h5>
								<h5 style="margin: 10px 0">猫</h5>
							</el-col>
							<el-col :span="18">
								<h5 style="margin: 10px 0">￥98.00/晚</h5>
								<h5 style="margin: 10px 0">￥78.00/晚</h5>
							</el-col>

							<span v-text="introduction"></span>
						</el-col>
						<el-col>
						<span>
							<i class="el-icon-circle-check-outline"></i>
							剩余5条狗狗的寄养空间
						</span>
						</el-col>
						<el-col>
							<el-col :span="12" style="margin-bottom: 0">
								<el-button type="success" icon="el-icon-goods" @click="dialogFormVisible = true">立即下单</el-button>
							</el-col>
						</el-col>
					</el-col>
				</el-row>
			</div>
		</div>
		<el-dialog title="预约寄养" :visible.sync="dialogFormVisible">
			<el-form :model="form" style="text-align:left;margin: 0 5%">
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
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">立即寄养</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import PicZoom from 'vue-piczoom'
import axios from 'axios'
export default {
	name: "ProductDescriptionPage",
	components: { PicZoom },
	data (){
	return {
		value:3.5,
		introduction:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
		num8:1,
		myImgUrl: "",
		img:[
			{id:0,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/230px-Cat03.jpg"},
			{id:1,url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike60%2C5%2C5%2C60%2C20/sign=4058d79e0ef41bd5ce5ee0a630b3eaae/730e0cf3d7ca7bcb3700f79abe096b63f624a80f.jpg"},
			{id:2,url:"https://imgsa.baidu.com/baike/pic/item/00e93901213fb80e2f604bc43dd12f2eb938946b.jpg"},
			{id:3,url:"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1fbc3a8edaa20cf4529df68d17602053/1ad5ad6eddc451dac7f5b1e2bcfd5266d01632b3.jpg"}
		],
		dialogFormVisible: false,
		form: {

		},
		formLabelWidth: '180px',
		value4:"",
		fileList:[]
		}
	},
	methods:{
		changeMyImage(key){
			this.myImgUrl = this.img[key].url
		},
		initMyImage(){
			this.myImgUrl = this.img[0].url
		},
		handlePreview(file) {
			console.log(file);
			console.log(this.fileList)
		},
		handleChange(file) {
			let formData = new FormData()
			formData.append("name",file.name)
			formData.append("name",file)
			// axios.post('url',{formData})
			// 	.then(response=>{
					
			// 	})
			// 	.catch(error=>{this.$message.error(error.data)})
		},
		hello(event){
			console.log(event)
		},
		beforeRemove(file) {
			return this.$confirm(`确定移除 ${ file.name }？`);
		},
		reservation(){
			axios.post('/',{

			})
				.then(response=>{

					this.message({
						message:response.data,
						type:"success"
					})
				})
				.catch(error=>{
					this.$message.error(error.data)
				})
		}
	},
	created:function () {
		this.initMyImage()
	}
}
</script>

<style scoped>
img{
	width: 100%;
	height: 100%;
}
#zoom{
	width: 400px;
	height: 400px;
}
#introduce{
	color: #555;
	font-size: 28px;
}
#right div{
	margin-bottom: 5%;
}
#price{
	text-decoration: line-through;
	margin-right: 20px;
}
#address{
	margin-right: 5%;
}
</style>