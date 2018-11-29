<template>
	<el-row>
		<el-col :span="18" :offset="3">
			<el-col id="thead">
				<el-checkbox style="margin-left: 5px" v-model="allChecked" @click.native="checkAll">全选</el-checkbox>
			</el-col>
			<el-col style="text-align: left"  v-for="(item,index) in shoppingCartList" :key="item.shopId">
				<el-col class="shop">
					<el-checkbox v-model="item.shopChecked" @change.native="checking(index)"></el-checkbox>
					<span style="margin-left: 5px" v-text="item.name"></span>
				</el-col>
				<el-col style="padding: 5px" v-for="i in item.shoppingList" :key="i.id">
					<el-col style="padding: 10px;border-bottom: #aaa dotted 1px">
						<el-col :span="1">
							<el-checkbox v-model="i.checked" @click.native="checkItems(index)"></el-checkbox>
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
							<el-input-number size="mini" v-model="i.num" style="width: 80%" :min="1"></el-input-number>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<span v-text="`￥${(i.price*i.num).toFixed(2)}`"></span>
						</el-col>
						<el-col :span="2" style="padding: 5px">
							<router-link to="">删除</router-link>
						</el-col>
					</el-col>
				</el-col>
			</el-col>
			<!--底部-->
			<el-col id="footer">
				<el-col :span="2">
					<el-checkbox>全选</el-checkbox>
				</el-col>
				<el-col :span="2" style="float: right">
					<el-button style="height: 100%">结算</el-button>
				</el-col>
				<el-col :span="4" style="float: right">
					<span>合计：</span>
					<strong style="font-size: 22px">0.00</strong>
				</el-col>
				<el-col :span="4" style="float: right">
					<span>已选商品 <span style="font-size: 22px">0</span>件</span>
				</el-col>
			</el-col>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "ShoppingCartList",
	data(){
		return{
			num:1,
			allChecked:true,
			shoppingCartList:[
				{
					shopId:1,
					name:"宠物寄养",
					shopChecked:true,
					shoppingList:[
						{id:1,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:32.80,num:1},
						{id:2,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:55.80,num:1},
						{id:3,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:62.48,num:1}
					]
				},
				{
					shopId:2,
					name:"宠物领养",
					shopChecked:true,
					shoppingList:[
						{id:1,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:32.80,num:1},
						{id:2,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:55.80,num:1},
						{id:3,checked:true,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:62.48,num:1}
					]
				},
				{
					shopId:3,
					name:"宠物周边",
					shopChecked:true,
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
			}
			else {
				myChecking.shopChecked = false
			}
			this.AllChecked()
		},
		AllChecked(){
			alert("hello")
			let checkNumber = 0
			let self = this.shoppingCartList
			self.forEach(value=>{
				if(value.shopChecked){
					checkNumber += 1
				}
			})
			console.log(checkNumber)
			if(checkNumber === self.length){
				this.allChecked = true
			}
			else {
				this.allChecked = false
			}
		}
	}
}
</script>

<style scoped>
#footer{
	text-align: left;
	height: 50px;
	line-height: 50px;
	margin-bottom: 60px;
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
	background: white;
	border: 1px solid #e9e9e9;
	border-top: 0;
	position: relative;
	text-align: left;
}
.shop{
	line-height: 30px;
	padding-left: 5px;
	font-weight: 700;
	border-bottom: #aaa solid 1px;
}
</style>