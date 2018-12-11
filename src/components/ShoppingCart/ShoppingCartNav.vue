<template>
	<div>
		<TopBar></TopBar>
		<LogoNav>
			<template slot="title">支付结算</template>
			<template slot="line">
				<div style="border-bottom: white solid 1px;box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);"></div>
			</template>
		</LogoNav>
	</div>

</template>

<script>
import LogoNav from "../Common/logoNav";
import TopBar from "@/components/Common/TopBar";
export default {
	name: "ShoppingCartNav",
	components: {TopBar, LogoNav}
}
</script>

<style scoped>
#logo {
	margin: 20px 0;
	text-align: left;
}
#myLogo{
	height: 50px;
	width: 150px;
	float: left;
	line-height: 50px;
}
#logo h3{
	display: inline;
	float: left;
	margin: 0;
	height: 50px;
	line-height: 50px;
}
</style>