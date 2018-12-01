<template>
	<div style="background-color: #f0f3ef;padding-bottom: 10%">
		<RegisterNav></RegisterNav>
		<RegisterBody></RegisterBody>
	</div>
</template>

<script>
import RegisterBody from "@/components/Login/RegisterBody";
import RegisterNav from "@/components/Login/RegisterNav";
export default {
	name: "Register",
	components: {RegisterBody, RegisterNav},
	data (){
		return {

		}
	}
}
</script>

<style scoped>

</style>