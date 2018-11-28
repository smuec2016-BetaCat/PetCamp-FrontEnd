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
                unique-opened="true"
        >
            <el-menu-item index="dashboard">
                <i class="el-icon-menu"></i>
                <span slot="title">营地概况</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
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
        // data() {
        //     return {
        //         isCollapse: true
        //     }
        // },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath)
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath)
            },
            toggleCollapse() {
                this.$emit("tog-collapse")
                // alert("nnnn")
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
        bottom: 10px;
        left: 23px;
        color: #bfcbd9;
    }
</style>
