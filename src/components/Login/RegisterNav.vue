<template>
	<LogoNav>
		<template slot="title">欢迎注册</template>
		<template slot="line">
			<div style="border-bottom: white solid 1px;box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);"></div>
		</template>
	</LogoNav>
</template>

<script>
import LogoNav from "../Common/logoNav";
export default {
	name: "RegisterNav",
	components: {LogoNav}
}
</script>

<style scoped>

</style>