<template>
	<div>
		<FrontPageNav></FrontPageNav>
		<!--商品详情介绍-->
		<ProductDescriptionPage></ProductDescriptionPage>
		<!--商品详情与商品评论-->
		<ProductDescriptionFooter></ProductDescriptionFooter>
	</div>
</template>

<script>
import FrontPageNav from "../components/FrontPage/FrontPageNav"
import ProductDescriptionPage from "../components/Common/ProductDsecription/ProductDescriptionPage"
import ProductDescriptionFooter from "../components/Common/ProductDescriptionFooter"
export default {
	name: "PurchasePage",
	components: {ProductDescriptionPage, FrontPageNav ,ProductDescriptionFooter}
}
</script>

<style scoped>

</style>
