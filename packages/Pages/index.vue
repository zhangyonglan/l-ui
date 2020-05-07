/**
*@description 分页组件
*@author dongbin
*/
<template>
    <div class="pages-right">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
    </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {}
    },
    total: {
      type: Number,
      default: () => {}
    }
  },
    methods: {
      handleSizeChange(val) {
        this.$parent.handleSizeChange(val)
      },
      handleCurrentChange(val) {
        this.$parent.handleCurrentChange(val)
      }
    },
    data() {
      return {
        currentPage: 1
      };
    }
  
}
</script>
<style lang="scss" scoped>
  .pages-right{
    margin-top:20px;
    text-align:right;
    background:#fff;
    padding:10px 20px;
  }
</style>