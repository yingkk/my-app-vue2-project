<template>
  <div :class="['sys-logo', { 'sys-logo_collapse': collapse }]">
    <img class="sys-logo_icon" src="../../assets/logo.png" alt="CMS管理系统" />
    <!-- <transition name="slide-fade"> -->
    <span class="sys-logo_title" v-if="!collapse"><i>CMS管理系统</i></span>
    <!-- </transition> -->
  </div>
</template>
<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.sys-logo {
  flex: none;
  height: 72px;
  background-color: #434a50;
  padding: 0 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
  .sys-logo_icon {
    width: 40px;
  }
  .sys-logo_title {
    font-weight: 700;
    font-size: 20px;
    white-space: nowrap;
    display: inline-block;
    padding-left: 12px;
    width: 100%;
  }
}
.sys-logo_collapse {
  width: 64px;
}
</style>
