<template>
	<div id="banner">
		<LoginNav></LoginNav>
		<LoginBody id="body"></LoginBody>
	</div>
</template>

<script>
import LoginNav from "@/components/Login/LoginNav";
import LoginBody from "@/components/Login/LoginBody";
export default {
	name: "Login",
	components: {LoginBody, LoginNav},
	methods:{
		getClientHeight(){
			let ch = document.documentElement.clientHeight
			document.getElementById("banner").style.height = ch + "px"
			document.getElementById("body").style.height = ch - 235 +"px"
		}
	},
	mounted:function () {
		this.getClientHeight()
	}
}
</script>

<style scoped>
#banner{
	background-image: url("http://pic1.win4000.com/wallpaper/a/555c2a32e2203.jpg");
	background-size: cover;
	background-repeat: no-repeat;
}
</style>