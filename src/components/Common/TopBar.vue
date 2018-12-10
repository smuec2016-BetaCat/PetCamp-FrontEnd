<template>
  <el-row class="top-bar hidden-sm-and-down">
    <el-col :span="14" :offset="5">
      <ul>
        <li v-for="item in topBarItem" :key="item.id">
          <router-link v-text="item.title" :to="item.url" :class="{'text-danger':item.disabled}"></router-link>
        </li>
        <li v-if="!ifLogin">
          <router-link to="/Login">请登录|注册</router-link>
        </li>
        <li v-if="ifLogin">
          <router-link to="" @click.native="logout">欢迎回来 {{username}} | 注销</router-link>
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
        { id: 0, title: "我的订单", url: "/MyOrder", disabled: false},
        { id: 1, title: "我的营地", url: "/", disabled: true},
        { id: 2, title: "收藏夹", url: "/", disabled: true},
        { id: 3, title: "购物车", url: "/ShoppingList", disabled: false},
      ],
      username:this.$global.user.username
    }
  },
  methods:{
    logout(){
      let conf = confirm("您确定要注销吗？")
      if (!conf){
        return 0
      }
      this.$global.setUser({})
      this.$global.setToken("")
      this.username = ""
    }
  },
  computed:{
    ifLogin(){
        return this.username !== ""
    }
  }
}
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

