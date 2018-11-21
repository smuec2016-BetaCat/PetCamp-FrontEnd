<template>
	<el-main>
		<el-menu class="el-menu-demo" mode="horizontal" background-color="green" >访问记录</el-menu>
		<el-table style="width: 100%" :data="tableData1">
			<el-table-column label="访问总次数" prop="allCounts"></el-table-column>
			<el-table-column label="今日访问量" prop="todayCount"></el-table-column>
		</el-table>
	</el-main>
</template>

<script>
    const axios = require("axios")
    export default {
        name: "AccessRecording",
        data(){
            return {
                tableData1:[{allCounts:0,todayCount:"暂时无法统计"}]
            }
        },
        methods:{
            getcounts:function () {
                axios
                    .get("http://itsyuekao.com:5000/api/v0/counter")
                    .then(response => {
                        this.tableData1[0].allCounts = response.data.count
                    })
                    .catch(error => {
                        console.log(error)
                        console.log("非局域网ajax无法请求")
                    })
                    .then(function() {
                        console.log("ajax has been done")
                    })
            }
        },
        created: function() {
            this.getcounts()
            this.t = setInterval(this.getcounts, 2000)
        },
        beforeDestroy: function() {
            clearInterval(this.t)
        }
    }
</script>

<style scoped>

</style>