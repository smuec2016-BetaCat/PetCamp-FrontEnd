<template>
	<button style="width: 100%;height: 50px;color: #e6a23c;
	background: #fdf6ec;border-color: #f5dab1;cursor: pointer;border: 0" @click="goto(url)">
		<el-col style="height: 10px;display: flex;margin-bottom: 10px;">
			<i :class="myClass" style="margin: auto;"></i>
		</el-col>
		<el-col style="display: flex">
			<span style="font-size: 10px;margin: auto">
				<slot name="text"></slot>
			</span>
		</el-col>
	</button>
</template>

<script>
export default {
	name: "NavBottomButton",
	props:["myClass","url"],
	methods:{
		goto(url){
			this.$router.push({path:url})
		}
	}
}
</script>

<style scoped>

</style>