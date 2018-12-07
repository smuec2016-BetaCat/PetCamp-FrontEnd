<template>
  <div class="recommand">
    <el-row>
      <el-col :span="16" :offset="4" class="title">
        <span>探索营地</span>
        <br>
      </el-col>
      <el-col :span="16" :offset="4">
        <el-col :md="12" :sm="24" class="MyMaxHeight">
          <el-button style="margin: auto;width: 100%">
            <el-card :body-style="{ padding: '0px' }" shadow="hover" >
              <img src="http://itsyuekao.com:5000/_uploads/IMAGE/20160301003554.jpg" alt>
              <div></div>
            </el-card>
          </el-button>
        </el-col>
        <el-col :md="12" :sm="24" class="MyMaxHeight">
          <el-row>
            <el-col class="MyMaxHeight2" :span="12">
              <el-button>
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img src="http://itsyuekao.com:5000/_uploads/IMAGE/20160301003554.jpg" alt>
                </el-card>
              </el-button>
            </el-col>
            <el-col class="MyMaxHeight2" :span="12">
              <el-button>
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img src="http://itsyuekao.com:5000/_uploads/IMAGE/20160301003554.jpg" alt>
                </el-card>
              </el-button>
            </el-col>
            <el-col class="MyMaxHeight2" :span="12">
              <el-button>
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img src="http://itsyuekao.com:5000/_uploads/IMAGE/20160301003554.jpg" alt>
                </el-card>
              </el-button>
            </el-col>
            <el-col class="MyMaxHeight2" :span="12">
              <el-button>
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img src="http://itsyuekao.com:5000/_uploads/IMAGE/20160301003554.jpg" alt>
                </el-card>
              </el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>


<style scoped>
.recommand img {
  width: 100%;
  height: 100%;
}
.recommand button {
  padding: 0;
  margin: 0;
}
.title {
  text-align: left;
  font-weight: 500;
  font-size: 35px;
  margin-bottom: 1%;
}
.MyMaxHeight {
  display: flex;
  padding: 4px;
  margin-bottom: 5%;
}

</style>

<script>
export default {
  name: "FrontPageRecommand",
  data() {
    return {};
  },
  methods: {
    goTo() {
      alert("haha");
    }
  }
};
</script>
