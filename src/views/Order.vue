<template>
	<div>
		<LogoNav class="hidden-xs-only">
			<template slot="title">结算页</template>
			<template slot="line">
				<div style="border-bottom: white solid 1px;box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);"></div>
			</template>
		</LogoNav>
		<OrderForm></OrderForm>
	</div>
</template>

<script>
import OrderNav from "../components/OrderPage/OrderNav";
import OrderForm from "../components/OrderPage/OrderForm";
import LogoNav from "../components/Common/logoNav";
export default {
	name: "Order",
	components: {LogoNav,OrderForm}
}
</script>

<style scoped>

</style>