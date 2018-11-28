<template>
	<div>
		<el-col class="title">
			<span>商品评价</span>
		</el-col>
		<el-col>
			<el-col :span="5" id="CommentPercent">
				<span>好评度：</span>
				<div>{{rate}}%</div>
			</el-col>
			<el-col :span="19" id="tag">
				<el-button v-for="i in 14" :key="i" style="padding: 0">
					<el-tag type="info">遍历出14个tag</el-tag>
				</el-button>
			</el-col>
		</el-col>
		<el-col style="border-bottom: 1px solid #ddd;padding: 15px" v-for="i in 10" :key="i">
			<el-col :span="5">
				<div id="UserComments" style="display: flex">
					<img src="https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg"
						width="25px" height="25px" alt="UsrName" style="border-radius: 50%;margin-right: 5px;">
					<span style="margin: auto">UserName</span>
				</div>
				<div style="display: flex;">
					<div style="width: 25px"></div>
					<span style="margin: auto">vip1</span>
				</div>
			</el-col>
			<el-col :span="19" id="comments">
				<el-rate
						v-model="value5"
						disabled
						show-score
						text-color="#ff9900"
						score-template="{value} points">
				</el-rate>
				<el-col>
					<span>真的很不错，很放心的领养，很放心的寄养，很可爱的宠物</span>
				</el-col>
				<el-col>
					<span style="margin: 0">评论时间：{{date}}</span>
				</el-col>
			</el-col>
		</el-col>
	</div>

</template>

<script>
export default {
	name: "ProductComments",
	data(){
		return {
			rate: parseInt(Math.random()*100),
			value5:3.7,
			date: new Date()
		}
	},
	methods:{
		getcounts(){
			this.rate = parseInt(Math.random()*100)
		}
	}
}
</script>

<style scoped>
.title{
	margin-top: 2%;
}
#CommentPercent {
	padding: 15px 0 0 40px;
	float: left;
	text-align: left;
}
#CommentPercent span{
	font-size: 12px;
	color: #666;
	font-weight: 400;
}
#CommentPercent div{
	line-height: 110%;
	font-size: 45px;
	color: #f7ba2a;
	font-family: arial;
}
#tag{
	text-align: left;
}
#tag button{
	margin: 1% 1%;
}
#tag span{

}
#UserComments span{
	color: #666;
}
#comments{
	text-align: left;
}
#comments span{
	margin: 2% 0;
	display: block;
}
</style>