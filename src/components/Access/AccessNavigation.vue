<template>
	<el-aside width="20%">
		<el-row class="tac">
			<el-col>
				<el-menu
						default-active="2"
						class="el-menu-vertical-demo"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b">
					<el-menu-item index="AccessRecording" @click="goto($event)">
						<i class="el-icon-menu"></i>
						<span slot="title">访问记录</span>
					</el-menu-item>
					<el-menu-item index="AccessDetails" @click="goto($event)">
						<i class="el-icon-menu"></i>
						<span slot="title">访问详情</span>
					</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</el-aside>
</template>

<script>
    export default {
        name: "AccessNavigation",
		methods:{
            goto(e) {
                this.$router.push({ path: `/Access/${e.index}` })
            }
		},

        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1',
            }
        }
    }
</script>

<style scoped>

</style>