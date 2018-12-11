<template>
	<div>
		<!--这个组件存在bug，需要纯手撸-->
		<!--pc-->
		<div style="margin-bottom: 5%;overflow: hidden" class="hidden-xs-only">
			<div style="margin-left: 15%;width: 400px;float: left">
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
			<div style="float: left;width:43.66666%">
				<el-row style="text-align: left" id="right">
					<el-col :span="20" :offset="4" style="color:#6A3906;">
						<el-col style="padding-left: 10px">
							<strong id="introduce">PetCamp</strong>
							<span style="font-size: 20px" v-text="message.name"></span>
						</el-col>
						<el-col style="padding-left: 10px">
							<el-col :span="12" style="margin-bottom: 0">
								<el-rate
										v-model="value1"
										disabled
										show-score
										text-color="#ff9900"
										score-template="{value} points">
								</el-rate>
							</el-col>
							<el-col :span="12" style="margin-bottom: 0">
								<span v-if="count===-1"><i class="el-icon-loading"></i></span>
								<span v-else v-text="count" style="margin-right: 10px"></span>
								<span>位顾客已浏览</span>
							</el-col>
						</el-col>
						<el-col>
							<el-card shadow="always" style="border-radius: 10px;background-color:rgba(245,222,179,0.18);color: #6A3906;margin-right: 20%" :body-style="{ padding: '0px' }">
								<el-col style="display: flex;box-shadow: rgba(215,178,130,0.49) 1px 1px 1px">
									<el-col :span="14" style="margin: auto">
										<h4 style="margin:10px 0 10px 10px">寄养服务</h4>
									</el-col>
									<!--<el-col :span="10" style="margin: auto">-->
										<!--<span>-->
											<!--<i class="el-icon-circle-check-outline"></i>-->
											<!--剩余{{message.capacity}}条狗狗的寄养空间-->
										<!--</span>-->
									<!--</el-col>-->
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
						<!--<el-col style="margin: auto">-->
							<!--<span>-->
								<!--<i class="el-icon-circle-check-outline"></i>-->
								<!--剩余{{message.capacity}}条狗狗的寄养空间-->
							<!--</span>-->
						<!--</el-col>-->
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
						<el-option label="猫" value="猫"></el-option>
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
				<el-form-item>
					<!--缺少:on-change="handleChange"-->
					<el-upload
							class="upload-demo"
							drag
							action=""
							:on-preview="handlePreview"
							:before-remove="beforeRemove"
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
				<el-button type="primary" @click="addToCart">立即寄养</el-button>
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
		value1:4.5,
		count:-1,
		message:{

		},

		dialogFormVisible: false,
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
			comment: "",
			agency_id: 1,
			user_id: 1,
			image_names: ["order_test1"],
			sex:""
		},
		formLabelWidth: '180px',
		fileList:[],
		bottomList:["el-icon-service","el-icon-location-outline","el-icon-goods","el-icon-bell"],
		myUrl:["/","/PurchasePage/ProductComments","/ShoppingList","/FosterPage"]
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
				agency_id: this.$global.shopList.id,
				user_id: this.$global.user.username,
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
					this.$router.push({path:'/shoppingList'})
				})
				.catch(error=>{
					this.$message.success("please contact with me"+error.message.data.error)
				})
			this.dialogFormVisible = false
		}
	},
	mounted () {
		this.message =  this.$global.shopList
		axios.post('/api/v0/counter',{
			agency_id:this.$global.shopList.id
		})
			.then(response=>{
			this.count = response.data.count
		})
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