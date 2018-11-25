<template>
	<div style="margin-left: 8.333333%">
		<div id="zoom">
			<pic-zoom url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/230px-Cat03.jpg" :scale="2"></pic-zoom>
		</div>
	</div>
</template>

<script>
import PicZoom from 'vue-piczoom'
export default {
	name: "ProductDescriptionPage",
	components: { PicZoom }
}
</script>

<style scoped>
#zoom{
	width: 400px;
	height: 400px;
}
</style>