<template>
	<el-row>
		<el-col :span="20" :offset="2" style="display: flex">
			<!--等待组团新宠-->
			<el-col :md={span:17,offset:0} class="WhiteBoder">
				<el-col>
					<span class="title">等待组团新宠<i class="el-icon-caret-right"></i></span>
				</el-col>
				<el-col v-for="item in 6" :key="item" :md={span:8,offset:0}>
					<el-button>
						<el-card :body-style="{ padding: '10px' }" shadow="hover" style="position: relative;">
							<img src="../../assets/cat.jpg" class="image">
							<span class="GroupContent">这里有几只喵喵想被领走</span>
						</el-card>
					</el-button>
				</el-col>
			</el-col>
			<!--火热组团中-->
			<el-col :md={span:7,offset:0} class="WhiteBoder hidden-sm-and-down">
				<el-col>
					<span class="title">
						火热组团中 <i class="el-icon-caret-right"></i>
					</span>
				</el-col>
				<div>
					<el-col v-for="item in 5" :key="item" :md={span:24,offset:0} style="margin-bottom:5%">
						<el-button class="bg">
							<el-card :body-style="{ padding: '0px' }" shadow="hover" class="bg">
								<el-col :span="6">
									<img src="../../assets/cat.jpg" class="image">
								</el-col>
								<el-col :span="18">
									<el-col>
										<h3>异瞳猫还是少见</h3>
									</el-col>
									<el-col>
										<span>带走猫猫一家</span>
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
						火热组团中 <i class="el-icon-caret-right"></i>
					</span>
				</el-col>
				<div>
					<el-col v-for="item in 5" :key="item" :md={span:24,offset:0} style="margin-bottom:5%">
						<el-button class="bg">
							<el-card :body-style="{ padding: '0px' }" shadow="hover" class="bg">
								<el-col :span="6">
									<img src="../../assets/cat.jpg" class="image">
								</el-col>
								<el-col :span="18">
									<el-col>
										<h3>异瞳猫还是少见</h3>
									</el-col>
									<el-col>
										<span>打包带走这几只猫猫</span>
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

<script>
    export default {
        name: "FrontPageAdoptionInfo",
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