<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<el-carousel :interval="4000" type="card" height="300px">
				<el-carousel-item v-for="item in 6" :key="item">
					<h3>{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</el-col>
	</el-row>

</template>

<style scoped>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
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
        name: "FrontPageCarouselMap"
    }
</script>
