<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-reset"
    :collapse="collapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#409eff"
    :router="true"
    :unique-opened="true"
    :default-openeds="defaultOpeneds"
  >
    <menu-item
      v-for="item in treeData"
      :key="item.id"
      :nodeData="item"
    ></menu-item>
  </el-menu>
</template>
<script>
import menuItem from "@/components/home/menuItem.vue";
export default {
  components: {
    menuItem: menuItem,
  },
  props: {
    treeData: {
      type: Array,
      default: () => [],
    },
    collapse: {
      type: Boolean,
      default: () => false,
    },
  },
  created() {},
  computed: {
    defaultOpeneds() {
      // return this.$route.matched?.pop()?.parent?.path || [];
      return ["/user"];
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu-reset {
  border-right: unset;
}
</style>
