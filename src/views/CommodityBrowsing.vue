<template>
	<div>
		<FrontPageNav></FrontPageNav>
		<CommodityBrowsingList></CommodityBrowsingList>
	</div>
</template>

<script>
import CommodityBrowsingList from "@/components/Common/CommodityBrowsingList";
import FrontPageNav from "@/components/FrontPage/FrontPageNav";
export default {
	name: "CommodityBrowsing",
	components: {FrontPageNav, CommodityBrowsingList}
}
</script>

<style scoped>

</style>