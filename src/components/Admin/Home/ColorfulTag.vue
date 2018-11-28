<template>
    <el-card shadow="hover" :body-style="{padding: '0px'}">
        <div class="grid-content">
            <i class="el-icon-lx-people grid-con-icon" :style="tagColor"></i>
            <div class="grid-cont-right">
                <div class="grid-num">
                    <slot name="value"></slot>
                </div>
                <div>
                    <slot name="title"></slot>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "ColorfulTag",
        props: ["color"],
        computed: {
            tagColor() {
                return {
                    background: this.color
                }
            }
        }
    }
</script>

<style scoped>
    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        color: black;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

</style>
