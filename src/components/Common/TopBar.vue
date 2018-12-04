<template>
  <el-row class="top-bar hidden-sm-and-down">
    <el-col :span="20" :offset="2">
      <ul>
        <li v-for="item in topBarItem" :key="item.id">
          <router-link v-text="item.title" :to="item.url"></router-link>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "TopBar",
  data() {
    return {
      topBarItem: [
        { id: 0, title: "我的订单", url: "/" },
        { id: 1, title: "我的营地", url: "/" },
        { id: 2, title: "收藏夹", url: "/" },
        { id: 3, title: "购物车", url: "/" },
        { id: 4, title: "请登录|注册", url: "/Login" }
      ]
    };
  }
};
</script>
<style scoped>
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
</style>

