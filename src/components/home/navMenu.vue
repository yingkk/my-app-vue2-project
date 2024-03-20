<template>
  <div class="nav-menu">
    <menu-tree :treeData="menus" :collapse="collapse"></menu-tree>
  </div>
</template>
<script>
import { mapState } from "vuex";
import menuTree from "@/components/home/menuTree";
export default {
  components: {
    menuTree: menuTree,
  },
  props: {
    collapse: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    ...mapState("user", ["menus"]),
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.nav-menu {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
