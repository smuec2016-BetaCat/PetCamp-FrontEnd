<template>
	<div>
		<GroupInfo class="DisplayBoard"></GroupInfo>
		<AdoptionInfo class="DisplayBoard"></AdoptionInfo>
		<FrontPagePetSupplies class="DisplayBoard"></FrontPagePetSupplies>
	</div>
</template>

<script>
    import GroupInfo from "../Common/GroupInfo"
    import AdoptionInfo from "../Common/AdoptionInfo"
    import FrontPagePetSupplies from "./FrontPagePetSupplies"

    export default {
        name: "FrontPageDisplayBoard",
        components: {FrontPagePetSupplies, AdoptionInfo, GroupInfo}
    }
</script>

<style scoped>
.DisplayBoard{
	padding-top: 5%;
	padding-bottom: 2%;
}
</style>
