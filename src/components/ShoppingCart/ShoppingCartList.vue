<template>
	<div>
		<!--电脑端-->
		<el-row id="bug" class="hidden-xs-only">
			<el-col :span="18" :offset="3" style="background-color: white;border: 2px solid #e6e6e6;border-radius: 10px;">
				<el-col id="thead">
					<el-col :span="3">
						<el-checkbox style="margin-left: 5px" v-model="allChecked" @click.native="checkAll">全选</el-checkbox>
					</el-col>
					<el-col :span="9">
						<span>订单</span>
					</el-col>
					<el-col :span="3">
						<span>单价</span>
					</el-col>
					<el-col :span="3">
						<span>数量</span>
					</el-col>
					<el-col :span="3">
						<span>小计</span>
					</el-col>
					<el-col :span="2">
						<span>操作</span>
					</el-col>
				</el-col>
				<el-col style="text-align: left;"  v-for="(item,index) in shoppingCartList" :key="item.shopId">
					<el-col class="shop">
						<el-col :span="22">
							<el-checkbox v-model="item.shopChecked" @change.native="bothCheck(index)"></el-checkbox>
							<span style="margin-left: 5px" v-text="item.name"></span>
						</el-col>
						<!--<el-col :span="1">-->
						<!--<el-switch v-model="item.value" @click.native="showNav"></el-switch>-->
						<!--</el-col>-->
					</el-col>
					<el-col class="shopBody" v-if="item.value">
						<el-col v-for="(i,ind) in item.shoppingList" :key="i.id" class="father">
							<el-col class="cartItems">
								<el-col :span="1">
									<el-checkbox v-model="i.checked" @change.native="checkItems(index)"></el-checkbox>
								</el-col>
								<el-col :span="2">
									<img src="../../assets/cat.jpg" alt="">
								</el-col>
								<el-col :span="5" style="padding: 5px">
									<span v-text="i.title"></span>
									<h5 v-text="i.msg"></h5>
								</el-col>
								<el-col :span="4" style="padding: 5px">
									<span>备注</span>
									<h5 v-text="i.details"></h5>
								</el-col>
								<el-col :span="3" style="padding: 5px">
									<span v-text="`￥${i.price}`"></span>
								</el-col>
								<el-col :span="3" style="padding: 5px">
									<el-col  :md={span:17} :sm="{span:20}" >
										<el-input-number size="mini" v-model="i.num" :min="1" style="width: 100%"></el-input-number>
									</el-col>
								</el-col>
								<el-col :span="3" style="padding: 5px">
									<span v-text="`￥${(i.price*i.num).toFixed(2)}`"></span>
								</el-col>
								<el-col :span="2" style="padding: 5px">
									<router-link to="" @click.native="deleteItem(index,ind)">删除</router-link>
								</el-col>
							</el-col>
						</el-col>
					</el-col>
				</el-col>
				<!--底部-->
				<el-col id="footer">
					<el-col :span="2">
						<el-checkbox style="margin-left: 5px" v-model="allChecked" @click.native="checkAll">全选</el-checkbox>
					</el-col>
					<el-col :span="2">
						<router-link to="" @click.native="dialogVisible1 = true" class="delAll">
							一键删除
						</router-link>
					</el-col>
					<el-col :span="3" style="float: right">
						<el-button style="height: 100%" @click.native="pay">结算</el-button>
					</el-col>
					<el-col :span="6" style="float: right">
						<span>合计：</span>
						<strong style="font-size: 22px">{{totalPrice.toFixed(2)}}</strong>
					</el-col>
					<el-col :span="4" style="float: right">
						<span>已选商品 <span style="font-size: 22px">{{totalItem}}</span>件</span>
					</el-col>
				</el-col>
				<el-col>
					<el-dialog title="删除宝贝？" :visible.sync="dialogVisible" width="30%">
						<span>您确定要删除该宝贝？</span>
						<span slot="footer" class="dialog-footer">
						<el-button @click="deleteI">确定删除</el-button>
						<el-button type="primary" @click="dialogVisible = false">取消</el-button>
                     </span>
					</el-dialog>
				</el-col>
				<el-col>
					<el-dialog title="删除全部宝贝？" :visible.sync="dialogVisible1" width="30%">
						<span>您确定要删除全部宝贝？</span>
						<span slot="footer" class="dialog-footer">
						<el-button @click="deleteAll">确定删除</el-button>
						<el-button type="primary" @click="dialogVisible1 = false">取消</el-button>
                     </span>
					</el-dialog>
				</el-col>
			</el-col>
			<el-col v-if="navVisiable" id="bottomNav" ref="nav">
				<el-col :span="18" :offset="3">
					<el-col :span="2">
						<el-checkbox style="margin-left: 5px" v-model="allChecked" @click.native="checkAll">全选</el-checkbox>
					</el-col>
					<el-col :span="2">
						<router-link to="" @click.native="dialogVisible1 = true" class="delAll">一键删除</router-link>
					</el-col>
					<el-col :span="3" style="float: right">
						<el-button style="height: 100%" @click.native="pay">结算</el-button>
					</el-col>
					<el-col :span="6" style="float: right">
						<span>合计：</span>
						<strong style="font-size: 22px">{{totalPrice.toFixed(2)}}</strong>
					</el-col>
					<el-col :span="4" style="float: right">
						<span>已选商品 <span style="font-size: 22px">{{totalItem}}</span>件</span>
					</el-col>
				</el-col>
			</el-col>
		</el-row>
		<!--手机端-->
		<el-row class="hidden-sm-and-up">
			<!--nav-->
			<el-col class="cartNav">
				<span>购物车</span>
				<span class="cartNavEdit">编辑<i class="el-icon-setting"></i></span>
			</el-col>
			<!--bottom-->
			<el-col class="cartBottom">
				<el-col :span="6">
					<el-checkbox style="margin-left: 20px" v-model="allChecked" @click.native="checkAll">全选</el-checkbox>
				</el-col>
				<el-col :span="10">
					<span>合计：</span><strong style="font-size: 22px">{{totalPrice.toFixed(2)}}</strong>
				</el-col>
				<el-col :span="8" style="display: flex">
					<el-button type="warning" round style="width: 90%;margin: 5px 0">去结算</el-button>
				</el-col>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: "ShoppingCartList",
	data(){
		return{
			num:1,
			allChecked:true,
			dialogVisible: false,
			dialogVisible1: false,
			cartList:0,
			shopList:0,
			navVisiable:true,
			value1:"",
			shoppingCartList:[
				{
					shopId:1,
					name:"宠物寄养",
					shopChecked:true,
					value:true,
					shoppingList:[
						{id:1,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:32.80,num:1},
						{id:2,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:55.80,num:1},
						{id:3,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:62.48,num:1},
						{id:4,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:62.48,num:1}
					]
				},
				{
					shopId:2,
					name:"宠物领养",
					shopChecked:true,
					value:true,
					shoppingList:[
						{id:1,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:32.80,num:1},
						{id:2,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:55.80,num:1}
					]
				},
				{
					shopId:3,
					name:"宠物周边",
					shopChecked:true,
					value:true,
					shoppingList:[
						{id:1,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:32.80,num:1},
						{id:2,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:55.80,num:1},
						{id:3,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:62.48,num:1}
					]
				}
			]
		}
	},
	methods:{
		checking(index){
			let myChecking = this.shoppingCartList[index]
			if(myChecking.shopChecked){
				myChecking.shoppingList.forEach(function (value){
					value.checked = true
				})
			}
			else {
				myChecking.shoppingList.forEach(value=>{
					value.checked = false
				})
			}
		},
		checkAll(){
			if (this.allChecked){
				this.shoppingCartList.forEach(function (value) {
					value.shopChecked = false
					value.shoppingList.forEach(function (value) {
						value.checked = false
					})
				})
			}
			else {
				this.shoppingCartList.forEach(function (value) {
					value.shopChecked = true
					value.shoppingList.forEach(function (value) {
						value.checked = true
					})
				})
			}
		},
		checkItems(index){
			let myChecking = this.shoppingCartList[index]
			let checkLength = 0
			myChecking.shoppingList.forEach(value=>{
				if(value.checked){
					checkLength += 1
				}
			})
			if(checkLength === myChecking.shoppingList.length){
				myChecking.shopChecked = true
				let checkNumber = 0
				this.shoppingCartList.forEach(value => {
					if(value.shopChecked){
						checkNumber += 1
					}
				})
				if (checkNumber === this.shoppingCartList.length){
					this.allChecked = true
				}
			}
			else {
				myChecking.shopChecked = false
				this.allChecked = false
			}
		},
		AllChecked(){
			let checkNumber = 0
			let self = this.shoppingCartList
			self.forEach(value=>{
				if(value.shopChecked){
					checkNumber += 1
				}
			})
			this.allChecked = checkNumber === self.length;
		},
		bothCheck(index){
			this.checking(index)
			this.AllChecked()
		},
		deleteItem(index,ind){
			this.dialogVisible = true
			this.cartList = index
			this.shopList = ind
		},
		deleteI(){
			this.shoppingCartList[this.cartList].shoppingList.splice(this.shopList,1)
			this.dialogVisible = false
			//ajax请求删除后端数据
			// axios.post()
		},
		pay(){
			this.$router.push({path:`/Order`})
		},
		showNav(){
			let visibleBottom = window.scrollY + document.documentElement.clientHeight
			let boxOffset = document.getElementById("bug").offsetHeight
			this.navVisiable = visibleBottom <= boxOffset;
			if(boxOffset <= document.documentElement.clientHeight){
				this.navVisiable = false
			}
		},
		deleteAll(){
			this.shoppingCartList.forEach(function (value) {
				value.shoppingList = []
			})
			this.dialogVisible1 = false
		}
	},
	computed:{
		totalPrice(){
			let sum = 0
			this.shoppingCartList.forEach(function (value) {
				value.shoppingList.forEach(function (value) {
					if (value.checked){
						sum += value.price*value.num
					}
				})
			})
			return sum
		},
		totalItem(){
			let sum = 0
			this.shoppingCartList.forEach(function (value) {
				value.shoppingList.forEach(function (value) {
					if (value.checked){
						sum += 1
					}
				})
			})
			return sum
		}
	},
	mounted: function () {
		this.$nextTick(function () {
			window.addEventListener('scroll',this.showNav);
		})
	},
	destroyed() {
		this.$nextTick(function () {
			window.removeEventListener('scroll',this.showNav);
		})
	}
}
</script>

