<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<el-row>
				<el-tabs v-model="activeName">
					<el-tab-pane label="人气店家" name="first"></el-tab-pane>
				</el-tabs>
			</el-row>
			<!--店铺-->
			<el-row style="border-bottom: 1px solid #dcdcdc;padding: 1% 0 2% 0" v-for="item in shopList" :key="item.id">
				<el-col>
					<el-col :span="8">
						<!--左侧图片-->
						<el-col :span="6">
							<el-button style="padding: 0;">
								<el-card :body-style="{ padding: '0px' }" shadow="hover">
									<img src="../../assets/cat.jpg" alt="">
								</el-card>
							</el-button>
						</el-col>
						<!--店家/机构简介-->
						<el-col :span="18" style="text-align: left;padding-left: 10%" id="info">
							<el-col>
								<router-link to="" style="text-decoration: none;color: #2c3e50;">宠物领养</router-link>
							</el-col>
							<el-col>
								<el-rate v-model="value5" disabled show-score text-color="#ff9900"
									score-template="{value} points">
								</el-rate>
							</el-col>
							<el-col>
								<i class="el-icon-location-outline"></i>
								<span>   上海 上海市 浦东新区</span>
							</el-col>
							<el-col>
								<span>联系人：居居</span>
							</el-col>
						</el-col>
						<el-col style="text-align: left;margin-top: 10%">
							<el-col>
								<span class="smallTitle">共有10条狗狗</span>
							</el-col>
							<el-col>
								<span class="smallTitle">好评率100%</span>
							</el-col>
						</el-col>
					</el-col>
					<!--寄养地方预览-->
					<el-col :span="16">
						<el-row>
							<el-col :xs={span:24,offset:0} :sm={span:8,offset:0} :md={span:8,offset:0} v-for="i in item.shop" :key="i.id">
								<el-button style="padding:0;margin: 0 5px;" @mouseenter.native="intoTheHouse(i)" @mouseleave.native="intoTheHouse(i)">
									<el-card :body-style="{ padding: '0px' }" shadow="hover">
										<div v-if="i.show" class="intoTheHouse">
											<span>进入店家</span>
										</div>
										<img src="../../assets/banner3.jpg" class="image">
										<div style="padding: 10px;overflow: hidden;">
											<div style="float: right;position:relative;">
												<span style="color: #fbc02d;font-size: 15px;">￥</span>
												<span style="color: #fbc02d;font-size: 25px;">{{price}}</span>
												<strong>中介费</strong>
											</div>
										</div>
									</el-card>
								</el-button>
							</el-col>
						</el-row>
					</el-col>
				</el-col>
			</el-row>
			<el-row>
				<el-col>
					<div class="block" style="margin: 5% 0 2% 0">
						<el-pagination
								layout="prev, pager, next"
								:total="10">
						</el-pagination>
					</div>
				</el-col>
			</el-row>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "CommodityBrowsingList",
	data(){
		return {
			price: Math.round(Math.random()*1000),
			activeName: 'first',
			shopList:[
				{
					id:1,
					shop:[
						{id:0,title:"铲屎官道具",show:false,src:""},
						{id:1,title:"到底能不能遍历啊",show:false,src:""},
						{id:2,title:"终于可以遍历了",show:false,src:""}
					],

				},
				{
					id:2,
					shop:[
						{id:0,title:"铲屎官道具",show:false,src:""},
						{id:1,title:"到底能不能遍历啊",show:false,src:""},
						{id:2,title:"终于可以遍历了",show:false,src:""}
					],

				},
				{
					id:3,
					shop:[
						{id:0,title:"铲屎官道具",show:false,src:""},
						{id:1,title:"到底能不能遍历啊",show:false,src:""},
						{id:2,title:"终于可以遍历了",show:false,src:""}
					],

				}

			],

			value5:4
		}
	},
	methods:{
		intoTheHouse(i){
			i.show = !i.show
		}
	}
}
</script>

<style scoped>
#info div{
	padding: 1% 0;
}
#info span{
	font-size: 14px;
}
.smallTitle{
	color: #888;
	padding: 1% 1%;
	display: block;
	font-size: 13px;
}
img{
	width: 100%;
	height: 100%;
}
.intoTheHouse{
	width: 100px;
	height: 30px;
	font-size: 20px;
	line-height: 30px;
	position: absolute;
	margin: 8%;
	background-color: rgba(0,0,0,0.3);
	color: white;
}
</style>