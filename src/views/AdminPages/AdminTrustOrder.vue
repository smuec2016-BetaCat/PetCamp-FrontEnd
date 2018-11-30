<template>
    <div class="admin-trustorder">
        <order-table></order-table>
    </div>
</template>

<script>
    import OrderTable from "../../components/Admin/Trust/TrustOrderTable";
    export default {
        name: "AdminTrustOrder",
        components: {OrderTable}
    }
</script>

<style scoped>
    .admin-trustorder {
        position: absolute;
        padding: 10px;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
</style>
