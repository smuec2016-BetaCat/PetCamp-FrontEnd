<template>
	<!--<el-row>-->
		<!--<el-col :span="20" :offset="2">-->
			<!--<el-col :span="6">-->
				<!--<el-carousel indicator-position="outside">-->
					<!--<el-carousel-item v-for="item in 4" :key="item">-->
						<!--<h3><img src="../../assets/banner1.jpg" alt=""></h3>-->
					<!--</el-carousel-item>-->
				<!--</el-carousel>-->
			<!--</el-col>-->
			<!--<el-col :span="18">-->
				<!--<pic-zoom url="static/imac2.jpg" :scale="3"></pic-zoom>-->
			<!--</el-col>-->
		<!--</el-col>-->
	<!--</el-row>-->
	<div class="pic-box" style="width: 500px;height: 500px;">
		<pic-zoom url="static/imac2.jpg" :scale="3"></pic-zoom>
	</div>
</template>

<script>
import PicZoom from 'vue-piczoom'
export default {
	name: "ProductDescriptionPage",
	components: { PicZoom }
}
</script>

<style scoped>

</style>