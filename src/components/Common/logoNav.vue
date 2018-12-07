<template>
    <el-row>
        <el-col id="RegisterNav" :span="22" :offset="2">
            <div id="logo">
                <router-link to="/">
                    <img src="http://itsyuekao.com:5000/_uploads/IMAGE/logo-fixed.png" alt="logo">
                </router-link>
            </div>
            <span id="logo-title">
				<slot name="title"></slot>
			</span>
        </el-col>
        <el-col>
            <slot name="line"></slot>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "logoNav"
}
</script>

<style scoped>
img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
#RegisterNav{
    height: 120px;
}
#RegisterNav #logo{
    width: 140px;
    float: left;
    margin-top: 14px;
}
#RegisterNav #logo-title{
    float: left;
    height: 34px;
    line-height: 34px;
    font-size: 24px;
    font-weight: 800;
    color: #6A3906;
    margin-top: 67px;
    margin-left: 20px;
}
</style>