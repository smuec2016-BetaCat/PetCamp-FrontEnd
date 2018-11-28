<template>
	<el-row>
		<el-col :span="20" :offset="2">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" style="background-color: transparent">
				<el-menu-item index="ProductDescriptionDetails" @click="goto($event)">宠物介绍</el-menu-item>
				<el-menu-item index="ProductComments" @click="goto($event)">商品评价</el-menu-item>
			</el-menu>
			<router-view></router-view>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "ProductDescriptionDetails",
	data (){
		return {
			activeIndex: '1',
		}
	},
	methods:{
		goto(e){
			this.$router.push({ path: `/PurchasePage/${e.index}` })
		}
	}
}
</script>

<style scoped>
	.el-dropdown-menu__item--divided:before, .el-menu, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
		background-color: transparent;
	}
</style>