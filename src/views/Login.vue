<template>
	<div>
		<LoginNav></LoginNav>
		<LoginBody></LoginBody>
	</div>

</template>

<script>
import LoginNav from "@/components/Login/LoginNav";
import LoginBody from "@/components/Login/LoginBody";
export default {
	name: "Login",
	components: {LoginBody, LoginNav}
}
</script>

<style scoped>

</style>