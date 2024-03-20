<template>
  <el-breadcrumb separator="/" class="x-breadcrumb">
    <el-breadcrumb-item
      :to="index ? { path: item.path } : ''"
      v-for="(item, index) in routes"
      :key="index"
      >{{ item.name }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>
<script>
export default {
  computed: {
    routes() {
      return this.$route.matched.map((t) => ({
        name: t.meta.name,
        path: t.path || "/",
      }));
    },
  },
};
</script>
<style lang="less" scoped>
.x-breadcrumb {
  height: 56px;
  display: flex;
  align-items: center;
}
</style>
