<template>
	<div>
		<div class="hidden-sm-and-down" style="margin-bottom: 5%">
			<!--顶部导航栏-->
			<el-row id="FrontPageNav">
				<el-col class="hidden-xs-only" :sm={span:3,offset:1} :md={span:3,offset:2}>
					<div id="logo">
						<span></span>
					</div>
				</el-col>
				<el-col :xs={span:20,offset:2} :sm={span:20,offset:5} :md={span:17,offset:5}>
					<ul>
						<li  v-for="item in nav" :key="item.id">
							<router-link to="" v-text="item.msg"></router-link>
						</li>
					</ul>
				</el-col>
			</el-row>
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
					background-color="rgba(86,175,49)"
					text-color="#fff"
					active-text-color="gold">
				<el-menu-item index="1" style="margin-left: 20%;">首页</el-menu-item>
				<el-submenu index="2">
					<template slot="title">宠物寄养</template>
					<el-menu-item index="2-1">预约寄养</el-menu-item>
					<el-menu-item index="2-2">待组团宠物信息</el-menu-item>
					<el-menu-item index="2-3">发起组团</el-menu-item>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">宠物领养</template>
					<el-menu-item index="3-1">发起领养</el-menu-item>
					<el-menu-item index="3-2">待领养宠物信息</el-menu-item>
					<el-menu-item index="3-3">领养心愿单</el-menu-item>
				</el-submenu>
				<el-menu-item index="4" @click="goto">计数器|暂时给个入口</el-menu-item>
				<el-menu-item index="5" @mouseenter.native="test">测试</el-menu-item>
			</el-menu>
			<!--dropdown导航栏-->
			<el-col v-if="show" class="myDropDown" :span="20" :offset="2" @mouseleave.native="test">
				<el-col>
					<el-col :span="4" style="padding: 10px 0px 10px 20px;">
						<div>
							<span>热门分类</span>
						</div>
						<ul>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>

						</ul>
					</el-col>
					<el-col :span="4" style="margin-top: 10px">
						<div>
							<span>其他分类</span>
						</div>
						<ul>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>

						</ul>
					</el-col>
					<el-col :span="16" style="height: 100%">
						<div style="padding: 10px;height: 100%">
							<img src="../../assets/banner4.jpg" alt="" style="width: 100%;height: 100%;display:block;">
						</div>
				</el-col>
				</el-col>
			</el-col>
		</div>
		<div class="hidden-md-and-up" style="margin-bottom: 5%">
			<!--侧边导航栏-->
			<el-row v-if="sidebar">
				<el-col :sm={span:7,offset:0} :xs={span:15,offset:0} id="sidebar">
					<br>
					<el-col :span="20" :offset="2">
						<!--搜索-->
						<el-input placeholder="Search something" prefix-icon="el-icon-search" v-model="input"></el-input>
						<!--第一导航栏-->
						<ul>
							<li v-for="item in nav" :key="item.id">
								<router-link to="" v-text="item.msg"></router-link>
							</li>
							<li>
								<router-link to="">购物车</router-link>
							</li>

						</ul>
						<!--第二导航栏-->
						<ul>
							<li>
								<router-link to="">首页</router-link>
							</li>
							<li>
								<router-link to="">宠物寄养</router-link>
								<ul>
									<li>
										<router-link to="">预约寄养</router-link>
									</li>
									<li>
										<router-link to="">待组团信息</router-link>
									</li>
									<li>
										<router-link to="">发起组团</router-link>
									</li>
								</ul>
							</li>
							<li>
								<router-link to="">宠物领养</router-link>
								<ul>
									<li>
										<router-link to="">发起领养</router-link>
									</li>
									<li>
										<router-link to="">待领养宠物信息</router-link>
									</li>
									<li>
										<router-link to="">领养心愿单</router-link>
									</li>
								</ul>
							</li>

						</ul>
					</el-col>
				</el-col>
			</el-row>
			<el-row>
				<el-col id="sidebarHead">
					<el-button class="el-icon-tickets" @click="ShowSideBar"></el-button>
				</el-col>
			</el-row>
		</div>
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
			sidebar:false,
			nav:[
				{id:0,msg:"找一家商店"},
				{id:1,msg:"贵宾俱乐部"},
				{id:2,msg:"宠物保险"},
				{id:3,msg:"店内服务"},
				{id:4,msg:"投资者"},
				{id:5,msg:"品牌"},
                {id:6,msg:"请登录|注册"}],
			show:false
        }
    },
	methods:{
		goto(){
            this.$router.push({ path: `/Access/AccessRecording` })
		},
		ShowSideBar(){
			this.sidebar = !this.sidebar
		},
		test(){
			this.show = !this.show
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
	display: inline;
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
#sidebarHead{
	background-color: rgb(86, 175, 49);
	height: 50px;
	text-align: right;
}
#sidebarHead button{
	height: 45px;
	margin: 5px;
}
#sidebar{
	position: fixed;
	z-index: 999;
	background-color: white;
	overflow-y: auto;
	height: 100%;
}
#sidebar li{
	list-style: none;
	text-align: left;
	margin-top: 0.5em;
}
#sidebar li ul{
	padding-left: 20px;
}
#sidebar a{
	text-decoration: none;
	color: #34495e;
}
#sidebar a:hover{
	border-bottom: 3px solid #42b983;
}
#sidebar ul{
	padding-left: 0;
	line-height: 1.5em;
	font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}
.myDropDown{
	position: absolute;
	z-index: 20;
	background-color: rgb(86, 175, 49);
	text-align: left;
}
.myDropDown ul{
	padding-left: 0;
}
.myDropDown ul li{
	list-style: none;
	color: #fff;
	font-size: 16px;
	line-height: 30px;
}
</style>