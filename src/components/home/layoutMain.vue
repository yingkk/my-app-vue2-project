<template>
  <div class="layout-main">
    <x-breadcrumb></x-breadcrumb>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import xBreadcrumb from "./xBreadcrumb.vue";
export default {
  components: {
    xBreadcrumb: xBreadcrumb,
  },
  data() {
    return {};
  },
  computed: {
    routes() {
      console.log(this.$route);
      return [];
    },
  },
};
</script>
<style lang="less" scoped>
.layout-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  main {
    width: 100%;
    height: 100%;
    background: #ffffff;
    overflow: hidden;
  }
}
</style>
