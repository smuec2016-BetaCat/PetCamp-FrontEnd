<template>
  <el-row class="explore">
    <el-row class="title">
      <el-col :span="24">
        <span>探索营地</span>
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :span="16" :offset="4">
        <el-row :gutter="30">
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <div class="img-box">
                <img
                  src="http://itsyuekao.com:5000/_uploads/IMAGE/20160301003554.jpg"
                  class="image"
                >
              </div>
              <div class="text">
                <span>获得宠物保姆，为您的爱宠提供家庭住宿</span>
                <div class="bottom clearfix">
                  <el-button round class="button" @click="goto">前往宠物寄养</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <div class="img-box">
                <img
                  src="http://itsyuekao.com:5000/_uploads/IMAGE/20160301003554.jpg"
                  class="image"
                >
              </div>
              <div class="text">
                <span>奉献爱心，送给这些小动物一个温暖家庭</span>
                <div class="bottom clearfix">
                  <el-button round class="button" disabled>前往宠物领养</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <div class="img-box">
                <img
                  src="http://itsyuekao.com:5000/_uploads/IMAGE/20160301003554.jpg"
                  class="image"
                >
              </div>
              <div class="text">
                <span>无所不有，这里的一切都为您的爱宠准备</span>
                <div class="bottom clearfix">
                  <el-button round class="button" disabled>前往宠物零售</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: "FrontPageDisplayBoard",
    methods:{
  	  goto(){
  	  	this.$router.push({path:"/CommodityBrowsing/CommodityBrowsingList1"})
      }
    }
};
</script>

<style scoped>
.explore {
  margin: 50px;
  background: #f8f8fa;
  height: 1000px;
}
.explore .title {
  margin-top: 100px;
  font-size: 60px;
}
.explore .container {
  margin-top: 50px;
}
.explore .container .text {
  padding: 30px;
  font-size: 22px;
  line-height: 40px;
  margin-top: 20px;
  transition: all 0.3s;
}
.explore .container .text:hover {
  color: #6a3906;
  transition: all 0.3s;
  cursor: pointer;
}

.bottom {
  margin-top: 40px;
  line-height: 12px;
  padding-bottom: 20px;
}

.button {
  padding: 0;
  font-size: 22px;
  width: 200px;
  height: 40px;
}

.img-box {
  overflow: hidden;
}
.image {
  overflow: hidden;
  width: 100%;
  display: block;
  transition: all 0.3s;
}
.image:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
