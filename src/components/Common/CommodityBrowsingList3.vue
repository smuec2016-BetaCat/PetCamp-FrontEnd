<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<el-row>
				<el-tabs v-model="activeName">
					<el-tab-pane label="热门商品" name="first"></el-tab-pane>
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
		<el-col :span="20" :offset="2">
			<el-row style="margin-top: 5%">
				<el-tabs v-model="activeName">
					<el-tab-pane label="其他商品" name="first"></el-tab-pane>
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
		name: "CommodityBrowsingList3"
	}
</script>

<style scoped>

</style>