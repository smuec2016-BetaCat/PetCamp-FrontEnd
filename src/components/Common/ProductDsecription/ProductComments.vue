<template>
	<div>
		<el-col>
			<el-col :md="5" :xs="24" id="CommentPercent">
				<span>好评度：</span>
				<div>{{rate}}%</div>
			</el-col>
			<el-col :md="19" :xs="24" id="tag">
				<el-button v-for="i in 6" :key="i" style="padding: 0">
					<el-tag type="info">遍历出6个tag</el-tag>
				</el-button>
			</el-col>
		</el-col>
		<el-col style="border-bottom: 1px solid #ddd;padding: 15px" v-for="i in comments" :key="i.id">
			<el-col :md="5" :xs="12">
				<div class="UserComments" style="display: flex">
					<img src="https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg"
						width="25px" height="25px" alt="UsrName" style="border-radius: 50%;margin-right: 5px;">
					<span style="margin: auto" v-text="i.userName"></span>
				</div>
				<div style="display: flex;">
					<div style="width: 25px"></div>
					<span style="margin: auto" v-text="i.UserClass"></span>
				</div>
			</el-col>
			<el-col :md="19" :xs="24" id="comments">
				<el-rate
						v-model="i.commentRate"
						disabled
						show-score
						text-color="#ff9900"
						score-template="{value} points">
				</el-rate>
				<el-col>
					<span v-text="i.message"></span>
				</el-col>
				<el-col>
					<span style="margin: 0">评论时间：{{i.date}}</span>
				</el-col>
			</el-col>
		</el-col>
		<!--comment-->
		<el-col style="margin: 5% 0">
			<el-col :md="5" :xs="12">
				<div class="UserComments" style="display: flex">
					<img src="https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg"
						width="25px" height="25px" alt="UsrName" style="border-radius: 50%;margin-right: 5px;">
					<span style="margin: auto">UserName</span>
				</div>
				<div style="display: flex;">
					<div style="width: 25px"></div>
					<span style="margin: auto">vip1</span>
				</div>
			</el-col>
			<el-col :span="19"  :xs="24" style="text-align: left">
				<el-col style="margin: 0 0 10px 0">
					<el-col :md="4" :xs="6">
						<span>选择评分</span>
					</el-col>
					<el-col :md="14" :xs="18">
						<el-rate v-model="commentRate" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
					</el-col>
				</el-col>
				<el-col>
					<el-col :md="18"  :xs="24">
						<textarea rows="3" v-model="comment" placeholder="在此添加您的评论" id="myComment"></textarea>
					</el-col>
					<el-col :md="4" style="float: right" class="hidden-xs-only">
						<el-button style="height: 100%" type="primary" @click="raiseComment">发表评论</el-button>
					</el-col>
					<el-col :span="10" class="hidden-sm-and-up" style="margin: 20px 0 70px 0">
						<el-button style="height: 100%" type="primary" @click="raiseComment">发表评论</el-button>
					</el-col>
				</el-col>
			</el-col>
		</el-col>
	</div>

</template>

<script>
import axios from 'axios'
export default {
	name: "ProductComments",
	data(){
		return {
			rate: parseInt(Math.random()*100),
			date: new Date(),
			comment: null,
			commentRate:null,
			comments:[
				{id:1,userName:"我是一只羊",userClass:"VIP1",message:"我觉得这个很不错，很可惜现在页面只能写死",date:"1997年11月22日",commentRate:5},
				{id:2,userName:"这里的数据需要从后端来",userClass:"VIP2",message:"我觉得这个很不错，很可惜现在页面只能写死",date:"1997年7月22日",commentRate:4},
				{id:3,userName:"后端需要给我点数据",userClass:"VIP1",message:"我觉得这个很不错，很可惜现在页面只能写死",date:"1997年11月29日",commentRate:3},
				{id:4,userName:"我会给后端发送请求",userClass:"VIP3",message:"我觉得这个很不错，很可惜现在页面只能写死",date:"1997年5月22日",commentRate:5},
				{id:5,userName:"我真是聪明",userClass:"VIP1",message:"我觉得这个很不错，很可惜现在页面只能写死",date:"2008年11月22日",commentRate:2},

			]
		}
	},
	methods:{
		getcounts(){
			this.rate = parseInt(Math.random()*100)
		},
		raiseComment(){
			let num = this.comments[this.comments.length-1].id + 1
            if (this.comment === null || this.comment === ""){
                this.$message.warning("请输入评论内容")
            }
            else if (this.commentRate === null || this.commentRate === 0){
                this.$message.warning("请您评分")
            }
            else{
                this.$message.warning("正在上传")
                axios.post('/',{
                    comment:this.comment,
                    commentRate:this.commentRate
                })
                    .then(response=>{
                        this.comments.push({
                            id:num,
                            userName:"我真是聪明",
                            userClass:"VIP1",
                            message:this.comment,
                            date: new Date(),
                            commentRate:this.commentRate
                        })
                        this.$message({
                            message:response+"上传成功",
                            type:"success"
                        })
                    })
                    .catch(error=>{
                        this.$message.error(error.message)
                    })
            }
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
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
#tag{
	text-align: left;
}
#tag button{
	margin: 1% 1%;
}
#tag span{

}
.UserComments span{
	color: #666;
}
#comments{
	text-align: left;
}
#comments span{
	margin: 2% 0;
	display: block;
}
#myComment:focus{
	background-color:#f0f3ef;
}
#myComment{
	display: block;
	resize: vertical;
	padding: 5px 15px;
	line-height: 1.5;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	width: 100%;
	font-size: inherit;
	color: #606266;
	background-color: #fff;
	background-image: none;
	border: 1px solid #dcdfe6;
	border-radius: 4px;
	-webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
</style>