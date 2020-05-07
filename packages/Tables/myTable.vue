/**
 *@description Tables组件
 *@author xiahl
 *@createDate 2019/09/03
 */
<template>
  <div
    class="table-wrap"
    v-loading="loading"
    element-loading-text="数据加载中"
    element-loading-spinner="el-icon-loading"
  >
    <div class="table-tools" v-show="isShowTableTools">
      <div class="table-tools-left">
        <span class="table-tools-title" v-show="!!tableToolsTitle">
          {{ tableToolsTitle }}
        </span>
        <slot name="titleSuffix"></slot>
      </div>
      <div class="table-tools-right">
        <slot name="toolBtn"></slot>
      </div>
    </div>
    <div class="table-content">
      <el-table
        ref="multipleTable"
        :data="tableData"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        /** 自定义左侧列 */
        <slot name="left-cols"></slot>

        /** 多选配置列 */
        <el-table-column
          v-if="!tableSelectCol.hidden"
          type="selection"
          :width="tableSelectCol.width"
        >
        </el-table-column>

        /** 序号配置列 */
        <el-table-column
          v-if="!tableIndexCol.hidden"
          type="index"
          :label="tableIndexCol.name"
          :align="tableIndexCol.align"
          :width="tableIndexCol.width"
        >
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 + (currentPage - 1) * pageSize }}</span>
          </template>
        </el-table-column>

        /** 表格配置列 */
        <el-table-column
          v-for="(item, index) in tableCols"
          :key="index"
          :width="item.width"
          :min-width="item.minWidth"
          :align="item.align || 'center'"
          :fixed="item.fixed"
          :class-name="item.class || ''"
          :show-overflow-tooltip="
            item.overflowTip === undefined ? true : item.overflowTip
          "
          :sortable="item.isSort == undefined ? false : item.isSort"
          :type="item.type"
          :label="item.name"
          :prop="item.field"
        >
          <template slot-scope="scope">
            <div v-if="item.isImg" :class="['td-img-content']">
              <img
                v-if="!!scope.row[item.field]"
                :src="'data:image/jpg;base64,' + scope.row[item.field]"
                @click="handleImgPreview(scope.row[item.field])"
                alt="印张图片"
              />
              <span v-else>--</span>
            </div>
            <div v-if="item.isLongText" :class="['td-long-text-content']">
              <span @click="handleCodePreview(scope.row[item.field])">{{
                scope.row[item.field] | ellipsisText
              }}</span>
            </div>
            <template v-if="!item.isImg && !item.isLongText">
              <slot v-if="item.template" :name="item.template" :scope="scope">
              </slot>
              <span v-else class="my-row-col">{{
                scope.row[item.field] | ellipsisNullText
              }}</span>
            </template>
          </template>
        </el-table-column>

        /** 默认插槽 */
        <slot></slot>
      </el-table>
    </div>
    <div class="table-pages" v-show="isShowTablePages">
      <el-pagination
        v-if="tablePages.total > 0"
        ref="tablePages"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, slot, prev, pager, next, slot"
        :total="tablePages.total"
      >
        <div class="page-btns">
          <el-button
            type="button"
            class="page-btn first"
            ref="tablePageFirst"
            :disabled="isPageFirstBtn"
            @click="handleCurrentChange(1)"
            >首页</el-button
          >
          <el-button
            type="button"
            class="page-btn last"
            ref="tablePageLast"
            :disabled="isPageLastBtn"
            @click="handleCurrentChange(sizeCount)"
            >尾页</el-button
          >
        </div>
      </el-pagination>
    </div>
    <image-preview
      v-model="showImgPreview"
      :imgDataUrl="imgDataUrl"
    ></image-preview>
    <code-preview
      v-model="showCodePreview"
      :content="codeContent"
    ></code-preview>
  </div>
</template>
<script>
export default {
  name: "MyTable",
  props: {
    /** 表格数据加载进度 */
    loading: {
      type: Boolean,
      default: false
    },
    /** 是否显示表格工具栏项 */
    isShowTableTools: {
      type: Boolean,
      default: true
    },
    /** 表格工具栏项：标题项 */
    tableToolsTitle: {
      type: String,
      default: ""
    },
    /** 序号配置项 */
    tableIndexCol: {
      type: Object,
      default: () => {
        return {
          name: "序号",
          align: "center",
          width: "55px",
          hidden: false
        };
      }
    },
    /** 数据选择配置项 */
    tableSelectCol: {
      type: Object,
      default: () => {
        return {
          width: "55px",
          hidden: true
        };
      }
    },
    /** 表格数据 */
    tableData: {
      type: Array,
      default: () => {}
    },
    /** 表格列配置 */
    tableCols: {
      type: Array,
      default: () => {}
    },
    /** 是否显示分页 */
    isShowTablePages: {
      type: Boolean,
      default: true
    },
    /** 表格页面参数配置 */
    tablePages: {
      type: Object,
      default: () => {
        return {
          total: 0,
          current: 1,
          size: 10
        };
      }
    }
  },
  data() {
    return {
      multipleSelection: [],
      showImgPreview: false,
      imgDataUrl: "",
      showCodePreview: false,
      codeContent: "{}"
    };
  },
  computed: {
    currentPage: {
      get: function() {
        return this.tablePages.current * 1 || 1;
      },
      set: function(newVal) {
        this.tablePages.current = newVal;
      }
    },
    pageSize: {
      get: function() {
        return this.tablePages.size * 1 || 10;
      },
      set: function(newVal) {
        this.tablePages.size = newVal;
      }
    },
    sizeCount: function() {
      return parseInt(
        (this.tablePages.total + this.pageSize - 1) / this.pageSize
      );
    },
    isPageFirstBtn: function() {
      return this.currentPage == 1;
    },
    isPageLastBtn: function() {
      return this.currentPage == this.sizeCount;
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.$emit("selectionChange", val);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.$emit("sizeChange", {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      });
    },
    handleCurrentChange(val) {
      // 设置当前页
      this.currentPage = val;

      // 设置首页，尾页按钮可用状态
      let _pageChildren = this.$refs.tablePages.$children,
        _len = _pageChildren.length - 1,
        _firstEle = _pageChildren[_len - 4].$vnode.elm.querySelector(".first"),
        _lastEle = _pageChildren[_len].$vnode.elm.querySelector(".last");

      _firstEle.disabled = this.isPageFirstBtn;
      _firstEle.disabled
        ? _firstEle.classList.add("is-disabled")
        : _firstEle.classList.remove("is-disabled");

      _lastEle.disabled = this.isPageLastBtn;
      _lastEle.disabled
        ? _lastEle.classList.add("is-disabled")
        : _lastEle.classList.remove("is-disabled");

      // 发送事件
      this.$emit("currentChange", {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      });
    },
    handleImgPreview(imgDataUrl) {
      this.showImgPreview = true;
      this.imgDataUrl = "data:image/jpg;base64," + imgDataUrl;
    },
    handleCodePreview(content) {
      this.showCodePreview = true;
      this.codeContent = content;
    }
  }
};
</script>
