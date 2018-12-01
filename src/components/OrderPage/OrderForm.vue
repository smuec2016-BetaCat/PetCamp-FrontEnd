<template>
	<el-row>
		<el-col :span="18" :offset="3" style="text-align: left">
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
						<el-col :span="6">
							<el-button class="consignee-item"><span>用户id</span><b></b></el-button>
						</el-col>
						<el-col :span="18">
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
						<el-col :span="6">
							<el-button class="consignee-item"><span>电子支付</span><b></b></el-button>
						</el-col>
					</el-col>
				</el-col>
				<!--配送方式-->
				<el-col class="bottomBoder">
					<el-col>
						<h5>领宠方式</h5>
					</el-col>
					<el-col>
						<el-col :span="5">
							<el-button v-bind:class="{'consignee-item' : Active,'consignee-item1':true}" @click.native="changeClass">
								<span>送宠到家</span><b v-if="Active"></b>
							</el-button>
						</el-col>
						<el-col :span="4">
							<el-button v-bind:class="{'consignee-item' : !Active,'consignee-item1':true}" @click.native="changeClass">
								<span>去店自提</span><b v-if="!Active"></b>
							</el-button>
						</el-col>
					</el-col>
				</el-col>
				<!--订单详情-->
				<el-col class="bottomBoder" id="orderList">
					<el-col>
						<h5>订单详情</h5>
					</el-col>
					<el-col style="background-color:#f2f7ff;padding: 5px 15px;margin-bottom: 10px" v-for="i in items" :key="i.id">
						<el-col class="bottomBoder" style="padding-bottom: 0">
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
								<el-switch v-model="i.details" active-color="#13ce66"></el-switch>
							</el-col>
						</el-col>
						<el-col>
							<el-col :span="3" style="padding: 5px">
								<span>爱宠社区</span>
							</el-col>
							<el-col :span="7" style="padding: 5px">
								<span>宠物寄养，寄养一条小型猪，他的名字为犇犇</span>
							</el-col>
							<el-col :span="4" style="padding: 5px">
								<span>无</span>
							</el-col>
							<el-col :span="3" style="padding: 5px">
								<span>￥150.00</span>
							</el-col>
							<el-col :span="3" style="padding: 5px">
								<span>1</span>
							</el-col>
							<el-col :span="3" style="padding: 5px">
								<span>￥150.00</span>
							</el-col>
						</el-col>
						<el-col style="padding: 5px">
							<transition name="slide-fade">
								<el-col v-if="i.details" style="border-top: 1px solid #e6e6e6;padding-top: 5px">
									<el-col :span="4">
										<span class="block">宠物昵称：</span>
										<span class="block">宠物性别：</span>
										<span class="block">宠物类型：</span>
										<span class="block">宠物年龄：</span>
										<span class="block">宠物体重：</span>
										<span class="block">是否绝育：</span>
									</el-col>
									<el-col :span="4">
										<span class="block">犇犇</span>
										<span class="block">公</span>
										<span class="block">小型犬</span>
										<span class="block">2岁</span>
										<span class="block">20 KG</span>
										<span class="block">已绝育</span>
									</el-col>
									<el-col :span="16">
										<el-col :span="9"><span class="block">TA是不是调皮鬼？</span></el-col>
										<el-col :span="15"><span class="block">生性乖巧</span></el-col>
									</el-col>
									<el-col :span="16">
										<el-col :span="9"><span class="block">TA胆子特别小吗？</span></el-col>
										<el-col :span="15"><span class="block">胆子不是特别小，相处一段时间就好了</span></el-col>
									</el-col>
									<el-col :span="16">
										<el-col :span="9"><span class="block">TA与其他伙伴好相处吗？</span></el-col>
										<el-col :span="15"><span class="block">与小伙伴能够友好相处</span></el-col>
									</el-col>
									<el-col :span="16">
										<el-col :span="9"><span class="block">需要寄养的时间</span></el-col>
										<el-col :span="15"><span class="block">2018年11月30日-2018年11月30日</span></el-col>
									</el-col>
									<el-col :span="16">
										<el-col :span="9"><span class="block">宠物简介：</span></el-col>
										<el-col :span="15"><span class="block">我是一直狗我是一直狗我是一直狗我是一直狗我是一直狗我是一直狗</span></el-col>
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
					<el-col :span="5" style="float: right">
						<el-col style="margin: 10px 0">
							<span>实际付款：</span>
							<span style="color:red;font: 700 26px tahoma;">￥32.80</span>
						</el-col>
						<el-col style="margin: 10px 0">
							<el-button type="danger" style="width: 100%">提交订单</el-button>
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
export default {
	name: "OrderForm",
	data(){
		return{
			items:[
				{id:1,details:false},
				{id:2,details:false},
				{id:3,details:false},
			],
			Active:false
		}
	},
	methods:{
		changeClass(){
			this.Active = !this.Active
		}
	}
}
</script>

<style scoped>
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
	border: 2px solid #e4393c;
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
b {
	display: block;
	position: absolute;
	right: 0;
	bottom: 0;
	width: 12px;
	height: 12px;
	overflow: hidden;
	background: url(//misc.360buyimg.com/user/purchase/2.0.0/css/i/selected-icon.png) no-repeat;
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
	color: #666;;
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