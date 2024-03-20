<template>
  <div class="user-view">
    <el-table
      v-loading="isLoading"
      class="table"
      ref="userTable"
      :data="data"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="username" label="用户名" width="120"> </el-table-column>
      <el-table-column prop="birth" label="生日" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            title="编辑"
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.row)"
          ></el-button>
          <el-button
            title="删除"
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.pageIndex"
      :page-size="pageInfo.pageSize"
      :page-sizes="pageSizes"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
  </div>
</template>
<script>
import router from "@/router";
import { MessageBox } from "element-ui";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
      pageInfo: { pageSize: 20, pageIndex: 1 },
      pageSizes: [10, 20, 50, 100],
      data: null,
      total: null,
      totalPage: null,
    };
  },
  created() {
    this.getUserListPage();
  },
  watch: {
    pageInfo: {
      handler() {
        this.getUserListPage();
      },
      deep: true,
    },
  },
  computed: {},
  methods: {
    ...mapActions("user", [
      "fetchUsersPage",
      "addUser",
      "deleteUser",
      "updateUser",
      "updateUserProperty",
    ]),
    getUserListPage() {
      this.isLoading = true;
      this.fetchUsersPage(this.pageInfo).then(({ data }) => {
        const { list, total, totalPage } = data;
        this.data = list;
        this.total = total;
        this.totalPage = totalPage;
        this.isLoading = false;
      });
    },
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pageInfo.pageIndex = val;
    },
    handleEdit(data) {
      router.push("/user/:id", data);
    },
    async handleDelete({ id }) {
      await MessageBox.confirm("确定删除？", "删除", {
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      });
      this.isLoading = true;
      await this.deleteUser(id);
      this.isLoading = false;
      this.$message({
        message: "删除成功",
        type: "success",
      });
      await this.getUserListPage();
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.userTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.userTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style lang="less" scoped>
.user-view {
  width: 100%;
  height: 100%;
  .table {
    width: 100%;
    height: calc(100% - 32px);
    overflow-y: auto;
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
