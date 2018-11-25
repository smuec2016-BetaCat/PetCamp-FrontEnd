<template>
	<el-row>
		<el-col :span="20" :offset="2" id="PetSide">
			<span id="PetSide1">更多商品</span>
			<br>
		</el-col>
		<el-col :span="20" :offset="2">
			<el-row>
				<el-col :xs={span:24,offset:0} :sm={span:8,offset:0} :md={span:6,offset:0} v-for="item in PetSide" :key="item.id">
					<el-button @click="goTo" @mouseenter.native="textChange(item)" @mouseleave.native="textChange(item)">
						<el-card :body-style="{ padding: '10px' }" shadow="hover">
							<img src="../../../assets/petSupplies.jpg" class="image">
							<div style="padding: 14px;">
								<span style="color:#000;" v-text="item.title"></span>
								<div class="bottom clearfix">
									<span v-if="item.show" v-text="item.price" style="color: #555;text-decoration: line-through"></span>
									<span v-if="item.show" v-text="item.dprice" style="color: #555;margin-left: 10%;"></span>
									<span v-if="!item.show" style="color: #555;">加入购物车</span>
								</div>
							</div>
						</el-card>
					</el-button>
				</el-col>
			</el-row>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "SuppliesList",
	data() {
		return {
			price:"$100.00",
			dprice:"$80.00",
			PetSide:[
				{id:0,title:"铲屎官道具",price: "$100.00",dprice:"$80.00",show:true,src:""},
				{id:1,title:"到底能不能遍历啊",price: "$150.00",dprice:"$130.00",show:true,src:""},
				{id:2,title:"终于可以遍历了",price: "$250.00",dprice:"$130.00",show:true,src:""},
				{id:3,title:"能不能有个悬浮效果啊",price: "$1500.00",dprice:"$1030.00",show:true,src:""},
				{id:4,title:"字数不能超过10个",price: "$1250.00",dprice:"$730.00",show:true,src:""},
				{id:5,title:"最终决定直接尝试json文件",price: "$150.00",dprice:"$130.00",show:true,src:""},
				{id:6,title:"突然发现就可以了",price: "$650.00",dprice:"$630.00",show:true,src:""},
				{id:7,title:"可以只买单个物品了",price: "$1020.00",dprice:"$930.00",show:true,src:""}
			],
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}]
		}
	},
	methods:{
		goTo(){
			alert("haha")
		},
		textChange(item){
			item.show = !item.show
		}
	}
}
</script>

<style scoped>
.time {
	font-size: 13px;
	color: #999;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.button {
	padding: 0;
	float: right;
}

.image {
	width: 100%;
	display: block;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}
.el-button{
	margin: 5% 1%;
	padding: 0;
}
#PetSide #PetSide1{
	margin: 0;
	font-family: 'fzzzh', sans-serif;
	font-size: 28px;
	position: relative;
	display: block;
}
#PetSide #PetSide1:before,#PetSide #PetSide1:after{
	content: "";
	position: absolute;
	background: #222;
	width: 5%;
	height: 3px;
	top: 50%;
}
#PetSide #PetSide1:before{
	left: 37%;
}
#PetSide #PetSide1:after{
	right: 37%;
}
</style>