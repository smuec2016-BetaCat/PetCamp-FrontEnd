<template>
	<el-row>
		<!--手机端nav-->
		<el-col class="hidden-sm-and-up orderNav">
			<span>填写并核对订单信息</span>
			<router-link to="/ShoppingList" class="OrderNavBack"><i class="el-icon-back"></i></router-link>
		</el-col>
		<el-col :md="{span:18,offset:3}" :xs="{span:22,offset:1}" style="text-align: left">
			<el-col>
				<h3>填写并核对订单信息</h3>
			</el-col>
			<el-col class="checkout-steps">
				<!--用户地址信息-->
				<el-col class="bottomBoder">
					<el-col>
						<h5>用户地址信息</h5>
					</el-col>
					<el-col>
						<el-col :md="6" :xs="24">
							<el-button class="consignee-item"><span>{{$global.user.username}}</span><b></b></el-button>
						</el-col>
						<el-col :md="18" :xs="24">
							<div class="consignee-msg">
								<span>上海 浦东新区 南汇新城镇 上海海事大学（临港校区）</span>
							</div>
						</el-col>
					</el-col>
				</el-col>
				<!--支付方式-->
				<el-col class="bottomBoder">
					<el-col>
						<h5>支付方式</h5>
					</el-col>
					<el-col>
						<el-col :md="6">
							<el-button class="consignee-item"><span>{{order.payment}}</span><b></b></el-button>
						</el-col>
					</el-col>
				</el-col>
				<!--配送方式-->
				<el-col class="bottomBoder">
					<el-col>
						<h5>领宠方式</h5>
					</el-col>
					<el-col>
						<el-col :md="5" :xs="12">
							<el-button v-bind:class="{'consignee-item' : Active,'consignee-item1':true}" @click.native="changeClass">
								<span>{{order.delivery[0].way}}</span><b v-if="Active"></b>
							</el-button>
						</el-col>
						<el-col :md="4" :xs="12">
							<el-button v-bind:class="{'consignee-item' : !Active,'consignee-item1':true}" @click.native="changeClass">
								<span>{{order.delivery[1].way}}</span><b v-if="!Active"></b>
							</el-button>
						</el-col>
					</el-col>
				</el-col>
				<!--订单详情-->
				<el-col class="bottomBoder" id="orderList">
					<el-col>
						<h5>订单详情</h5>
					</el-col>
					<el-col style="background-color:#f2f7ff;padding: 5px 15px;margin-bottom: 10px" v-for="i in order.orderDetails" :key="i.id">
						<!--pc-->
						<el-col class="bottomBoder hidden-sm-and-down" style="padding-bottom: 0">
							<el-col :span="3" style="padding: 5px">
								<span>店铺/机构</span>
							</el-col>
							<el-col :span="7" style="padding: 5px">
								<span>寄养/领养/宠物周边</span>
							</el-col>
							<el-col :span="4" style="padding: 5px">
								<span>备注</span>
							</el-col>
							<el-col :span="3" style="padding: 5px">
								<span>单件价格</span>
							</el-col>
							<el-col :span="3" style="padding: 5px">
								<span>数量</span>
							</el-col>
							<el-col :span="3" style="padding: 5px">
								<span>总价</span>
							</el-col>
							<el-col :span="1" style="padding: 5px">
								<el-switch v-model="i.show" active-color="#13ce66"></el-switch>
							</el-col>
						</el-col>
						<el-col class="hidden-sm-and-down">
							<el-col :span="3" style="padding: 5px">
								<span>{{i.agency_name}}</span>
							</el-col>
							<el-col :span="7" style="padding: 5px">
								<span>{{i.pet_name}}</span>
							</el-col>
							<el-col :span="4" style="padding: 5px">
								<span>{{i.comment}}</span>
							</el-col>
							<el-col :span="3" style="padding: 5px">
								<span>￥{{i.price}}</span>
							</el-col>
							<el-col :span="3" style="padding: 5px">
								<span>1</span>
							</el-col>
							<el-col :span="3" style="padding: 5px">
								<span>￥{{i.price}}</span>
							</el-col>
						</el-col>
						<!--移动-->
						<el-col class="bottomBoder hidden-sm-and-up" style="padding-bottom: 0">
							<el-col :span="7" style="padding: 5px">
								<span>店铺/机构</span>
							</el-col>
							<el-col :span="9" style="padding: 5px">
								<span>详情</span>
							</el-col>
							<el-col :span="5" style="padding: 5px">
								<span>总价</span>
							</el-col>
							<el-col :span="1" style="padding: 5px">
								<el-switch v-model="i.show" active-color="#13ce66"></el-switch>
							</el-col>
						</el-col>
						<el-col class="hidden-sm-and-up">
							<el-col :span="7" style="padding: 5px">
								<span>{{i.agency_name}}</span>
							</el-col>
							<el-col :span="9" style="padding: 5px">
								<span>{{i.comment}}</span>
							</el-col>
							<el-col :span="5" style="padding: 5px">
								<span>￥{{i.price}}</span>
							</el-col>
						</el-col>
						<el-col style="padding: 5px">
							<transition name="slide-fade">
								<el-col v-if="i.show" style="border-top: 1px solid #e6e6e6;padding-top: 5px">
									<el-col :md="4" :xs="8">
										<span class="block">宠物昵称：</span>
										<span class="block">宠物性别：</span>
										<span class="block">宠物类型：</span>
										<span class="block">宠物年龄：</span>
										<span class="block">宠物体重：</span>
										<span class="block">是否绝育：</span>
									</el-col>
									<el-col :md="4" :xs="16">
										<span class="block">{{i.pet_name}}</span>
										<span class="block">公</span>
										<span class="block">{{i.species}}</span>
										<span class="block">{{i.age}}岁</span>
										<span class="block">{{i.weight}}KG</span>
										<span class="block">{{i.sterilization? "已绝育": "未绝育"}}</span>
									</el-col>
									<el-col :md="16" :xs="24">
										<el-col :span="12"><span class="block">TA是不是调皮鬼？</span></el-col>
										<el-col :span="12"><span class="block">{{i.naughty?"调皮":"不调皮"}}</span></el-col>
									</el-col>
									<el-col :md="16" :xs="24">
										<el-col :span="12"><span class="block">TA胆子特别小吗？</span></el-col>
										<el-col :span="12"><span class="block">{{i.shy?"内向":"外向"}}</span></el-col>
									</el-col>
									<el-col :md="16" :xs="24">
										<el-col :span="12"><span class="block">TA与其他伙伴好相处吗？</span></el-col>
										<el-col :span="12"><span class="block">{{i.friendly?"友好":"独立"}}</span></el-col>
									</el-col>
									<el-col :md="16" :xs="24">
										<el-col :span="12"><span class="block">需要寄养的时间</span></el-col>
										<el-col :span="12"><span class="block">{{i.expiration}}</span></el-col>
									</el-col>
									<el-col :md="16" :xs="24">
										<el-col :span="12"><span class="block">宠物简介：</span></el-col>
										<el-col :span="12"><span class="block">{{i.comment}}</span></el-col>
									</el-col>
								</el-col>
							</transition>
						</el-col>
					</el-col>
				</el-col>
				<!--发票信息-->
				<el-col class="bottomBoder">
					<el-col>
						<h5>发票信息</h5>
					</el-col>
					<el-col>
						<el-button class="consignee-item"><span>电子普通发票</span><b></b></el-button>
					</el-col>
				</el-col>
				<!--优惠券-->
				<el-col class="bottomBoder">
					<el-col>
						<h5>使用优惠/礼品卡/抵用</h5>
					</el-col>
					<el-col>
						<el-button class="consignee-item"><span>￥20.00元抵用券</span><b></b></el-button>
					</el-col>
				</el-col>
				<!--付款-->
				<el-col>
					<el-col :md="5" :xs="10" style="float: right">
						<el-col style="margin: 10px 0">
							<span>实际付款：</span>
							<span style="color:#e6a23c;font: 700 26px tahoma;">￥{{totalPrice}}</span>
						</el-col>
						<el-col style="margin: 10px 0">
							<el-button type="primary" style="width: 100%" @click.native="postOrder">提交订单</el-button>
						</el-col>
					</el-col>
				</el-col>
			</el-col>
			<el-col>
				<div style="height: 100px"></div>
			</el-col>
		</el-col>
	</el-row>
