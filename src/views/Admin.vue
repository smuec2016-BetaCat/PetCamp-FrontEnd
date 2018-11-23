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
                <el-container>
                    <admin-info></admin-info>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import adminHeader from "../components/Admin/Common/AdminHeader"
    import AdminSidebar from "../components/Admin/Common/AdminSidebar";
    import AdminInfo from "../components/Admin/Home/AdminInfo";
    export default {
        name: "Admin",
        components: {AdminInfo, AdminSidebar, adminHeader},
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
</style>
