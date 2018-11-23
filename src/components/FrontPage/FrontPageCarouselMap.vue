<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<el-carousel :interval="5000" arrow="always" height="400px">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3>
						<img src="http://i1.adis.ws/i/petsathome/bf-assets-updated-slider-generic-1?w=960&qlt=95" alt="">
					</h3>
				</el-carousel-item>
			</el-carousel>
		</el-col>
	</el-row>
</template>
<style scoped>
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}
</style>

<script>
    export default {
        name: "FrontPageCarouselMap",
		data() {
			return {
				CarouseMap: [
					{id:0,title:"",src:""},
					{id:1,title:"",src:""},
					{id:2,title:"",src:""}
				]
			}
		}
    }
</script>
