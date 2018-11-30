<!--suppress ALL -->
<template>
    <el-table
            :data="tableData"
            class="order-table"
            height="string"
            border
    >
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="table-expand">
                    <el-form-item label="名称：">
                        <span>{{ props.row.pet_name }}</span>
                    </el-form-item>
                    <el-form-item label="年龄：">
                        <span>{{ props.row.age }}</span>
                    </el-form-item>
                    <el-form-item label="体重：">
                        <span>{{ props.row.weight }}</span>
                    </el-form-item>
                    <el-form-item label="绝育：">
                        <span>{{ props.row.sterilization }}</span>
                    </el-form-item>
                    <el-form-item label="调皮：">
                        <span>{{ props.row.naughty }}</span>
                    </el-form-item>
                    <el-form-item label="害羞：">
                        <span>{{ props.row.shy }}</span>
                    </el-form-item>
                    <el-form-item label="友好：">
                        <span>{{ props.row.friendly }}</span>
                    </el-form-item>
                    <el-form-item label="订单完成时间：">
                        <span>{{ props.row.close_time }}</span>
                    </el-form-item>
                    <el-form-item label="中介费：">
                        <span>{{ props.row.agency_fee }}</span>
                    </el-form-item>
                    <el-form-item label="备注：">
                        <span>{{ props.row.comment }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                sortable
                label="订单号"
                prop="ord_num">
        </el-table-column>
        <el-table-column
                sortable
                label="宠物类型"
                prop="species">
        </el-table-column>
        <el-table-column
                sortable
                label="时长"
                prop="expiration">
        </el-table-column>
        <el-table-column
                sortable
                label="创建时间"
                prop="create_time">
        </el-table-column>
        <el-table-column
                sortable
                label="成交价格"
                prop="price">
        </el-table-column>
        <el-table-column
                sortable
                label="激活状态"
                prop="active">
        </el-table-column>
    </el-table>
</template>

<script>
    import axios from "axios"

    export default {
        name: "OrderTable",
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
                axios.get("http://127.0.0.1:5000/api/v0/order/trusteeship?agency_id=1")
                    .then(resp => {
                        let orders = resp.data.orders
                        for (let order of orders) {
                            order.age = String(order.age) + "岁"
                            order.weight = String(order.weight) + "kg"
                            order.expiration = String(order.expiration) + "天"
                            for (let prop of ["price", "agency_fee"]) {
                                order[prop] = order[prop].toFixed(2)
                            }
                            for (let prop of ["sterilization", "active"]) {
                                order[prop] = order[prop]? "是": "否"
                            }
                            for (let prop of ["naughty", "shy", "friendly"]) {
                                if (order[prop] != null) {
                                    order[prop] = order[prop]? "是": "否"
                                } else {
                                    order[prop] = "未知"
                                }
                            }
                        }
                        this.tableData = orders
            })
        }
    }
</script>

<style scoped>
    .order-table {
        width: 100%;
        height: 100%;
    }
    .table-expand {
        font-size: 0;
    }
    .table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
