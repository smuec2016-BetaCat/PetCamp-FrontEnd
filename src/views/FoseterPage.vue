<template>
	<div>
		<FrontPageNav></FrontPageNav>
		<FosterForm></FosterForm>
	</div>
</template>

<script>
import FrontPageNav from "../components/FrontPage/FrontPageNav";
import FosterForm from "../components/Common/FosterForm";
export default {
	name: "FoseterPage",
	components: {FrontPageNav,FosterForm}
}
</script>

<style scoped>

</style>