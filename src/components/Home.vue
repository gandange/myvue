<template>
    <div>
        <h1>首页</h1>
        <el-button type="primary" @click="clearUser">退出登录</el-button>
    </div>
</template>
<script>
export default { 
    methods: {
        clearUser () {
            // 销毁本地的身份识别码
            const clearuser = window.sessionStorage.clear('token')
            if(!clearuser) this.$message.error('您已经成功退出')
            // 强制跳转到登录页面
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="less" scoped>

</style>
