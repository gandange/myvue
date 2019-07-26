<template>
  <div class="login_content">
    <div class="login_eject">
      <div class="header_img">
        <img src="../assets/gyy.jpg" alt />
      </div>
      <div class="input_table_info">
        <el-form label-width="80px" :model="loginform" :rules="rules" ref="resetForme">
          <el-form-item label="用户名" prop="username">
            <el-input prefix-icon="el-icon-s-custom" v-model="loginform.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              prefix-icon="el-icon-s-cooperation"
              v-model="loginform.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="subformdata">登录</el-button>
            <el-button type="info" @click="clearFrome">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginform: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码也是必不可少的哟！', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    clearFrome() {
      // 清空表单
      this.$refs.resetForme.resetFields()
    },
    subformdata() {
      // 表单预验证，需要等上面的rules的验证通过返回 true
      this.$refs.resetForme.validate(async vali => {
        // 如果验证没有通过就不执行下面的代码
        if (!vali) return
        // 验证通过之后发起 axios请求
        const { data: res } = await this.$axios.post('login', this.loginform)
        if (res.meta.status !== 200) return this.$message('用户名或者密码错误')
        this.$message.success('登录成功')
        // 将身份令牌 toke 存入 sessionStorage
        window.sessionStorage.setItem('token', res.data.token)
        // 通过编程路由跳转到 首页
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_content {
  background-color: #f2f2f2;
  height: 100%;
  .login_eject {
    width: 500px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #f6f6f6;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transform: translateY(50%);
    position: relative;
    .header_img {
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      left: 50%;
      transform: translate(-50%, -120px);
      background: #fff;
      img {
        width: 100%;
      }
    }
    .input_table_info {
      width: 450px;
      margin: 100px auto 0px auto;
    }
  }
}
</style>
