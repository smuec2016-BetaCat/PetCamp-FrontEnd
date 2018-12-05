<template>
    <el-row gutter="20">
        <el-col :sm="24" :md="{span:12, offset:4}">
            <front-page-carousel-map></front-page-carousel-map>
        </el-col>
        <el-col class="hidden-sm-and-down advertisement" :span="4">
            <div class="ad-box"></div>
        </el-col>
    </el-row>
</template>

<script>
import FrontPageCarouselMap from "./FrontPageCarouselMap"
export default {
    name: "FrontPageAdsBar",
    components: {FrontPageCarouselMap}
}
</script>

<style>
/* .advertisement img{
    width: 100%;
} */
.advertisement .ad-box {
    background: url("http://itsyuekao.com:5000/_uploads/IMAGE/ad.jpg") no-repeat center center;
    background-size: 100% auto;
    width: 100%;
    padding-bottom: 180%;
}
</style>


