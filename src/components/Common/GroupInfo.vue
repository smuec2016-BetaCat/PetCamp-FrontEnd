<template>
	<div>
		<el-row>
			<el-col :span="20" :offset="2" id="PetSide">
				<span id="PetSide1">宠物领养</span>
				<br>
			</el-col>
			<el-col :span="20" :offset="2">
				<el-col :md={span:8} :sm={span:24} class="MyMaxHeight">
					<el-col class="MyMaxHeight2" v-for="i in 2" :key="i">
						<el-button>
							<el-card :body-style="{ padding: '0px' }" shadow="hover" style="max-height: 200px">
								<img src="../../assets/banner3.jpg" alt="">
							</el-card>
						</el-button>
					</el-col>
				</el-col>
				<el-col :md={span:8} :sm={span:24} class="MyMaxHeight" style="display: flex">
					<el-button style="margin: auto;width: 100%">
						<el-card :body-style="{ padding: '0px' }" shadow="hover" style="max-height: 400px">
							<img src="../../assets/banner2.jpg" alt="">
						</el-card>
					</el-button>
				</el-col>
				<el-col :md={span:8} :sm={span:24} class="MyMaxHeight">
					<el-col v-for="item in 4" :key="item" :md={span:24,offset:0}>
						<el-button class="bg">
							<el-card :body-style="{ padding: '0px' }" shadow="hover" class="bg" style="max-height: 100px">
								<el-col :span="6">
									<img src="../../assets/dog.jpg" class="image" alt="img">
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
				</el-col>
			</el-col>
		</el-row>
	</div>
</template>


<style scoped>
img{
	width: 100%;
	height: 100%;
}
button {
	padding: 0;
	margin: 0;
}
.bg{
	background-color: #f6f6f6;
}
.bg :hover{
	background-color: #eeefed;
}
.MyMaxHeight{
	height: 400px;
	padding: 4px;
	margin-bottom: 5%;
}
.MyMaxHeight2{
	height: 200px;
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
	left: 25%;
}
#PetSide #PetSide1:after{
	right: 25%;
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
