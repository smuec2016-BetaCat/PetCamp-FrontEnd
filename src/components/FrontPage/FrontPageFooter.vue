<template>
	<div class="footer">
		<el-row class="links">
			<el-col :span="16" :offset="4">
				<el-row type="flex" justify="center">
					<el-col v-for="item in foot" v-bind:key="item.id">
						<router-link class="link" to="" v-text="item.msg"></router-link>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="10">
				<span v-text="copyRight" class="copy-right"></span>
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
			copyRight:"Copyright © 2018 Group BetaCat. All rights reserved."
        }
    }
}
</script>

<style scoped>
.footer {
	background-color: black;
	padding-top: 20px;
}
.links .link {
	text-decoration: none;
	color: white;
}
.row-bg {
	margin-top: 30px;
	padding-bottom: 10px;
}
.copy-right {
	color: white;
}
</style>
