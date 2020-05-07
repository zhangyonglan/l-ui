/**
*@description 搜索条件组件
*@author dongbin
*/
<template>
  <div class="search-box">
    <el-form class="list-seach-form">
      <el-form-item
        v-for="(item, index) in seachform"
        :key="index"
        :label="item.labelval"
        :style="item.style"
        :label-width="item.labelWidth"
      >
        <el-input
          v-if="item.type == 'Input'"
          v-model="item.val"
          :placeholder="item.placeholder"
          clearable
          v-filter-special-char
        />
        <el-select
          v-if="item.type == 'Select'"
          v-model="item.val"
          :multiple="item.multiple"
          :placeholder="item.placeholder"
        >
          <el-option
            v-for="(self, i) in item.selectList"
            :key="i"
            :label="self.labelval"
            :value="self.val"
          />
        </el-select>
        <el-date-picker
          v-if="item.type == 'Date'"
          v-model="item.val"
          type="date"
          value-format="yyyy-MM-dd"
          :placeholder="item.placeholder"
        />
        <el-date-picker
          v-if="item.type == 'Datetimerange'"
          v-model="item.val"
          :type="item.hasTime ? 'datetimerange' : 'daterange'"
          :value-format="item.format ? item.format : 'yyyy-MM-dd'"
          unlink-panels
          :placeholder="item.placeholder"
        />
      </el-form-item>
      <el-form-item label class="search-btn-group">
        <!-- <search-button @click="handleSearch"></search-button>
        <reset-button @click="handleResetSearch"></reset-button> -->
      </el-form-item>
      <slot></slot>
    </el-form>
  </div>
</template>
<script>
export default {
  name:'list-search',
  props: {
    seachform: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    handleSearch() {
      this.$emit("seachBtn", this.seachform);
    },
    handleResetSearch() {
      this.seachReset();
      this.$emit("resetBtn", this.seachform);
    },
    seachReset() {
      this.seachform.forEach(element => {
        element.val = "";
      });
    }
  },
  directives: {
    filterSpecialChar: {
      update: function(el, { value, modifiers }, vnode) {
        let _elComp = vnode.componentInstance || "";
        try {
          if (!_elComp.value) {
            return false;
          }
          _elComp._props.value = _elComp.value.replace(
            /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,
            ""
          );
        } catch (e) {
          console.log("查询输入框特殊字符过滤异常：", e);
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">
.search-box {
  .list-seach-form {
    padding: 22px 20px 2px 20px;
    margin-bottom: 20px;
    background: #fff;
    border-radius: 6px;
    /deep/ .el-form-item {
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 20px;
      .el-form-item__label {
        color: #b2b9d2;
      }
    }
    .el-date-editor.el-input {
      width: 100%;
    }
    .search-btn-group {
      // float: right;
    }
  }
}
</style>
