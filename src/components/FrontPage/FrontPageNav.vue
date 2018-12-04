<template>
  <div>
    <div style="margin-bottom: 5%">
      <top-bar></top-bar>
      <!--logo and search box-->
      <el-row class="logo-search-bar">
        <el-col :xs="{span: 22, offset: 1}" :md="{span: 20, offset: 2}">
          <el-col class="logo hidden-sm-and-down" :xs="24" :md="6">
            <a href="#">
              <img src="http://itsyuekao.com:5000/_uploads/IMAGE/logo.png" alt="logo">
            </a>
          </el-col>
		  <el-col class="hidden-md-and-up" :span="3">
			<i class="el-icon-menu toggle-side-bar"></i>
		  </el-col>
          <el-col class="search" :xs="21" :md="12">
            <el-input class="search-box" placeholder="欢迎来到PetCamp" v-model="input">
              <i class="el-icon-search" slot="suffix"></i>
            </el-input>
          </el-col>
          <el-col class="cart hidden-sm-and-down" :xs="24" :md="6">
            <el-button round icon="el-icon-goods">我的购物车</el-button>
          </el-col>
        </el-col>
      </el-row>
      <!--navigation-->
      <el-row class="navigation-bar hidden-sm-and-down">
        <el-col :span="20" :offset="2">
          <div class="navigation">
            <nav>
              <ul>
                <li v-for="item in navBarItem" :key="item.id">
                  <router-link v-text="item.title" :to="item.url"></router-link>
                </li>
              </ul>
            </nav>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/Common/TopBar";

export default {
  name: "FrontPageNav",
  components: { TopBar },
  data() {
    return {
      input: "",
      navBarItem: [
        { id: 0, title: "营地首页", url: "/" },
        { id: 1, title: "宠物寄养", url: "/" },
        { id: 2, title: "宠物领养", url: "/" },
        { id: 3, title: "宠物零售", url: "/" },
        { id: 4, title: "关于我们", url: "/" }
      ],
    };
  }
};
</script>

<style>
.top-bar {
  background-color: black;
  height: 35px;
}
.top-bar ul {
  text-align: right !important;
  margin: 0;
  padding: 0;
  color: #fff;
  list-style-type: disc;
}
.top-bar ul li {
  display: inline-block;
  margin: 0 15px;
}
.top-bar ul li a {
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  line-height: 35px;
  transition: color 0.3s;
}
.top-bar ul li :hover {
  color: #abd373;
  transition: color 0.3s;
}

.logo-search-bar {
  height: 120px;
  padding: 30px 0;
}
.logo-search-bar .logo {
  height: 60px;
  overflow: hidden;
}
.logo-search-bar .logo img {
  height: 100%;
  float: left;
}
.logo-search-bar .search {
  padding: 5px 0;
}
.logo-search-bar .search .el-input__inner {
  height: 50px;
  border-radius: 60px;
  font-size: 16px;
}
.logo-search-bar .search i {
  font-size: 20px;
  line-height: 50px;
  margin-right: 10px;
}
.logo-search-bar .cart .el-button {
  margin: 5px 0;
  height: 50px;
  float: right;
  font-size: 16px;
}

.navigation-bar .navigation {
  text-align: center !important;
  height: 60px;
  box-shadow: 0px 7px 10px 5px #eeeeee;
}
.navigation-bar nav {
  height: 100%;
}
.navigation-bar ul {
  height: 100%;
  list-style-type: disc;
}
.navigation-bar li {
  line-height: 40px;
  list-style: none;
  display: inline-block;
  margin-right: 5%;
  padding: 10px 0;
  position: relative;
}
.navigation-bar a {
  text-decoration: none;
  color: #111111;
  font-weight: 500;
  transition: color 0.3s;
  font-size: 18px;
}
.navigation-bar a:hover {
  color: #abd373;
  transition: color 0.3s;
}

.toggle-side-bar {
	display: block;
	font-size: 30px;
	padding: 15px 0;
	margin-right: 10px;
	color: #aaaaaa;
}
</style>

