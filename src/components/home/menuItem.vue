<template>
  <el-submenu :index="nodeData.path" v-if="nodeData.children?.length">
    <template slot="title">
      <i :class="nodeData.icon"></i>
      <span>{{ nodeData.name }}</span>
    </template>
    <menu-item
      v-for="item in nodeData.children"
      :key="item.id"
      :nodeData="item"
    ></menu-item>
  </el-submenu>
  <el-menu-item v-else :index="nodeData.path">
    <i :class="nodeData.icon"></i>
    <span slot="title">{{ nodeData.name }}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: "menuItem",
  props: {
    nodeData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="less" scoped></style>
