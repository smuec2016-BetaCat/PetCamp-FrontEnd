<template>
	<div>
		<!--顶部导航栏-->
		<div id="FrontPageNav">
			<el-row>
				<el-col :span="5" :offset="2">
					<div id="logo" class="hidden-md-and-down">
						<span></span>
					</div>
				</el-col>
				<el-col :offset="5" :span="19">
					<ul>
						<li  v-for="item in nav" :key="item.id">
							<router-link to="" v-text="item.msg"></router-link>
						</li>
					</ul>
				</el-col>
			</el-row>
		</div>
		<!--logo和搜索栏-->
		<el-row id="search">
			<el-col :span="3" :offset="2"></el-col>
			<el-col :span="10">
				<el-input placeholder="Search for product or category type..." v-model="input">
					<el-button slot="append" icon="el-icon-search" style="color: green;font-size: 15px"></el-button>
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
				active-text-color="gold">
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
		<!--留白广告-->
		<el-row id="advertisement">
			<el-col :span="20" :offset="3">
				<el-col :span="12">
					<router-link to=""><i class="el-icon-info"></i>在超过400多家商店中都免费接送</router-link>
				</el-col>
				<el-col :span="12">
					<router-link to=""><i class="el-icon-info"></i>高标准高质量的服务</router-link>
				</el-col>
			</el-col>
		</el-row>
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
                {id:6,msg:"请登录|注册"}]
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
#FrontPageNav{
	background-color: #07601F;
	text-align: left;
	height: 30px;
}
#FrontPageNav ul{
	margin: 0;
	color: #fff;
	font-size: 12px;
	padding-left: 0;
}
#FrontPageNav ul li{
	list-style: none;
	display: inline-block;
	margin-right: 5%;
}
#FrontPageNav ul li a{
	color: #fff;
	font-size: 12px;
	list-style: none;
	text-decoration: none;
	line-height: 30px;
}
#FrontPageNav ul li :hover{
	color: gold;
	font-size: 12px;
	list-style: none;
	text-decoration: none;
}
#logo{
	background-image: url("http://media.petsathome.com/wcsstore/pah-as01/images/creatives/logo.png");
	width: 120px;
	height: 120px;
	display: flex;
	z-index: 999;
	position: absolute;
}
#logo span{
	margin: auto;
}
#search{
	display: flex;
	height: 60px;
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
#advertisement{
	height: 50px;
	background-color:#F5FFFA;
	line-height: 50px;
	text-align: left;
	margin-bottom: 50px;
}
#advertisement a{
	color: green;
	font-size: 20px;
	font-family: sans-serif;
	text-decoration: none;
}
#advertisement a i{
	padding-right: 5%;
}
</style>