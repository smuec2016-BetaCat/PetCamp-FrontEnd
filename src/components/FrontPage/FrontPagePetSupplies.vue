<template>
	<el-row>
		<el-col :span="20" :offset="2" type="flex">
			<el-col :span="18">宠物周边</el-col>
		</el-col>
		<el-col :span="20" :offset="2">
			<el-row>
				<el-col :span="6" v-for="item in 8" :key="item">
					<el-button @click="goTo">
						<el-card :body-style="{ padding: '10px' }" shadow="hover">
							<img src="../../assets/petSupplies.jpg" class="image">
							<div style="padding: 14px;">
								<span>铲屎官道具</span>
								<div class="bottom clearfix">
									<time class="time">{{ currentDate }}</time>
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
        name: "FrontPagePetSupplies",
        data() {
            return {
                currentDate: new Date(),
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
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
</style>