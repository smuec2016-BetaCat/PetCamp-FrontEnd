<template>
	<div :style="formStyle">
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
	},
	computed: {
		formStyle: () => {
			let screenHeight = document.body.clientHeight + 105
			return {
				height: screenHeight + "px"
			}
		}
	}
}
</script>

<style scoped>

</style>