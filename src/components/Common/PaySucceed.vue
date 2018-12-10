<template>
	<el-row>
		<logoNav>
			<template slot="title">支付结算</template>
			<template slot="line">
				<div style="border-bottom: white solid 1px;box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);"></div>
			</template>
		</logoNav>
		<el-col>
			<el-col>
				<i class="el-icon-success" style="color: green"></i><h2>支付成功</h2>
			</el-col>
			<el-col>
				<router-link to="/">若不自动跳转，请点击此处跳转</router-link>
			</el-col>
		</el-col>
	</el-row>
</template>

<script>
import LogoNav from "@/components/Common/logoNav";
export default {
	name: "PaySucceed",
	components: {LogoNav},
	methods:{
		goto(){
			this.$router.push({path:"/"})
		}
	},
	created:function () {
		setTimeout(this.goto,4000)
	}
}
</script>

<style scoped>
h2{
	color: green;
	display: inline-block;
}
a{
	text-decoration: none;
	color: #6A3906;
}
</style>