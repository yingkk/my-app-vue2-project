<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <div class="login-container">
      <div class="tabs">
        <div
          :class="['tab-item', { active: index === activeTabIndex }]"
          v-for="(tab, index) in tabs"
          :key="'tab' + index"
          @click="handleClick(index)"
        >
          {{ tab }}
        </div>
      </div>
      <div class="form-container">
        <template v-if="!activeTabIndex">
          <el-form
            :model="loginForm"
            :rules="loginRules"
            ref="loginForm"
            label-width="100px"
          >
            <el-form-item label="用户名：" prop="username">
              <el-input
                type="text"
                v-model="loginForm.username"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                round
                class="submit-button"
                type="primary"
                @click="submitForm('loginForm')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </template>
        <template v-else> </template>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      tabs: ["登录", "注册"],
      activeTabIndex: 0,
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        password: [{ required: true, trigger: "blur" }],
        username: [{ required: true, trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    handleClick(index) {
      this.activeTabIndex = index;
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.login(this.loginForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  min-width: 900px;
  height: 100vh;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
  .login-container {
    width: 400px;
    margin: 0 auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #969696;
      .tab-item {
        height: 46px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 18px;
        cursor: pointer;
        position: relative;
        transition: opacity 0.5s ease;
        opacity: 1;
      }
      .tab-item:not(:first-child) {
        margin-left: 16px;
      }
      .active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
      }
    }
    .form-container {
      margin-top: 40px;
      .submit-button {
        width: 100%;
      }
    }
    /deep/
      .el-form-item.is-required:not(.is-no-asterisk)
      > .el-form-item__label::before {
      content: "";
    }
  }
}
</style>
