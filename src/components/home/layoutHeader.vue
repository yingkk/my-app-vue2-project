<template>
  <header class="layout-header">
    <div class="layout-header_collapse" @click="handleClick">
      <i :class="[collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"></i>
    </div>
    <login-userinfo></login-userinfo>
  </header>
</template>
<script>
import loginUserinfo from "@/components/home/loginUserinfo.vue";
export default {
  components: {
    loginUserinfo: loginUserinfo,
  },
  props: {
    collapse: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("change");
    },
  },
};
</script>
<style lang="less" scoped>
.layout-header {
  flex: none;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #eaeefb;
  background: #ffffff;
  .layout-header_collapse {
    font-size: 24px;
    cursor: pointer;
  }
  .layout-header_collapse:hover {
    color: #409eff;
  }
}
</style>
