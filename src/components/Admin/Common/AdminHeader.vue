<template>
    <div class="header">
        <!--TODO(Ron): Add logo-->
        <div class="logo">PetCamp 控制台</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- message center -->
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- user avator -->
                <!--TODO(Ron): Config the img tag-->
                <div class="user-avator"><img src="" alt=""></div>
                <!-- user name menu -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'Ron',
                message: 2
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem("ms_username")
                return username ? username : this.name
            }
        },
        methods:{
            // user name menu event
            handleCommand(command) {
                if(command === 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login')
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
        background: #242f42;
    }
    .header .logo{
        float: left;
        width:250px;
        line-height: 70px;
    }
    .header-right{
        float: right;
        padding-right: 50px;
    }
    .header-user-con{
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-bell-badge{
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    /*.el-dropdown-menu__item{*/
        /*text-align: center;*/
    /*}*/
</style>
