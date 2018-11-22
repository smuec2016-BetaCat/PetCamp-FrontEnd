<template>
	<div>
		<hr class="hr-up">
		<div>{{msg}}</div>
		<hr class="hr-down">
	</div>

</template>

<script>
    export default {
        name: "FrontPageFeatures",
        data() {
            return {
                msg:`这是一个功能介绍组件
		暂时还没有更多的介绍
		昨天出去玩了一天
		一个晚上做出来的网页
		看上去非常粗糙
		而我又是一个挑剔样式的人
		非常不适`
            }
        }
    }
</script>

<style scoped>
.hr-up{
	width: 80%;
}
.hr-down{
	width: 90%;
}
</style>