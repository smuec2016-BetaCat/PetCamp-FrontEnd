<template>
	<div>
		<el-row>
			<el-col :span="20" :offset="2" id="PetSide">
				<span id="PetSide1">宠物周边</span>
				<br>
			</el-col>
			<el-col :span="20" :offset="2">
				<el-col :span="8" v-for="i in 3" :key="i">
					<el-button style="margin: 5px">
						<el-card :body-style="{ padding: '0px' }" shadow="hover" style="position: relative;">
							<img src="../../../assets/banner1.jpg" class="image">
						</el-card>
					</el-button>
				</el-col>
			</el-col>
		</el-row>
		<br><br><br>
	</div>
</template>

<script>
	export default {
		name: "FrontPageSupplies"
	}
</script>

<style scoped>
.time {
	font-size: 13px;
	color: #999;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.button {
	padding: 0;
	float: right;
}

.image {
	width: 100%;
	display: block;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}
.el-button{
	margin: 5% 1%;
	padding: 0;
}
#PetSide #PetSide1{
	margin: 0;
	font-family: 'fzzzh', sans-serif;
	font-size: 28px;
	position: relative;
	display: block;
}
#PetSide #PetSide1:before,#PetSide #PetSide1:after{
	content: "";
	position: absolute;
	background: #222;
	width: 5%;
	height: 3px;
	top: 50%;
}
#PetSide #PetSide1:before{
	left: 37%;
}
#PetSide #PetSide1:after{
	right: 37%;
}
</style>