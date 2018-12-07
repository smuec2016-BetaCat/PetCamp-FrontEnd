<template>
    <div>
        <LogoNav class="hidden-xs-only">
            <template slot="title">我的订单</template>
            <template slot="line">
                <div style="border-bottom: white solid 1px;box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);"></div>
            </template>
        </LogoNav>
        <OrderForm2></OrderForm2>
    </div>
</template>

<script>

import LogoNav from "../components/Common/logoNav";
import OrderForm2 from "../components/OrderPage/OrderForm2";
export default {
    name: "MyOrder",
    components: {OrderForm2, LogoNav}
}
</script>

<style scoped>

</style>