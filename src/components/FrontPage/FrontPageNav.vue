<template>
	<div>
		<div id="logo">
			<span>PetCamp</span>
		</div>
		<!--顶部导航栏-->
		<div id="FrontPageNav">
			<ul v-for="item in nav" :key="item.id">
				<li v-text="item.msg"></li>
			</ul>
		</div>
		<!--logo和搜索栏-->
		<el-row id="search">
			<el-col :span="3" :offset="2"></el-col>
			<el-col :span="10">
				<el-input placeholder="请输入内容" v-model="input">
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-col>
			<el-col :span="4" :offset="1">
				<el-button id="cart" type="success">
					<i class="el-icon-goods"></i>我的购物车
				</el-button>
			</el-col>
		</el-row>
		<!--第二导航栏-->
		<el-menu
				:default-active="activeIndex2"
				class="el-menu-demo"
				mode="horizontal"
				background-color="#56AF31"
				text-color="#fff"
				active-text-color="#ffd04b">
					<el-menu-item index="1" style="margin-left: 20%">首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title">宠物寄养</template>
						<el-menu-item index="2-1">预约寄养</el-menu-item>
						<el-menu-item index="2-2">待组团宠物信息</el-menu-item>
						<el-menu-item index="2-3">发起组团</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">宠物寄养</template>
						<el-menu-item index="3-1">发起领养</el-menu-item>
						<el-menu-item index="3-2">待领养宠物信息</el-menu-item>
						<el-menu-item index="3-3">领养心愿单</el-menu-item>
					</el-submenu>
					<el-menu-item index="4" @click="goto">计数器|暂时给个入口</el-menu-item>
		</el-menu>
		<br>
		<br>
	</div>

</template>

<script>
export default {
	name: "FrontPageNav",
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
			input:'',
			nav:[
				{id:0,msg:"找一家商店"},
				{id:1,msg:"贵宾俱乐部"},
				{id:2,msg:"宠物保险"},
				{id:3,msg:"店内服务"},
				{id:4,msg:"投资者"},
				{id:5,msg:"品牌"},
				{id:6,msg:"这个字符串到底要多长"},
                {id:7,msg:"请登录|注册"}]
        }
    },
	methods:{
		goto(){
            this.$router.push({ path: `/Access/AccessRecording` })
		}
	}
}
</script>

<style scoped>
.el-menu{
	padding:0;
}
#login{
	float: right;
}
#FrontPageNav{
	background-color: #07601F;
}
#FrontPageNav ul{
	margin: 0;
	display: inline-block;
	color: #fff;
	font-size: 12px;
}
#FrontPageNav ul li{
	list-style: none;
}
#logo{
	background-color: green;
	width: 120px;
	height: 120px;
	display: flex;
	z-index: 999;
	position: absolute;
	margin-left: 10%;
}
#logo span{
	margin: auto;
}
#search{
	display: flex;
	height: 70px;
}
#search .el-col{
	display: flex;
}
#search .el-col #cart{
	margin: auto;
}
#search .el-col .el-input{
	margin: auto;
}

</style>