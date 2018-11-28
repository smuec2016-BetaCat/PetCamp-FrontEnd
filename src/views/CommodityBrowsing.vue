<template>
	<div>
		<FrontPageNav></FrontPageNav>
		<router-view></router-view>
	</div>
</template>

<script>
import FrontPageNav from "@/components/FrontPage/FrontPageNav";
export default {
	name: "CommodityBrowsing",
	components: {FrontPageNav}
}
</script>

<style scoped>

</style>