<template>
	<div>
		<OrderNav class="hidden-xs-only"></OrderNav>
		<OrderForm></OrderForm>
	</div>

</template>

<script>
import OrderNav from "../components/OrderPage/OrderNav";
import OrderForm from "../components/OrderPage/OrderForm";
export default {
	name: "Order",
	components: {OrderNav, OrderForm}
}
</script>

<style scoped>

</style>