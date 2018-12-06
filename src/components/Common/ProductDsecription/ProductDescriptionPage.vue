<template>
	<div>
		<!--这个组件存在bug，需要纯手撸-->
		<!--pc-->
		<div style="margin-bottom: 5%;overflow: hidden" class="hidden-xs-only">
			<div style="margin-left: 8.333333%;width: 400px;float: left">
				<div id="zoom">
					<pic-zoom :url="message.myImgUrl" :scale="2.5"></pic-zoom>
				</div>
				<el-row>
					<el-col :span="6" v-for="i in message.img" :key="i.id" style="height: 100px;display: flex">
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
					<el-col :span="20" :offset="4" style="color:#6A3906;">
						<el-col style="padding-left: 10px">
							<strong id="introduce">PetCamp</strong>
							<span style="font-size: 20px" v-text="message.shopName"></span>
						</el-col>
						<el-col style="padding-left: 10px">
							<el-col :span="12" style="margin-bottom: 0">
								<el-rate
										v-model="message.value"
										disabled
										show-score
										text-color="#ff9900"
										score-template="{value} points">
								</el-rate>
							</el-col>
							<el-col :span="12" style="margin-bottom: 0">
								<span v-text="message.num" style="margin-right: 10px"></span>
								<span>位顾客已浏览</span>
							</el-col>
						</el-col>
						<el-col>
							<el-card shadow="always" style="border-radius: 10px;background-color:rgba(245,222,179,0.18);color: #6A3906" :body-style="{ padding: '0px' }">
								<el-col style="display: flex;box-shadow: rgba(215,178,130,0.49) 1px 1px 1px">
									<el-col :span="14" style="margin: auto">
										<h4 style="margin:10px 0 10px 10px">寄养服务</h4>
									</el-col>
									<el-col :span="10" style="margin: auto">
										<span>
											<i class="el-icon-circle-check-outline"></i>
											剩余{{message.capacity}}条狗狗的寄养空间
										</span>
									</el-col>
								</el-col>
								<el-col :span="6" style="padding-left: 10px">
									<h4 style="margin: 10px 0">小型犬</h4>
									<h4 style="margin: 10px 0">猫</h4>
								</el-col>
								<el-col :span="18">
									<h4 style="margin: 10px 0">￥98.00/晚</h4>
									<h4 style="margin: 10px 0">￥78.00/晚</h4>
								</el-col>
								<el-col style="padding: 0 10px">
									<strong style="margin-right: 10px">简介：</strong>
									<span v-text="message.introduction" style="font-size: 0.9em;line-height: 2em;"></span>
								</el-col>
							</el-card>
						</el-col>
						<el-col>
							<el-col :span="12" style="margin-bottom: 0">
								<el-button type="warning" plain round icon="el-icon-goods" @click="dialogFormVisible = true">我要寄养</el-button>
							</el-col>
						</el-col>
					</el-col>
				</el-row>
			</div>
		</div>
		<!--mobile-->
		<el-row class="hidden-sm-and-up">
			<el-col>
				<el-card shadow="always" class="mobile-card" :body-style="{ padding: '0px' }">
					<el-col>
						<el-carousel trigger="click">
							<el-carousel-item v-for="item in message.img" :key="item.id">
								<img :src="item.url" alt="">
							</el-carousel-item>
						</el-carousel>
					</el-col>
					<el-col style="display: flex;box-shadow: rgba(215,178,130,0.49) 1px 1px 1px">
						<el-col style="margin: auto">
							<h4 style="margin:10px 0 10px 10px">寄养服务</h4>
						</el-col>
						<el-col style="margin: auto">
							<span>
								<i class="el-icon-circle-check-outline"></i>
								剩余{{message.capacity}}条狗狗的寄养空间
							</span>
						</el-col>
					</el-col>
					<el-col :span="6" style="padding-left: 10px">
						<h4 style="margin: 10px 0">小型犬</h4>
						<h4 style="margin: 10px 0">猫</h4>
					</el-col>
					<el-col :span="18">
						<h4 style="margin: 10px 0">￥98.00/晚</h4>
						<h4 style="margin: 10px 0">￥78.00/晚</h4>
					</el-col>
					<el-col style="padding: 0 10px">
						<strong style="margin-right: 10px">简介：</strong>
						<span v-text="message.introduction" style="font-size: 0.9em;line-height: 2em;"></span>
					</el-col>
				</el-card>
			</el-col>
			<!--footer-->
			<el-col class="cartBottom">
				<el-col :span="6">
					<NavBottomButton :myClass="bottomList[0]" :url="myUrl[0]">
						<template slot="text">联系客服</template>
					</NavBottomButton>
				</el-col>
				<el-col :span="6">
					<NavBottomButton :myClass="bottomList[1]" :url="myUrl[1]">
						<template slot="text">店铺</template>
					</NavBottomButton>
				</el-col>
				<el-col :span="6">
					<NavBottomButton :myClass="bottomList[2]" :url="myUrl[2]">
						<template slot="text">购物车</template>
					</NavBottomButton>
				</el-col>
				<el-col :span="6">
					<NavBottomButton :myClass="bottomList[3]" :url="myUrl[3]">
						<template slot="text">我要寄养</template>
					</NavBottomButton>
				</el-col>
			</el-col>
		</el-row>
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
import NavBottomButton from "../NavBottomButton";
export default {
	name: "ProductDescriptionPage",
	components: {NavBottomButton, PicZoom },
	data (){
	return {
		message:{
			shopName:"宠物训练营",
			capacity:5,
			num:10482084,
			value:3.5,
			introduction:"欢迎来到宠物训练营，在这里您可以放心寄养您的宠物，他们会在这里得到细心的照料。他们会找到可以一起玩耍的伙伴，在这里度过一个愉快的假期。我们会给他们按摩，洗澡，训练，不让他们感到孤单失落。",
			myImgUrl: "",
			img:[
				{id:0,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/230px-Cat03.jpg"},
				{id:1,url:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike60%2C5%2C5%2C60%2C20/sign=4058d79e0ef41bd5ce5ee0a630b3eaae/730e0cf3d7ca7bcb3700f79abe096b63f624a80f.jpg"},
				{id:2,url:"https://imgsa.baidu.com/baike/pic/item/00e93901213fb80e2f604bc43dd12f2eb938946b.jpg"},
				{id:3,url:"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1fbc3a8edaa20cf4529df68d17602053/1ad5ad6eddc451dac7f5b1e2bcfd5266d01632b3.jpg"}
			],
		},

		dialogFormVisible: false,
		form: {

		},
		formLabelWidth: '180px',
		fileList:[],
		bottomList:["el-icon-service","el-icon-location-outline","el-icon-goods","el-icon-bell"],
		myUrl:["/","/PurchasePage/ProductComments","/ShoppingList","/ShoppingList"]
		}

	},
	methods:{
		changeMyImage(key){
			this.message.myImgUrl = this.message.img[key].url
		},
		initMyImage(){
			this.message.myImgUrl = this.message.img[0].url
		},
		handlePreview(file) {
			console.log(file);
			console.log(this.fileList)
		},
		// handleChange(file) {
		// 	let formData = new FormData()
		// 	formData.append("name",file.name)
		// 	formData.append("name",file)
		// 	axios.post('url',{formData})
		// 		.then(response=>{
		//
		// 		})
		// 		.catch(error=>{this.$message.error(error.data)})
		// },
		beforeRemove(file, fileList) {
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
.mobile-card{
	border-radius: 10px;
	background-color:rgba(245,222,179,0.18);
	color: #6A3906;
	text-align: left;
	margin:10px 5px;
}
img{
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;
}
#zoom{
	width: 400px;
	height: 400px;
	border:2px solid #e2e2e2;
}
#introduce{
	font-size: 35px;
	font-family:  Futura,serif;
	font-weight: 800;
	margin-right: 20px;
}
#right div{
	margin-bottom: 5%;
}
.cartBottom{
	position: fixed;
	background-color: white;
	bottom: 0;
	height: 50px;
	line-height: 50px;
	color: #2c3e50;
	font-weight: bold;
	text-align: left;
	border: 1px solid #ebebeb;
	z-index: 20;
}
</style>