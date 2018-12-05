<template>
	<el-main>
		<el-menu class="el-menu-demo" mode="horizontal" background-color="green">访问详情</el-menu>
		<el-table
				:data="tableData2"
				style="width: 100%"
				:row-class-name="tableRowClassName">
			<el-table-column
					prop="date"
					label="时间"
					width="180">
			</el-table-column>
			<el-table-column
					prop="name"
					label="IP"
					width="180">
			</el-table-column>
			<el-table-column
					prop="address"
					label="地址">
			</el-table-column>
		</el-table>
	</el-main>
</template>

<script>
    export default {
        name: "AccessDetails",
        data(){
            return {
                tableData1:[{allCounts:0,todayCount:"暂时无法统计"}],
                activeIndex: '1',
                activeIndex2: '1',
                tableData2: [{
                    date: '2018年11月21日',
                    name: '192.168.1.1',
                    address: '上海市普陀区',
                },
                    {
                        date: '2018年11月21日',
                        name: '192.168.1.1',
                        address: '上海市普陀区',
                    },
                    {
                        date: '2018年11月21日',
                        name: '192.168.1.1',
                        address: '上海市普陀区',
                    }]
            }
        },
        methods:{
			tableRowClassName({rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        }
    }
</script>

<style scoped>

</style>