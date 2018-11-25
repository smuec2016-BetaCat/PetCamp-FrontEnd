<template>
	<div>
		<FrontPageSupplies></FrontPageSupplies>
		<SuppliesList></SuppliesList>
	</div>

</template>

<script>
import FrontPageSupplies from "../Common/PetSupplies/FrontPageSupplies";
import SuppliesList from "../Common/PetSupplies/SuppliesList";
export default {
    name: "FrontPagePetSupplies",
	components: {SuppliesList, FrontPageSupplies},
	data() {
        return {

        }
    },
    methods:{

    }
}
</script>

<style scoped>

</style>