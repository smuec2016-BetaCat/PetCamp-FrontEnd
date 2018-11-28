<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<el-row>
				<el-tabs v-model="activeName">
					<el-tab-pane label="人气店家" name="first"></el-tab-pane>
				</el-tabs>
			</el-row>
			<el-row>
				<el-col :xs={span:24,offset:0} :sm={span:8,offset:0} :md={span:6,offset:0} v-for="i in shop" :key="i.id">
					<el-button style="padding:0;margin: 20px 10px;" @mouseenter.native="intoTheHouse(i)" @mouseleave.native="intoTheHouse(i)">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<div v-if="i.show" class="intoTheHouse">
								<span>进入店家</span>
							</div>
							<img src="http://viptail.image.alimmdn.com/files/official_web/img/sh002-f.jpg" class="image">
							<div style="padding: 10px;overflow: hidden;">
								<div class="myImg1">
									<img style="border-radius: 20px;" src="http://viptail.image.alimmdn.com/files/official_web/img/sh002-u.jpg" alt="">
								</div>
								<div class="bottom clearfix"  style="float: left">
									<img class="myImg2" src="http://viptail.image.alimmdn.com/files/official_web/img/home_icon_family.png" alt="">
									<span class="house">某某人家</span>
									<div style="text-align: left;margin: 5px 10px">
										<i class="el-icon-location-outline"></i>
										<span class="place">上海</span>
									</div>
								</div>
								<div style="float: right;position:relative;bottom: 8px">
									<span style="color: #fbc02d;font-size: 18px;">￥</span>
									<span style="color: #fbc02d;font-size: 35px;">{{price}}</span>
									<strong>起/每晚</strong>
								</div>
							</div>
						</el-card>
					</el-button>
				</el-col>
			</el-row>
		</el-col>
		<el-col :span="20" :offset="2">
			<el-row style="margin-top: 5%">
				<el-tabs v-model="activeName">
					<el-tab-pane label="其他店家" name="first"></el-tab-pane>
				</el-tabs>
			</el-row>
			<el-row>
				<el-col :xs={span:24,offset:0} :sm={span:8,offset:0} :md={span:6,offset:0} v-for="i in 8" :key="i">
					<el-button style="padding:0;margin: 20px 10px;">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<img src="http://viptail.image.alimmdn.com/files/official_web/img/sh002-f.jpg" class="image">
							<div style="padding: 10px;overflow: hidden;">
								<div class="myImg1">
									<img style="border-radius: 20px;" src="http://viptail.image.alimmdn.com/files/official_web/img/sh002-u.jpg" alt="">
								</div>
								<div class="bottom clearfix"  style="float: left">
									<img class="myImg2" src="http://viptail.image.alimmdn.com/files/official_web/img/home_icon_family.png" alt="">
									<span class="house">某某人家</span>
									<div style="text-align: left;margin: 5px 10px">
										<i class="el-icon-location-outline"></i>
										<span class="place">上海</span>
									</div>
								</div>
								<div style="float: right;position:relative;bottom: 8px">
									<span style="color: #fbc02d;font-size: 18px;">￥</span>
									<span style="color: #fbc02d;font-size: 35px;">{{price}}</span>
									<strong>起/每晚</strong>
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
	name: "CommodityBrowsingList",
	data(){
		return {
			price: Math.round(Math.random()*1000),
			activeName: 'first',
			shop:[
				{id:0,title:"铲屎官道具",show:false,src:""},
				{id:1,title:"到底能不能遍历啊",show:false,src:""},
				{id:2,title:"终于可以遍历了",show:false,src:""},
				{id:3,title:"能不能有个悬浮效果啊",show:false,src:""},
				{id:4,title:"字数不能超过10个",show:false,src:""},
				{id:5,title:"最终决定直接尝试json文件",show:false,src:""},
				{id:6,title:"突然发现就可以了",show:false,src:""},
				{id:7,title:"可以只买单个物品了",show:false,src:""}
			]
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
img{
	width: 100%;
	height: 100%;
}
.myImg1{
	width: 50px;
	height: 50px;
	float: left;
	border-radius:25px
}
.myImg2{
	width: 20px;
	height: 25px;
	float: left;
	margin-left: 10px;
}
.house{
	display: inline-block;
	margin: 5px 5px 5px 5px;
	font-size: 18px;
}
.place{
	display: inline-block;
}
.intoTheHouse{
	width: 100px;
	height: 30px;
	font-size: 20px;
	line-height: 30px;
	position: absolute;
	margin: 7%;
	background-color: rgba(0,0,0,0.3);
	color: white;
}
</style>