</template>

<script>
import axios from 'axios'
import TopBar from "@/components/Common/TopBar";
export default {
	name: "OrderForm",
	components: {TopBar},
	data(){
		return{
			items:[
				{id:1,details:false},
				{id:2,details:false},
				{id:3,details:false},
			],
			Active:false,
			order:{
				userId:"某某先生",
				payment:"电子支付",
				delivery:[{way:"送宠到家",active:true},{way:"到店自提",active:false}],
				orderDetails:[]
			},
			orderResponse:null
		}
	},
	methods:{
		changeClass(){
			this.Active = !this.Active
		},
		getorder(){
			axios.get('/api/v0/cart',{

			})
				.then(response=>{
					this.order.orderDetails = response.data.orders
				})
				.catch(error=>{
					this.$message.error(error.message)
				})
		},
		postOrder(){
			let ordNums = []
			for (let order of this.order.orderDetails) {
				ordNums.push(order.ord_num)
			}
			axios.put("/api/v0/order/alipay",{
				ord_num: ordNums,
				subject: this.$global.user.username +"的寄养订单",
				return_url: "http://www.baidu.com",
				wap:!this.isPc
			})
				.then(response=>{
					window.location.href=response.data.alipay_url
				})
			}
	},
	computed:{
		isPc() {
			let [userAgentInfo,flag,Agents] = [navigator.userAgent,true,["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"]]
			for (let v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
					flag = false
					break
				}
			}
			return flag
		},
		totalPrice(){
			let sum = 0
			this.order.orderDetails.forEach(value => {
				sum += value.price
			})
			return sum
		}
	},
	mounted:function () {
		this.getorder()
	}
}
</script>

<style scoped>
.orderNav{
	box-shadow: 0 7px 10px 5px #eeeeee;
	height: 50px;
	line-height: 50px;
	background-color: white;
	z-index: 20;
	color: #2c3e50;
	font-weight: bold;
	position: fixed;
}
.block{
	display: block;
	padding: 2px 5px 2px 0;
}
img{
	width: 100%;
	height: 100%;
}
.checkout-steps{
	padding: 0 20px;
	border: 2px solid #e6e6e6;
	background-color: #fff;
	border-radius: 10px;
}
.consignee-item{
	border: 2px solid #e6a23c;
	padding: 4px 10px;
	min-width: 120px;
	min-height: 30px;
	text-align: center;
	position: relative;
}
/*这个css属性是必须的*/
.consignee-item1{
	padding: 4px 10px;
	min-width: 120px;
	min-height: 30px;
	text-align: center;
	position: relative;
}
.consignee-msg{
	margin: 4px 10px;
}
.bottomBoder{
	border-bottom: 1px solid #e6e6e6;
	padding-bottom: 20px;
}
#orderList span{
	font-size: 0.95em;
	color: #666;
}
.OrderNavBack{
	position: fixed;
	left: 20px;
}
/*动画*/
.slide-fade-enter-active {
	transition: all .4s ease-in;
}
.slide-fade-leave-active {
	transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	transform: translateY(-10px);
	opacity: 0;
}
</style>