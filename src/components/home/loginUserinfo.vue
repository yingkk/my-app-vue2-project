<template>
  <div class="login-userinfo">
    <div class="login-userinfo_avatar">
      <el-avatar :size="50" :src="userInfo.avatar"></el-avatar>
    </div>
    <div class="login-userinfo_dropmenu">
      <el-dropdown @command="handleLogout">
        <span class="el-dropdown-link">
          {{ userInfo.loginame }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      avatarUrl: "",
      username: "Admin",
    };
  },
  computed: {
    ...mapState("user", ["userInfo"]),
  },
  methods: {
    ...mapActions("user", ["logout"]),
    async handleLogout(command) {
      if (command === "logout") {
        await this.logout();
      }
    },
  },
};
</script>
<style lang="less" scoped>
.login-userinfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .login-userinfo_avatar {
  }
  .login-userinfo_dropmenu {
    margin-left: 30px;
  }
}
</style>
