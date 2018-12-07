<template>
      <el-carousel :interval="10000" arrow="never" height="450px">
        <el-carousel-item v-for="item in CarouseMap" :key="item.id">
          <h3>
            <img :src="item.img" alt="carousel">
          </h3>
        </el-carousel-item>
      </el-carousel>
</template>

<script>
export default {
  name: "FrontPageCarouselMap",
  data: function() {
    return {
      CarouseMap: [
        {
          id: 1,
          img: "http://itsyuekao.com:5000/_uploads/IMAGE/2012100657859693.jpg"
        },
        {
          id: 2,
          img: "http://itsyuekao.com:5000/_uploads/IMAGE/77157281.jpg"
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
  padding-bottom: 75%;
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

.el-carousel .el-carousel__container img:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s;
}
</style>
