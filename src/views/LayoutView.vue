<template>
  <div class="layout">
    <div class="layout-left">
      <layout-sider :collapse="isCollapse"></layout-sider>
    </div>
    <div class="layout-right">
      <layout-header
        :collapse="isCollapse"
        @change="handleChange"
      ></layout-header>
      <layout-main></layout-main>
      <layout-footer></layout-footer>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import layoutHeader from "@/components/home/layoutHeader.vue";
import layoutSider from "@/components/home/layoutSider.vue";
import layoutMain from "@/components/home/layoutMain.vue";
import layoutFooter from "@/components/home/layoutFooter.vue";
export default {
  components: {
    layoutSider: layoutSider,
    layoutHeader: layoutHeader,
    layoutMain: layoutMain,
    layoutFooter: layoutFooter,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  async created() {
    await this.fetchUsers();
  },
  computed: {
    ...mapState("user", ["users"]),
  },
  methods: {
    ...mapActions("user", ["fetchUsers"]),
    handleChange() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
<style lang="less" scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100%;
  .layout-left {
    flex: none;
    background-color: #545c64;
    color: #f2f2f2;
  }
  .layout-right {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
  }
}
</style>
