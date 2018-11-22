<template>
	<div>
		<el-row>
			<el-col :span="6"><i class="el-icon-picture"></i>企业文化</el-col>
			<el-col :span="6"><i class="el-icon-picture"></i>企业文化</el-col>
			<el-col :span="6"><i class="el-icon-picture"></i>企业文化</el-col>
			<el-col :span="6"><i class="el-icon-picture"></i>企业文化</el-col>
		</el-row>
		<hr class="hr-up">
		<el-row>
			<el-col :offset="2" :span="20">
				<el-col :span="4" v-for="item in items" :key="item.id">
					<h5 v-text="item.title"></h5>
					<ul v-for="msg in item.message" :key="msg.id">
						<li><router-link to="" v-text="msg.link"></router-link></li>
					</ul>
				</el-col>
			</el-col>
		</el-row>
		<hr class="hr-down">
		<br>
	</div>

</template>

<script>
    export default {
        name: "FrontPageFeatures",
        data() {
            return {
                msg:`这是一个功能介绍组件暂时还没有更多的介绍昨天出去玩了一天一个晚上做出来的网页看上去非常粗糙而我又是一个挑剔样式的人非常不适`,
				items:[
					{id:0,title:"消费指南",message:[
						{id:1,link:"消费流程"},{id:2,link:"会员介绍"},{id:3,link:"常见问题"},{id:4,link:"联系客服"}]
					},
                    {id:1,title:"物流方式",message:[
                            {id:1,link:"上门自提"},{id:2,link:"配送服务查询"},{id:3,link:"配送费收取标准"},{id:4,link:"海外配送"}]
                    },
                    {id:2,title:"支付方式",message:[
                            {id:1,link:"货到付款"},{id:2,link:"在线支付"},{id:3,link:"分期付款"},{id:4,link:"邮局汇款"},{id:5,link:"公司转账"}]
                    },
                    {id:3,title:"售后服务",message:[
                            {id:1,link:"售后政策"},{id:2,link:"价格保护"},{id:3,link:"退款说明"},{id:4,link:"取消订单"}]
                    },
                    {id:4,title:"特色服务",message:[
                            {id:1,link:"小姐姐"},{id:2,link:"小哥哥"},{id:3,link:"特色链条"},{id:4,link:"上门打狗"}]
                    },
                    {id:5,title:"友情链接",message:[
                            {id:1,link:"小弟弟"},{id:2,link:"小妹妹"},{id:3,link:"JK制服"},{id:4,link:"小萝莉"}]
                    }
				]
            }
        }
    }
</script>

<style scoped>
.hr-up{
	width: 85%;
	margin-top: 2%;
}
.hr-down{
	width: 90%;
}
h5{
	color: #666;
}
ul{
	padding-left: 0;
	margin: 5%;
}
li{
	list-style: none;
	font: 12px/1.5 Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;
}
li a{
	text-decoration: none;
	color: #666;
}
</style>