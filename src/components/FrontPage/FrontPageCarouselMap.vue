<!--suppress ALL -->
<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<el-carousel :interval="5000" arrow="always" height="400px">
				<el-carousel-item v-for="item in CarouseMap" :key="item.id">
					<h3>
						<img :src="item.img" alt="">
					</h3>
				</el-carousel-item>
			</el-carousel>
		</el-col>
	</el-row>
</template>
<!--http://i1.adis.ws/i/petsathome/bf-assets-updated-slider-generic-1?w=960&qlt=95-->

<script>
// const axios = require("axios")
export default {
    name: "FrontPageCarouselMap",
	data() {
		return {
			CarouseMap: [
				{id:0,title:"1",img:""},
				{id:1,title:"2",img:""},
				{id:2,title:"3",img:""},
				{id:3,title:"4",img:""}
			]
		}
	},
	// methods:{
	// 	getimg(){
	// 		axios.post("/api", { })
	// 			.then(response=> {
	// 				this.CarouseMap = response.data.CarouseMap
	// 			})
	// 			.catch(error=> {
	// 				console.log(error)
	// 			})
	// 	}
	// },
	// created: function() {
	// 	this.getimg()
	// }
}
</script>

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
