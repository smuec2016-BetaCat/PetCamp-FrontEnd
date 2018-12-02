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
	},
	methods:{
		boxHeight(){
			let myBoxHeight = document.body.offsetHeight
			let screenHeight = document.documentElement.clientHeight
			this.$refs.myBody.style.height = Math.max(myBoxHeight,screenHeight) + "px"
		}
	},
	mounted: function() {
		this.boxHeight()
	}

}
</script>

<style scoped>
#myBody{
	background-color: #f0f3ef;
}
</style>