<template>
	<el-row>
		<el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :class="{'card':!isPc}">
			<el-row class="hidden-xs-only">
				<el-tabs v-model="activeName">
					<el-tab-pane label="人气店家" name="first"></el-tab-pane>
				</el-tabs>
			</el-row>
			<!--店铺-->
			<el-row style="padding: 1% 0 2% 0" v-for="item in shopList" :key="item.id">
				<!--mobile-->
				<el-col class="hidden-sm-and-up">
					<el-col>
						<!--店家/机构简介-->
						<el-col style="text-align: left;margin-left: 10px">
							<el-col :span="2">
								<img src="../../assets/cat.jpg" alt="">
							</el-col>
							<el-col :span="16" style="margin-left: 20px">
								<h6 style="margin: 0;line-height: 35px" v-text="item.shopName"></h6>
							</el-col>
							<el-col :span="2" >
								<el-button type="warning" plain round size="mini" @click="goto">进店</el-button>
							</el-col>
						</el-col>
					</el-col>
					<!--寄养地方预览-->
					<el-col>
						<el-row>
							<el-col :xs={span:8,offset:0} v-for="i in item.shop" :key="i.id">
								<el-button style="padding:0;border-radius: 5px" @mouseenter.native="intoTheHouse(i)" @mouseleave.native="intoTheHouse(i)" @click.native="goto">
									<el-card :body-style="{ padding: '0px' }" shadow="hover">
										<div v-if="i.show" class="intoTheHouse">
											<span>进入店家</span>
										</div>
										<img src="http://viptail.image.alimmdn.com/files/official_web/img/sh002-f.jpg" class="image">
										<div style="padding: 10px;overflow: hidden;">
											<div style="float: right;position:relative;">
												<span style="color: #fbc02d;font-size: 15px;">￥</span>
												<span style="color: #fbc02d;font-size: 25px;">{{i.price}}</span>
												<strong>起/每晚</strong>
											</div>
										</div>
									</el-card>
								</el-button>
							</el-col>
						</el-row>
					</el-col>
				</el-col>
				<!--pc-->
				<el-col class="hidden-xs-only">
					<el-col :md="8">
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
								<router-link to="" style="text-decoration: none;color: #2c3e50;" v-text="item.shopName"></router-link>
							</el-col>
							<el-col>
								<el-rate v-model="item.rates" disabled show-score text-color="#ff9900" score-template="{value} points"></el-rate>
							</el-col>
							<el-col>
								<i class="el-icon-location-outline"></i>
								<span v-text="item.place"></span>
							</el-col>
							<el-col>
								<span v-text="item.contacts"></span>
							</el-col>
						</el-col>
						<el-col style="text-align: left;margin-top: 10%">
							<el-col>
								<span class="smallTitle">共可容纳{{item.capacity}}条狗狗</span>
							</el-col>
							<el-col>
								<span class="smallTitle">好评度{{item.rates}}</span>
							</el-col>
						</el-col>
					</el-col>
					<!--寄养地方预览-->
					<el-col :md="16">
						<el-row>
							<el-col :xs={span:24,offset:0} :sm={span:8,offset:0} :md={span:8,offset:0} v-for="i in item.shop" :key="i.id">
								<el-button style="padding:0;margin:5px;" @mouseenter.native="intoTheHouse(i)" @mouseleave.native="intoTheHouse(i)" @click.native="goto">
									<el-card :body-style="{ padding: '0px' }" shadow="hover">
										<div v-if="i.show" class="intoTheHouse">
											<span>进入店家</span>
										</div>
										<img src="http://viptail.image.alimmdn.com/files/official_web/img/sh002-f.jpg" class="image">
										<div style="padding: 10px;overflow: hidden;">
											<div style="float: right;position:relative;">
												<span style="color: #fbc02d;font-size: 15px;">￥</span>
												<span style="color: #fbc02d;font-size: 25px;">{{i.price}}</span>
												<strong>起/每晚</strong>
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
	name: "CommodityBrowsingList",
	data(){
		return {
			price: Math.round(Math.random()*1000),
			activeName: 'first',
			shopList:[
				{
					id:4,
					shopName:"寄养小屋",
					rates:3.7,
					place:"江苏南京",
					contacts:"犇犇",
					capacity:5,
					shop:[
						{id:1,title:"铲屎官道具",show:false,src:"",price: 100},
						{id:2,title:"到底能不能遍历啊",show:false,src:"",price:100},
						{id:3,title:"终于可以遍历了",show:false,src:"",price:100}
					]
				}

			],

			value5:4
		}
	},
	methods:{
		intoTheHouse(i){
			i.show = !i.show
		},
		goto(){
			this.$router.push({path:"/PurchasePage/ProductComments"})
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
.card{
	padding: 0 20px;
}
</style>