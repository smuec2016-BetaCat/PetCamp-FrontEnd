<template>
	<el-row>
		<el-col :span="20" :offset="2" style="display: flex">
			<!--宠物领养-->
			<el-col :md={span:17,offset:0} class="WhiteBoder">
				<el-col>
					<span class="title">宠物领养<i class="el-icon-caret-right"></i></span>
				</el-col>
				<el-col v-for="item in 6" :key="item" :md={span:8,offset:0}>
					<el-button style="margin: 10px">
						<el-card :body-style="{ padding: '10px' }" shadow="hover" style="position: relative;">
							<img src="../../assets/dog.jpg" class="image">
							<span class="GroupContent">有15只狗狗等待领养</span>
						</el-card>
					</el-button>
				</el-col>
			</el-col>
			<!--宠物心愿单-->
			<el-col :md={span:7,offset:0} class="WhiteBoder hidden-sm-and-down">
				<el-col>
					<span class="title">
						宠物领养心愿单 <i class="el-icon-caret-right"></i>
					</span>
				</el-col>
				<div>
					<el-col v-for="item in 5" :key="item" :md={span:24,offset:0} style="margin-bottom:5%">
						<el-button class="bg">
							<el-card :body-style="{ padding: '0px' }" shadow="hover" class="bg">
								<el-col :span="6">
									<img src="../../assets/dog.jpg" class="image">
								</el-col>
								<el-col :span="18">
									<el-col>
										<h3>来自东方的神秘力量</h3>
									</el-col>
									<el-col>
										<span>有15只狗狗等待领养</span>
									</el-col>
								</el-col>
							</el-card>
						</el-button>
					</el-col>
				</div>
			</el-col>
			<!--适配中等屏幕-->
		</el-col>
		<el-col :span="20" :offset="2" style="margin-top: 20px" class="hidden-md-and-up">
			<el-col class="WhiteBoder">
				<el-col>
					<span class="title">
						宠物领养心愿单 <i class="el-icon-caret-right"></i>
					</span>
				</el-col>
				<div>
					<el-col v-for="item in 5" :key="item" :md={span:24,offset:0} style="margin-bottom:5%">
						<el-button class="bg">
							<el-card :body-style="{ padding: '0px' }" shadow="hover" class="bg">
								<el-col :span="6">
									<img src="../../assets/dog.jpg" class="image">
								</el-col>
								<el-col :span="18">
									<el-col>
										<h3>来自东方的神秘力量</h3>
									</el-col>
									<el-col>
										<span>有15只狗狗等待领养</span>
									</el-col>
								</el-col>
							</el-card>
						</el-button>
					</el-col>
				</div>
			</el-col>
		</el-col>

	</el-row>
</template>


<style scoped>
img{
	width: 100%;
	height: 100%;
}
button {
	padding: 0;
}
.GroupContent{
	background:white;
	left: 30%;
	padding: 10px 15px;
	pointer-events: none;
	position: absolute;
	text-align: center;
	top: 50%;
	z-index: 9;
}
.perfusion{
	width: 100%;
	height: 100%;
}
.title{
	margin-bottom: 15px;
	font-family: 'Yesteryear', cursive;
	font-size: 30px;
	display: block;
}
.bg{
	background-color: #f6f6f6;
}
.bg :hover{
	background-color: #eeefed;
}
.WhiteBoder{
	padding: 20px;
	background: white;
	margin-left: 2%;
}
</style>

<script>
    export default {
        name:"GroupInfo",
        data() {
            return {

            }
        },
		methods:{
            goTo(){
               alert("haha")
            }
		}
    }
</script>