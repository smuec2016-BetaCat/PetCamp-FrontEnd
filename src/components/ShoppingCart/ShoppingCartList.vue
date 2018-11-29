<template>
	<el-row>
		<el-col :span="18" :offset="3">
			<el-col id="thead">
				<el-checkbox style="margin-left: 5px">全选</el-checkbox>
			</el-col>
			<el-col style="text-align: left">
				<el-col class="shop">
					<el-checkbox></el-checkbox>
					<span style="margin-left: 5px">宠物寄养</span>
				</el-col>
				<el-col style="padding: 5px" v-for="item in shoppingList" :key="item.id">
					<el-col style="padding: 10px;border-bottom: #aaa dotted 1px">
						<el-col :span="1">
							<el-checkbox></el-checkbox>
						</el-col>
						<el-col :span="2">
							<img src="../../assets/cat.jpg" alt="">
						</el-col>
						<el-col :span="5" style="padding: 5px">
							<span>{{item.title}}</span>
							<h5>{{item.msg}}</h5>
						</el-col>
						<el-col :span="4" style="padding: 5px">
							<span>备注</span>
							<h5>{{item.details}}</h5>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<span>￥{{item.price}}</span>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<el-input-number size="mini" v-model="item.num" style="width: 80%" :min="1"></el-input-number>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<span>￥{{(item.price*item.num).toFixed(2)}}</span>
						</el-col>
						<el-col :span="2" style="padding: 5px">
							<router-link to="">删除</router-link>
						</el-col>
					</el-col>
				</el-col>
				<el-col class="shop">
					<el-checkbox></el-checkbox>
					<span style="margin-left: 5px">宠物领养</span>
				</el-col>
				<!--宠物领养遍历-->
				<el-col style="padding: 5px" v-for="item in shoppingList" :key="item.id">
					<el-col style="padding: 10px;border-bottom: #aaa dotted 1px">
						<el-col :span="1">
							<el-checkbox></el-checkbox>
						</el-col>
						<el-col :span="2">
							<img src="../../assets/cat.jpg" alt="">
						</el-col>
						<el-col :span="5" style="padding: 5px">
							<span>{{item.title}}</span>
							<h5>{{item.msg}}</h5>
						</el-col>
						<el-col :span="4" style="padding: 5px">
							<span>备注</span>
							<h5>{{item.details}}</h5>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<span>￥{{item.price}}</span>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<el-input-number size="mini" v-model="item.num" style="width: 80%" :min="1"></el-input-number>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<span>￥{{(item.price*item.num).toFixed(2)}}</span>
						</el-col>
						<el-col :span="2" style="padding: 5px">
							<router-link to="">删除</router-link>
						</el-col>
					</el-col>
				</el-col>
				<el-col class="shop">
					<el-checkbox></el-checkbox>
					<span style="margin-left: 5px">宠物周边</span>
				</el-col>
				<!--宠物周边遍历-->
				<el-col style="padding: 5px" v-for="item in shoppingList" :key="item.id">
					<el-col style="padding: 10px;border-bottom: #aaa dotted 1px">
						<el-col :span="1">
							<el-checkbox></el-checkbox>
						</el-col>
						<el-col :span="2">
							<img src="../../assets/cat.jpg" alt="">
						</el-col>
						<el-col :span="5" style="padding: 5px">
							<span>{{item.title}}</span>
							<h5>{{item.msg}}</h5>
						</el-col>
						<el-col :span="4" style="padding: 5px">
							<span>备注</span>
							<h5>{{item.details}}</h5>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<span>￥{{item.price}}</span>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<el-input-number size="mini" v-model="item.num" style="width: 80%" :min="1"></el-input-number>
						</el-col>
						<el-col :span="3" style="padding: 5px">
							<span>￥{{(item.price*item.num).toFixed(2)}}</span>
						</el-col>
						<el-col :span="2" style="padding: 5px">
							<router-link to="">删除</router-link>
						</el-col>
					</el-col>
				</el-col>
			</el-col>
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
			shoppingList:[
					{id:1,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:32.80,num:1},
					{id:2,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:55.80,num:1},
					{id:3,title:"寄养小屋",msg:"寄养小屋具体信息",details:"",price:62.48,num:1}
				]
		}
	},
	methods:{

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