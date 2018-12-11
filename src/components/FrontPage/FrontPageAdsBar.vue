<template>
  <el-row>
    <el-col :sm="24" :md="{span:14, offset:5}">
      <el-row :gutter="20">
        <el-col>
          <front-page-carousel-map></front-page-carousel-map>
        </el-col>
        <!--<el-col class="hidden-sm-and-down advertisement" :span="8">-->
          <!--<div class="ad-box"></div>-->
        <!--</el-col>-->
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import FrontPageCarouselMap from "./FrontPageCarouselMap";
export default {
  name: "FrontPageAdsBar",
  components: { FrontPageCarouselMap }
};
</script>

<style>
.advertisement .ad-box {
  background: url("http://itsyuekao.com:5000/_uploads/IMAGE/ad.jpg") no-repeat
    center center;
  background-size: 100% auto;
  width: 100%;
  padding-bottom: 154%;
  overflow: hidden;
  transition: all 0.3s;
}
.advertisement .ad-box:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s;
}
</style>


