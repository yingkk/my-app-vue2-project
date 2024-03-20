<template>
  <aside :class="['layout-sider', { 'layout-sider_collapse': collapse }]">
    <sys-logo :collapse="collapse"></sys-logo>
    <nav-menu :collapse="collapse"></nav-menu>
  </aside>
</template>
<script>
import sysLogo from "@/components/home/sysLogo.vue";
import navMenu from "@/components/home/navMenu.vue";
export default {
  components: {
    sysLogo: sysLogo,
    navMenu: navMenu,
  },
  props: {
    collapse: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
<style lang="less" scoped>
.layout-sider {
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: width 0.6s;
}
.layout-sider_collapse {
  width: 64px !important;
  transition: width 0.6s;
}
</style>
