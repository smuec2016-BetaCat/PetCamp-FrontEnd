<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<el-row>
				<el-col :xs={span:24,offset:0} :sm={span:8,offset:0} :md={span:6,offset:0} v-for="i in 20" :key="i">
					<el-button style="padding:0;margin: 20px 10px;">
						<el-card :body-style="{ padding: '0px' }" shadow="hover">
							<img src="http://viptail.image.alimmdn.com/files/official_web/img/sh002-f.jpg" class="image">
							<div style="padding: 10px;overflow: hidden;">
								<div id="myImg1">
									<img style="border-radius: 20px;" src="http://viptail.image.alimmdn.com/files/official_web/img/sh002-u.jpg" alt="">
								</div>
								<div class="bottom clearfix"  style="float: left">
									<img id="myImg2" src="http://viptail.image.alimmdn.com/files/official_web/img/home_icon_family.png" alt="">
									<span id="house">某某人家</span>
									<div style="text-align: left;margin: 5px 10px">
										<i class="el-icon-location-outline"></i>
										<span id="place">上海</span>
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
			price: Math.round(Math.random()*1000)
		}
	}
}
</script>

<style scoped>
img{
	width: 100%;
	height: 100%;
}
#myImg1{
	width: 50px;
	height: 50px;
	float: left;
	border-radius:25px
}
#myImg2{
	width: 20px;
	height: 25px;
	float: left;
	margin-left: 10px;
}
#house{
	display: inline-block;
	margin: 5px 5px 5px 5px;
	font-size: 18px;
}
#place{
	display: inline-block;
}
</style>