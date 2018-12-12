<template>
  <el-row :class="{'explore1':!isPc,'explore':isPc}">
    <el-row class="title">
      <el-col :span="24">
        <span>探索营地</span>
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :md="{span:18,offset:3}" :xs="{span:24,offset:0}">
        <el-row :gutter="30">
          <el-col :md="8" :xs="24" style="margin-bottom: 10px">
            <el-card :body-style="{ padding:'0px' }">
              <div class="img-box">
                <img
                  src="http://itsyuekao.com:5000/_uploads/IMAGE/e8293800e507606e7fd1861f89ec58e8.jpg"
                  class="image">
              </div>
              <div class="text">
                <span>获得宠物保姆，为您的爱宠提供家庭住宿</span>
                <div class="bottom clearfix">
                  <el-button round class="button" @click="goto">前往宠物寄养</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :md="8" :xs="24" style="margin-bottom: 10px">
            <el-card :body-style="{ padding: '0px' }">
              <div class="img-box">
                <img
                  src="http://itsyuekao.com:5000/_uploads/IMAGE/413345-svetik_1600x1200.jpg"
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
          <el-col :md="8" :xs="24">
            <el-card :body-style="{ padding: '0px' }">
              <div class="img-box">
                <img
                  src="http://itsyuekao.com:5000/_uploads/IMAGE/DA2K_1-1600x1200.jpg"
                  class="image">
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
    },
    computed:{
	    isPc(){
		    let [userAgentInfo,flag,Agents] = [navigator.userAgent,true,["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"]]
		    for (let v = 0; v < Agents.length; v++) {
			    if (userAgentInfo.indexOf(Agents[v]) > 0) {
				    flag = false
				    break
			    }
		    }
		    return flag
	    }
    }
};
</script>

<style scoped>
.explore {
  margin: 50px;
  background: #f8f8fa;
}
.explore1 {
  background: #f8f8fa;
}
.explore .title {
  margin-top: 100px;
  font-size: 60px;
}
.explore1 .title{
  margin-top: 100px;
  font-size: 60px;
}
.explore .container {
  margin: 50px 0;
}
.explore1 .container{
  margin: 50px 10px;
}
.explore .container .text {
  padding: 30px;
  font-size: 22px;
  line-height: 40px;
  margin-top: 20px;
  transition: all 0.3s;
}
.explore1 .container .text{
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
.explore1 .container .text:hover{
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
