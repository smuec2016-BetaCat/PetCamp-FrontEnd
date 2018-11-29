<template>
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
						<span id="address">选择寄养时间</span>
						<el-cascader
								placeholder="选择地址"
								:options="options"
								filterable
								change-on-select
						></el-cascader>
					</el-col>
					<el-col>
						<el-col :span="12" style="margin-bottom: 0">
							<el-button type="success" icon="el-icon-goods">立即寄养</el-button>
						</el-col>
					</el-col>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import PicZoom from 'vue-piczoom'
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
				options: [{
					value: 'guide',
					label: 'Guide',
					children: [{
						value: 'disciplines',
						label: 'Disciplines',
						children: [{
							value: 'consistency',
							label: 'Consistency'
						}, {
							value: 'feedback',
							label: 'Feedback'
						}, {
							value: 'efficiency',
							label: 'Efficiency'
						}, {
							value: 'controllability',
							label: 'Controllability'
						}]
					}, {
						value: 'navigation',
						label: 'Navigation',
						children: [{
							value: 'side nav',
							label: 'Side Navigation'
						}, {
							value: 'top nav',
							label: 'Top Navigation'
						}]
					}]
				}, {
					value: 'component',
					label: 'Component',
					children: [{
						value: 'basic',
						label: 'Basic',
						children: [{
							value: 'layout',
							label: 'Layout'
						}, {
							value: 'color',
							label: 'Color'
						}, {
							value: 'typography',
							label: 'Typography'
						}, {
							value: 'icon',
							label: 'Icon'
						}, {
							value: 'button',
							label: 'Button'
						}]
					}, {
						value: 'form',
						label: 'Form',
						children: [{
							value: 'radio',
							label: 'Radio'
						}, {
							value: 'checkbox',
							label: 'Checkbox'
						}, {
							value: 'input',
							label: 'Input'
						}, {
							value: 'input-number',
							label: 'InputNumber'
						}, {
							value: 'select',
							label: 'Select'
						}, {
							value: 'cascader',
							label: 'Cascader'
						}, {
							value: 'switch',
							label: 'Switch'
						}, {
							value: 'slider',
							label: 'Slider'
						}, {
							value: 'time-picker',
							label: 'TimePicker'
						}, {
							value: 'date-picker',
							label: 'DatePicker'
						}, {
							value: 'datetime-picker',
							label: 'DateTimePicker'
						}, {
							value: 'upload',
							label: 'Upload'
						}, {
							value: 'rate',
							label: 'Rate'
						}, {
							value: 'form',
							label: 'Form'
						}]
					}, {
						value: 'data',
						label: 'Data',
						children: [{
							value: 'table',
							label: 'Table'
						}, {
							value: 'tag',
							label: 'Tag'
						}, {
							value: 'progress',
							label: 'Progress'
						}, {
							value: 'tree',
							label: 'Tree'
						}, {
							value: 'pagination',
							label: 'Pagination'
						}, {
							value: 'badge',
							label: 'Badge'
						}]
					}, {
						value: 'notice',
						label: 'Notice',
						children: [{
							value: 'alert',
							label: 'Alert'
						}, {
							value: 'loading',
							label: 'Loading'
						}, {
							value: 'message',
							label: 'Message'
						}, {
							value: 'message-box',
							label: 'MessageBox'
						}, {
							value: 'notification',
							label: 'Notification'
						}]
					}, {
						value: 'navigation',
						label: 'Navigation',
						children: [{
							value: 'menu',
							label: 'NavMenu'
						}, {
							value: 'tabs',
							label: 'Tabs'
						}, {
							value: 'breadcrumb',
							label: 'Breadcrumb'
						}, {
							value: 'dropdown',
							label: 'Dropdown'
						}, {
							value: 'steps',
							label: 'Steps'
						}]
					}, {
						value: 'others',
						label: 'Others',
						children: [{
							value: 'dialog',
							label: 'Dialog'
						}, {
							value: 'tooltip',
							label: 'Tooltip'
						}, {
							value: 'popover',
							label: 'Popover'
						}, {
							value: 'card',
							label: 'Card'
						}, {
							value: 'carousel',
							label: 'Carousel'
						}, {
							value: 'collapse',
							label: 'Collapse'
						}]
					}]
				}, {
					value: 'resource',
					label: 'Resource',
					children: [{
						value: 'axure',
						label: 'Axure Components'
					}, {
						value: 'sketch',
						label: 'Sketch Templates'
					}, {
						value: 'docs',
						label: 'Design Documentation'
					}]
				}]
			}
		},
		methods:{
			changeMyImage(key){
				this.myImgUrl = this.img[key].url
			},
			initMyImage(){
				this.myImgUrl = this.img[0].url
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