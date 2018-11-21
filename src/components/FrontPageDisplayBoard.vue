<template>
	<div>
		<GroupInfo></GroupInfo>
		<AdoptionInfo></AdoptionInfo>
		<FrontPagePetSupplies></FrontPagePetSupplies>
	</div>
</template>

<script>
    import GroupInfo from "./GroupInfo";
    import AdoptionInfo from "./AdoptionInfo";
    import FrontPagePetSupplies from "./FrontPagePetSupplies";
    export default {
        name: "FrontPageDisplayBoard",
        components: {FrontPagePetSupplies, AdoptionInfo, GroupInfo}
    }
</script>

<style scoped>

</style>