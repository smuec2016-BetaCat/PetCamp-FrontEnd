<template>
	<div>
		<el-row>
			<el-col :span="20" :offset="2">
				<el-row type="flex" justify="center">
					<el-col v-for="item in foot" v-bind:key="item.id">
						| <router-link to="" v-text="item.msg"></router-link> |
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<br><br>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="10">
				<span v-text="copyWrite"></span>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: "FrontPageFooter",
    data(){
        return {
			foot:[
				{id:1,msg:"保障服务"},
				{id:2,msg:"客服热线"},
				{id:3,msg:"团队介绍"},
                {id:4,msg:"关于我们"},
                {id:5,msg:"联系我们"},
				{id:6,msg:"创业理念"},
                {id:7,msg:"隐私政策"},
                {id:8,msg:"爱宠讨论社区"},
                {id:9,msg:"友情链接"}
				],
			copyWrite:"Copyright © 2018 Group BetaCat. All rights reserved."
        }
    }
}
</script>

<style scoped>
a{
	color:#666;
	text-decoration: none;
	font: 13px Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;
}
span{
	color:#666;
	font: 13px Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;
}
</style>
