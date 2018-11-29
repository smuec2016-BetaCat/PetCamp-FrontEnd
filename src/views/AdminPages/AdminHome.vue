<!--suppress ALL -->
<template>
    <div class="admin-home">
        <el-row :gutter="20">
            <el-col :span="8">
                <name-card></name-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="colored-tags">
                    <el-col :span="8">
                        <colorful-tag color="rgb(45, 140, 240)">
                            <template slot="value">{{requestCount}}</template>
                            <template slot="title">我的点击量</template>
                        </colorful-tag>
                    </el-col>
                    <!--TODO(Ron): add content-->
                    <el-col :span="8">
                        <colorful-tag color="rgb(100, 213, 114)">
                            <template slot="value">0</template>
                            <template slot="title">寄养订单总数</template>
                        </colorful-tag>
                    </el-col>
                    <el-col :span="8">
                        <colorful-tag color="rgb(242, 94, 67)">
                            <template slot="value">0</template>
                            <template slot="title">领养订单总数</template>
                        </colorful-tag>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import NameCard from "../../components/Admin/Home/NameCard"
import ColorfulTag from "../../components/Admin/Home/ColorfulTag"
import axios from "axios"
export default {
    name: "AdminHome",
    components: {ColorfulTag, NameCard},
    data() {
        return {
            requestCount: 0
        }
    },
    mounted() {
        axios.get("http://itsyuekao.com:5000/api/v0/counter")
            .then(resp => {
                this.requestCount = resp.data.count
            })
    }
}
</script>

<style scoped>
    .admin-home {
        position: absolute;
        padding: 10px;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .colored-tags {
        margin-bottom: 20px;
    }
</style>
