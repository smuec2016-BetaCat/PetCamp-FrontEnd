<template>
  <el-row>
    <el-col :sm="{span:24}" :md="{span:16, offset:4}">
      <el-carousel :interval="10000" arrow="never" height="450px">
        <el-carousel-item v-for="item in CarouseMap" :key="item.id">
          <h3>
            <img :src="item.img" alt="carousel">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "FrontPageCarouselMap",
  data: function() {
    return {
      CarouseMap: [
        {
          id: 1,
          img: "http://itsyuekao.com:5000/_uploads/IMAGE/c1.jpg"
        },
        {
          id: 2,
          img: "http://itsyuekao.com:5000/_uploads/IMAGE/c2.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.el-carousel {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}
.el-carousel .el-carousel__container {
  height: 0;
  padding-bottom: 56.25%;
}
.el-carousel .el-carousel__container img {
  width: 100%;
  padding-bottom: 1000px;
}
</style>
