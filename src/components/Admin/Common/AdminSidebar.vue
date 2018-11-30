<template>
    <div class="sidebar">
        <el-menu
                default-active="1-4-1"
                class="sidebar-menu"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                background-color="#324157"
                text-color="#bfcbd9"
                active-text-color="#20a0ff"
        >
            <el-menu-item index="dashboard" @click="routerPush('/admin')">
                <i class="el-icon-news"></i>
                <span slot="title">我的概况</span>
            </el-menu-item>
            <el-submenu index="trusteeship">
                <template slot="title">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">宠物寄养</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">宠物寄养</span>
                    <el-menu-item index="trusteeship-order" @click="routerPush('/admin/trusteeship-order')">订单管理</el-menu-item>
                    <el-menu-item index="trusteeship-editor">条件编辑</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="adoption">
                <template slot="title">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">宠物领养</span>
                </template>
                <el-menu-item index="adoption-order" @click="routerPush('/admin/adoption-order')">订单管理</el-menu-item>
                <el-menu-item index="adoption-editor">宠物名单</el-menu-item>
            </el-submenu>
            <el-menu-item index="image-management" @click="routerPush('/admin/image-management')">
                <i class="el-icon-menu"></i>
                <span slot="title">图片管理</span>
            </el-menu-item>

            <el-button class="collapse-toggle" type="text" @click="toggleCollapse">
                <i class="el-icon-arrow-right" v-if="isCollapse"></i>
                <i class="el-icon-arrow-left" v-else></i>
            </el-button>
        </el-menu>
    </div>

</template>

<script>
    export default {
        name: "AdminSidebar",
        props: {
            isCollapse: Boolean
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath)
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath)
            },
            toggleCollapse() {
                this.$emit("tog-collapse")
            },
            routerPush(to) {
                this.$router.push(to)
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        position: absolute;
        bottom: 0;
        top: 70px;
        text-align: left;
    }

    .sidebar-menu {
        height: 100%;
    }

    .sidebar-menu:not(.el-menu--collapse) {
        width: 200px;
    }

    .collapse-toggle {
        position: absolute;
        bottom: 0;
        left: 23px;
        color: #bfcbd9;
    }
</style>
