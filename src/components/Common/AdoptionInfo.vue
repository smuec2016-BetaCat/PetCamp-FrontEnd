<template>
	<el-row>
		<el-col :span="20" :offset="2" type="flex">
			<el-col :span="18">宠物领养组团信息</el-col>
			<el-col :span="6">宠物领养排行榜</el-col>
		</el-col>

		<el-col :span="20" :offset="2">
			<el-col :span="18">
				<el-row>
					<el-col :span=8 v-for="item in 6" :key="item">
						<el-button @click="goTo">
							<el-card :body-style="{ padding: '10px' }">
								<img src="../../assets/cat.jpg" class="image">
								<div style="padding: 14px;">
									<span>我是一直喵喵</span>
									<div class="bottom clearfix">
										<time class="time">{{ currentDate }}</time>
									</div>
								</div>
							</el-card>
						</el-button>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="6">
				<el-table
						:data="tableData"
						style="width: 100%">
					<el-table-column
							prop="name"
							label="姓名"
							width="80">
					</el-table-column>
					<el-table-column
							prop="address"
							label="地址">
					</el-table-column>
				</el-table>
			</el-col>
		</el-col>
	</el-row>
</template>

<script>
    export default {
        name: "FrontPageAdoptionInfo",
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
		padding:0;
	}
</style>