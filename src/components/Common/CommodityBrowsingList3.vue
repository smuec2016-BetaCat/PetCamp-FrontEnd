<template>
	<el-row>
		<el-col>
			<el-col :span="20" :offset="2">
				<el-col :span="8" v-for="item in top3" :key="item.id">
					<el-button style="padding: 0;position: relative;">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<el-col class="topThree">
								<div class="flag">
									<div class="rank" v-text="item.id"></div>
									<div class="desc" v-text="item.title"></div>
								</div>
								<el-col :span="10">1</el-col>
								<el-col :span="14">2</el-col>
							</el-col>
						</el-card>
					</el-button>
				</el-col>
			</el-col>
			<el-col>
				<el-col></el-col>
				<el-col></el-col>
				<el-col></el-col>
				<el-col></el-col>
				<el-col></el-col>
			</el-col>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "CommodityBrowsingList3",
	data(){
		return {
			top3:[{id:1,title:"热卖指数100"},{id:2,title:"热卖指数95"},{id:3,title:"热卖指数90"}]
		}
	}
}
</script>

<style scoped>
.topThree{
	width: 351px;
	height: 160px;
	padding: 65px 20px 20px 20px;
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
</style>