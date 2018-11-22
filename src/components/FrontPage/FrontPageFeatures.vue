<template>
	<div>
		<el-row>
			<el-col v-for="item in items" :key="item.id">
				<h1 v-text="item.title"></h1>
				<ul v-for="msg in item.message" :key="msg">
					<li><router-link to="" v-text="msg.link"></router-link></li>
				</ul>
			</el-col>
		</el-row>
		<hr class="hr-up">
		<div>{{msg}}</div>
		<hr class="hr-down">
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
						{link:"消费流程"},{link:"会员介绍"},{link:"常见问题"},{link:"联系客服"}]
					},
                    {id:0,title:"消费指南",message:[
                            {link:"消费流程"},{link:"会员介绍"},{link:"常见问题"},{link:"联系客服"}]
                    },
                    {id:0,title:"消费指南",message:[
                            {link:"消费流程"},{link:"会员介绍"},{link:"常见问题"},{link:"联系客服"}]
                    },
                    {id:0,title:"消费指南",message:[
                            {link:"消费流程"},{link:"会员介绍"},{link:"常见问题"},{link:"联系客服"}]
                    },
                    {id:0,title:"消费指南",message:[
                            {link:"消费流程"},{link:"会员介绍"},{link:"常见问题"},{link:"联系客服"}]
                    }
				]
            }
        }
    }
</script>

<style scoped>
.hr-up{
	width: 80%;
}
.hr-down{
	width: 90%;
}
</style>