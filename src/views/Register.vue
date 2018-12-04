<template>
	<div id="myBody" ref="myBody">
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
			check:0,
		}
	}
}
</script>

<style scoped>
#myBody{
	background-color: #f0f3ef;
}
</style>