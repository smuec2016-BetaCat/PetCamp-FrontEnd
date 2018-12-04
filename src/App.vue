<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    margin:0;
  background-color: #f0f3ef;
}
.el-form-item__label {
  text-align: left;
  font-weight: 600;
}
.el-upload-dragger{
  width: 100%;
}
.el-upload{
  width: 100%;
}
.el-dialog__title {
  font-size: 25px;
}
.el-input-number--mini .el-input__inner{
  padding: 0;
}
.el-input-number--mini .el-input-number__decrease, .el-input-number--mini .el-input-number__increase{
  width: 20px;
}
</style>
