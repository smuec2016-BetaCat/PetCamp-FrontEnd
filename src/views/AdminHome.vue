<template>
    <div>
        <admin-header></admin-header>
        <admin-sidebar></admin-sidebar>
    </div>
</template>

<script>
    import adminHeader from "../components/Admin/Common/AdminHeader"
    import AdminSidebar from "../components/Admin/Common/AdminSidebar";
    export default {
        name: "AdminHome",
        components: {AdminSidebar, adminHeader}
    }
</script>

<style scoped>

</style>
