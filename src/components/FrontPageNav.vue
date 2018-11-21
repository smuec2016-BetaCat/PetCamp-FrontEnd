<template>
	<div>
		<el-menu
				:default-active="activeIndex2"
				class="el-menu-demo"
				mode="horizontal"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b">
			<el-menu-item index="1">首页</el-menu-item>
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
			<el-menu-item index="4" id="login">登录|免费注册</el-menu-item>
		</el-menu>
		<br>
		<el-row>
			<el-col :span="12" :offset="6">
				<el-col :span="20">
					<el-input v-model="input" placeholder="Search for ......"></el-input>
				</el-col>
				<el-col :span="4">
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</el-col>
			</el-col>
		</el-row>
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
			input:''
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
</style>