<style scoped>
.delAll{
	text-decoration: none;
	font-size: 0.83em;
	color: #2c3e50;
}
.delAll:hover{
	color: red;
}
#footer{
	text-align: left;
	height: 50px;
	line-height: 50px;
}
h5{
	margin: 10px 0;
}
img{
	width: 100%;
	height: 100%;
}
#thead{
	display: block;
	height: 40px;
	line-height: 32px;
	margin: 0 0 10px;
	padding: 5px 0;
	border-top: 0;
	position: relative;
	text-align: left;
	background-color: lavender;
}
#thead span{
	padding: 5px;
	font-size: 0.95em;
	font-weight: bold;
}
.shop{
	line-height: 30px;
	padding-left: 5px;
	font-weight: 700;
	border-bottom: #e6e6e6 solid 1px;
}
#bottomNav{
	position: fixed;
	bottom: 0;
	height: 50px;
	line-height: 50px;
	text-align: left;
	z-index: 10;
	background-color: #f0f3ef;
	box-shadow: 0 -1px 8px rgba(0,1,1,.08);
}
.shopBody{
	border-bottom: #e6e6e6 solid 1px;
}
#bug{
	background-color: white;
	padding-top: 5%;
	margin-bottom: 5%;
}
.cartItems{
	padding: 10px;
	border-top: #e6e6e6 solid 1px;
}
.cartItems:hover{
	background-color: rgb(242, 247, 255);
}
.cartNav{
	box-shadow: 0 7px 10px 5px #eeeeee;
	height: 50px;
	line-height: 50px;
	color: #2c3e50;
	font-weight: bold;
	position: relative;
}
.cartNavEdit{
	position: absolute;
	right: 20px;
}
.cartNavEdit:hover{
	color:#6A3906;
}
.cartBottom{
	position: fixed;
	bottom: 0;
	height: 50px;
	line-height: 50px;
	color: #2c3e50;
	font-weight: bold;
	text-align: left;
	border: 1px solid #ebebeb;
}
</style>