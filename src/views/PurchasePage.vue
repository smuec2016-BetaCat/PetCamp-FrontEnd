<template>
	<div>
		<FrontPageNav></FrontPageNav>
		<ProductDescriptionPage></ProductDescriptionPage>
	</div>
</template>

<script>
import FrontPageNav from "../components/FrontPage/FrontPageNav"
import ProductDescriptionPage from "../components/Common/ProductDescriptionPage"
export default {
	name: "PurchasePage",
	components: {ProductDescriptionPage, FrontPageNav}
}
</script>

<style scoped>

</style>
