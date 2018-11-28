<template>
	<el-row>
		<!--商品遍历-->
		<el-col :span="20" :offset="2" style="margin-bottom: 8%">
			<el-col style="margin: 0 0 10px 0">
				<el-col :span="2">
					<img src="../../assets/succ.png" alt="" style="width: 30%">
				</el-col>
				<el-col :span="22" style="text-align: left">
					<span style="font-size: 25px">热卖榜</span>
				</el-col>
			</el-col>
			<el-col :span="8" v-for="item in top3" :key="item.id">
				<el-button style="padding: 0;position: relative;margin: 0 10px 0 10px">
					<el-card :body-style="{ padding: '0px' }" shadow="hover">
						<el-col class="topThree">
							<div class="flag">
								<div class="rank" v-text="item.id"></div>
								<div class="desc" v-text="item.title"></div>
							</div>
							<el-col :span="10">
								<img src="../../assets/petSupplies.jpg" alt="">
							</el-col>
							<el-col :span="14" style="text-align:left;">
								<el-col>
									<p class="msg">文字最多可以显示两行，多于两行会自动隐藏</p>
								</el-col>
								<el-col>
									<p class="rate">好评率100%</p>
								</el-col>
								<el-col>
									<p style="font-size: 20px;color: #F40;">￥9999.00</p>
								</el-col>
							</el-col>
						</el-col>
					</el-card>
				</el-button>
			</el-col>
			<el-col :span="6" v-for="item in top5" :key="item.id" style="margin-top: 10px">
				<el-button style="padding: 0;position: relative;margin: 0 10px 0 10px">
					<el-card :body-style="{ padding: '0px' }" shadow="hover">
						<el-col class="topFour">
							<div class="flag">
								<div class="rank" v-text="item.id"></div>
								<div class="desc" v-text="item.title"></div>
							</div>
							<el-col>
								<img src="../../assets/petSupplies.jpg" alt="" style="width: 50%">
							</el-col>
							<el-col style="text-align:left;">
								<el-col>
									<p class="rate" style="margin: 10px 0 0 0;">好评率100%</p>
								</el-col>
								<el-col>
									<p class="msg" style="margin: 10px 0 0 0;">文字最多可以显示两行，多于两行会自动隐藏</p>
								</el-col>
								<el-col>
									<p style="font-size: 20px;color: #F40;">￥9999.00</p>
								</el-col>
							</el-col>
						</el-col>
					</el-card>
				</el-button>
			</el-col>
		</el-col>
		<!--商品列表-->
		<el-col :span="20" :offset="2">
			<el-col style="margin: 0 0 10px 0">
				<el-col :span="2">
					<img src="../../assets/succ.png" alt="" style="width: 30%">
				</el-col>
				<el-col :span="22" style="text-align: left">
					<span style="font-size: 25px">好物优选</span>
				</el-col>
			</el-col>
			<el-row>
				<el-col :xs={span:24,offset:0} :sm={span:8,offset:0} :md={span:6,offset:0} v-for="item in PetSide" :key="item.id">
					<el-button @click="goTo" @mouseenter.native="textChange(item)" @mouseleave.native="textChange(item)" style="padding:0;margin:5px">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<img src="../../assets/petSupplies.jpg" class="image" alt="img">
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
			<el-row>
				<el-col>
					<div class="block" style="margin: 5% 0 2% 0">
						<el-pagination
								layout="prev, pager, next"
								:total="50">
						</el-pagination>
					</div>
				</el-col>
			</el-row>
		</el-col>
	</el-row>
</template>

<script>

export default {
	name: "CommodityBrowsingList3",
	data(){
		return {
			top3:[{id:1,title:"热卖指数100"},{id:2,title:"热卖指数95"},{id:3,title:"热卖指数90"}],
			top5:[{id:4,title:"热卖指数100"},{id:5,title:"热卖指数95"},{id:6,title:"热卖指数90"},{id:7,title:"热卖指数90"}],
			PetSide:[
				{id:0,title:"铲屎官道具",price: "$100.00",dprice:"$80.00",show:true,src:""},
				{id:1,title:"到底能不能遍历啊",price: "$150.00",dprice:"$130.00",show:true,src:""},
				{id:2,title:"终于可以遍历了",price: "$250.00",dprice:"$130.00",show:true,src:""},
				{id:3,title:"能不能有个悬浮效果啊",price: "$1500.00",dprice:"$1030.00",show:true,src:""},
				{id:4,title:"字数不能超过10个",price: "$1250.00",dprice:"$730.00",show:true,src:""},
				{id:5,title:"最终决定直接尝试json文件",price: "$150.00",dprice:"$130.00",show:true,src:""},
				{id:6,title:"突然发现就可以了",price: "$650.00",dprice:"$630.00",show:true,src:""},
				{id:7,title:"可以只买单个物品了",price: "$1020.00",dprice:"$930.00",show:true,src:""}
			]
		}
	},
	methods:{
		textChange(item){
			item.show = !item.show
		}
	}
}
</script>

<style scoped>
img{
	width: 100%;
	height: 100%;
}
.topThree{
	padding: 65px 20px 20px 20px;
}
.topFour{
	padding: 30px 20px 0px 20px;
}
.flag{
	position: absolute;
	left: 0;
	top: 15px;
}
.rank{
	background: linear-gradient(49deg,#dd1d1d,#f84141);
	border-color: #de1e1e;
	position: absolute;
	left: -6px;
	top: 0;
	width: 36px;
	height: 24px;
	line-height: 26px;
	border-width: 1px 0;
	font-size: 14px;
	color: #fff;
	text-align: center;
}
.rank:after{
	content: "";
	position: absolute;
	left: 0;
	top: 23px;
	width: 0;
	height: 0;
	border: 3px solid;
	border-color: #a98138 #a98138 transparent transparent;

}
.desc{
	color: #de1e1e;
	border-color: #de1e1e;
	height: 22px;
	line-height: 22px;
	background: #fff;
	padding: 0 10px 0 5px;
	margin-left: 30px;
	border: 1px solid #d3bf99;
	border-width: 1px 1px 1px 0;
	border-radius: 0 24px 24px 0;
}
.msg{
	font-size: 14px;
	height: 40px;
	line-height: 20px;
	margin: 5px 0 7px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: normal;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.rate{
	margin: 0 5px 0 0;
	display: inline-block;
	height: 18px;
	line-height: 18px;
	font-size: 12px;
	padding: 0 5px;
	margin: 0 3px;
	color: #ff943d;
	border: 1px solid #ff943d;
	background: #fff;
}
</style>