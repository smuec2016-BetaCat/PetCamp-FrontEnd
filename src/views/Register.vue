<template>
	<div :style={height:screenHeight}>
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
			screenHeight:document.body.clientHeight +"px"
		}
	}

}
</script>

<style scoped>

</style>