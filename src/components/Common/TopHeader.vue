<template>
    <el-row class="top-header-area">
        <el-col class="top-header-left" :span="10" :offset="2">
            <div class="top-header-left-container">
                <span>
                您好，请<a>登录</a>或<a>注册</a>
                </span>
            </div>
        </el-col>
        <el-col class="top-header-right" :span="10">
            <div class="top-header-right-container">
                <ul class="menu">
                    <li><a> 我的营地 </a></li>
                    <li><a style="border-right: none"> 购物车 </a></li>
                </ul>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "TopHeader"
    }
</script>

<style scoped>
    .top-header-area {
        background: black;
        color: white;
        font-size: 14px;
    }
    .top-header-left-container {
        text-align: left;
        margin: 7px 0;
    }
    .menu {
        text-align: right;
        margin: 7px 0;
    }
    .menu li {
        list-style: none;
        display: inline-block;
        position: relative;
    }
    .menu li a {
        padding: 0 10px;
        border-right: solid white 1px;
    }



</style>
