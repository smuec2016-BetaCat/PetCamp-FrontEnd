<template>
  <div>
    <div>
      <top-bar></top-bar>
      <!--logo and search box-->
      <div class="space hidden-sm-and-down"></div>
      <el-row class="logo-search-bar" :class="{'fixIt':!isPc}">
        <el-col :xs="{span: 22, offset: 1}" :md="{span: 14, offset: 5}">
          <el-col class="logo hidden-sm-and-down" :xs="24" :md="6">
            <a href="#">
              <img src="http://itsyuekao.com:5000/_uploads/IMAGE/logo-fixed.png" alt="logo">
            </a>
          </el-col>
          <el-col class="hidden-md-and-up" :xs="5" :md="3">
            <i class="toggle-side-bar" :class="{'el-icon-menu': !sidebar ,'el-icon-back': sidebar}" @click="ShowSideBar"></i>
          </el-col>
          <el-col class="search" :xs="18" :md="12">
            <el-input class="search-box" placeholder="欢迎来到PetCamp" v-model="input">
              <i class="el-icon-search" slot="suffix"></i>
            </el-input>
          </el-col>
          <el-col class="cart hidden-sm-and-down" :xs="24" :md="6">
            <el-badge :value="1" class="cart-badge">
              <el-button round icon="el-icon-goods" @click="shoppingcart">我的购物车</el-button>
            </el-badge>
          </el-col>
        </el-col>
        <!--sidebar-->
        <transition name="slide-fade" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
          <el-row v-if="sidebar" style="position: relative;z-index: 20;height: 100%;margin-top: 80px;">
            <el-col id="sidebar" ref="sidebar">
              <nav>
                <ul>
                  <li v-for="item in topBarItem" :key="item.id">
                    <router-link v-text="item.title" :to="item.url"></router-link>
                  </li>
                </ul>
              </nav>
              <nav>
                <ul>
                  <li v-for="item in navBarItem" :key="item.id">
                    <router-link v-text="item.title" :to="item.url"></router-link>
                  </li>
                </ul>
              </nav>
            </el-col>
          </el-row>
        </transition>
      </el-row>
      <el-row :class="{'fix2':!isPc}"></el-row>
      <div class="space hidden-sm-and-down"></div>
      <!--navigation-->
      <el-row class="navigation-bar hidden-sm-and-down">
        <el-col :span="14" :offset="5">
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
      topBarItem: [
          { id: 0, title: "我的订单", url: "/MyOrder"},
          { id: 1, title: "我的营地", url: "/" },
          { id: 2, title: "收藏夹", url: "/" },
          { id: 3, title: "购物车", url: "/ShoppingList" },
          { id: 4, title: "请登录|注册", url: "/Login" }
      ],
      navBarItem: [
        { id: 0, title: "营地首页", url: "/" },
        { id: 1, title: "宠物寄养", url: "/CommodityBrowsing/CommodityBrowsingList1" },
        { id: 2, title: "宠物领养", url: "/CommodityBrowsing/CommodityBrowsingList2" },
        { id: 3, title: "宠物零售", url: "/CommodityBrowsing/CommodityBrowsingList3" },
        { id: 4, title: "关于我们", url: "/" }
      ],
      sidebar:false,
    }
  },
    methods:{
      shoppingcart(){
        this.$router.push({path:"/shoppingList"})
      },
      ShowSideBar(){
          this.sidebar = !this.sidebar
      }
    },
  computed:{
    isPc() {
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
}
</script>

<style>
.space {
  height: 20px;
}

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
  color: #6A3906;
  transition: color 0.3s;
}

.logo-search-bar {
  height: 80px;
  padding: 10px 0;
  width: 100%;
  z-index: 40;
}
.logo-search-bar .logo {
  height: 60px;
}
.logo-search-bar .logo img {
  height: 140px;
  position: relative;
  bottom: 35px;
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
  margin: 5px 0 5px 0;
  height: 50px;
  float: right;
  font-size: 16px;
}
.logo-search-bar .cart sup {
  top: 10px;
  right: 15px;
}

.navigation-bar .navigation {
  text-align: center !important;
  height: 60px;
  box-shadow: 0 7px 10px 5px #eeeeee;
  margin-bottom: 30px;
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
  transition: all 0.3s;
  font-size: 18px;
}
.navigation-bar a:hover {
  color: #6A3906;
  font-size: 24px;
  transition: all 0.3s;
}

.toggle-side-bar {
  display: block;
  font-size: 30px;
  padding: 15px 15px;
  margin-right: 10px;
  color: #aaaaaa;
}
.toggle-side-bar:hover{
  color:#6A3906;
  transition: all 0.3s;
}
#sidebar{
  position: absolute;
  top:-9px;
  background-color: white;
  width: 220px;
  overflow: auto;
  padding: 10px 10px 10px 20px;
  text-align: left;
  box-shadow: 0 0 1px rgba(0,0,0,0.2);
}
#sidebar ul{
  padding-left: 15px;
}
#sidebar ul li{
  list-style: none;
  margin-top: 1em;
}
#sidebar ul li a{
  text-decoration: none;
  color: #34495e;
  font-size: 15px;
  padding-bottom: 3px;
}
#sidebar ul li a:hover{
  color:#6A3906;
  border-bottom: 2px solid #6A3906;
  transition: all 0.3s;
  font-size: 14px;
}
.fixIt{
  position: fixed;
  background-color: white;
  z-index: 30;
  box-shadow: 0 1px 1px 1px #eeeeee;
}
.fix2{
  height: 100px;
}
</style>

