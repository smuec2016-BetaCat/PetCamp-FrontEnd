<template>
    <el-card shadow="hover" class="name-card">
        <div class="user-info">
            <img src="../../../assets/avator.jpg" class="user-avator" alt="avator">
            <div class="user-info-cont">
                <div class="user-info-name">{{name}}</div>
                <div>{{role}}</div>
            </div>
        </div>
        <div class="user-info-list">上次登录时间：<span>{{lastLoginDatetime}}</span></div>
        <div class="user-info-list">上次登录地点：<span>{{lastLoginLocation}}</span></div>
    </el-card>
</template>

<script>
    export default {
        name: "NameCard",
        data() {
            return {
                // TODO(Ron): Change to global variety
                name: "admin",
                role: "超级管理员",
                lastLoginDatetime: "2018年11月11日",
                lastLoginLocation: "上海"
            }
        }
    }
</script>

<style scoped>
    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
        text-align: left;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .name-card {
        margin-bottom: 20px;
        height:252px;
    }
</style>
