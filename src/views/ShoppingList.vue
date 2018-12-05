<template>
	<div>
		<ShoppingCartNav class="hidden-xs-only"></ShoppingCartNav>
		<ShoppingCartList></ShoppingCartList>
	</div>
</template>

<script>
import ShoppingCartNav from "../components/ShoppingCart/ShoppingCartNav"
import ShoppingCartList from "../components/ShoppingCart/ShoppingCartList"
export default {
	name: "ShoppingList",
	components: {ShoppingCartNav,ShoppingCartList}
}
</script>

<style scoped>

</style>