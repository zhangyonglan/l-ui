/**
*@description 代码格式化预览
*@createBy xiahl
*@createDate 2019-09-20
*@updateBy xiahl
*@updateDate 2019-09-20
*/
<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :title="title"
    class="my-dialog code-preview-dialog"
    :show-close="true"
    :width="width"
  >
    <el-container class="my-dialog-container">
      <pre>{{ innerContent }}</pre>
    </el-container>
  </el-dialog>
</template>

<script>
export default {
  name: "CodePreviewDialog",
  model: {
    prop: "visible",
    event: "toggle"
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "内容预览"
    },
    width: {
      type: [String],
      default: "980px"
    },
    content: {
      type: [String],
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    dialogVisible: {
      get: function() {
        return this.visible;
      },
      set: function(val) {
        this.$emit("toggle", val);
      }
    },
    innerContent: function() {
      console.log("原JSON字符串：", this.content);
      return JSON.stringify(
        JSON.parse(this.content.replace(/:([0-9]*),/, ':"$1",')),
        null,
        4
      );
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.code-preview-dialog {
  .my-dialog-container {
    overflow: auto;
  }
}
</style>

