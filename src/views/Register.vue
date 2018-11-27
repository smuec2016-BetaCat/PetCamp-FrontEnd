<template>
	<div>
		<RegisterNav></RegisterNav>
		<RegisterBody></RegisterBody>
	</div>

</template>

<script>
import RegisterBody from "@/components/Login/RegisterBody";
import RegisterNav from "@/components/Login/RegisterNav";
export default {
	name: "Register",
	components: {RegisterBody, RegisterNav}
}
</script>

<style scoped>

</style>