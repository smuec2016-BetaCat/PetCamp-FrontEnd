<!--suppress ALL -->
<template>
    <div>
        <el-container>
            <el-header class="header" height="70px">
                <admin-header></admin-header>
            </el-header>
            <el-container>
                <el-aside :width="isCollapse? '65px': '200px'">
                    <admin-sidebar :is-collapse="isCollapse" v-on:tog-collapse="toggleCollapse"></admin-sidebar>
                </el-aside>
                <el-container class="main-content" :class="{'main-content-collapse':isCollapse}">
                    <router-view></router-view>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import adminHeader from "../components/Admin/Common/AdminHeader"
    import AdminSidebar from "../components/Admin/Common/AdminSidebar"
    export default {
        name: "Admin",
        components: {AdminSidebar, adminHeader},
        data() {
            return {
                isCollapse: true
            }
        },
        methods: {
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>

<style scoped>
    .header {
        padding: 0;
    }
    .main-content {
        position: absolute;
        left: 200px;
        right: 0;
        bottom: 0;
        top: 70px;
        transition: left .3s ease-in-out;
    }
    .main-content-collapse {
        left: 65px;
        bottom: 0;
        background-color: #F0F0F0;
    }
</style>
