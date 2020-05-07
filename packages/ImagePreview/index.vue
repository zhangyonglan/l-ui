/**
*@description 图片预览
*@createBy xiahl
*@createDate 2019-09-19
*@updateBy xiahl
*@updateDate 2019-09-19
*/
<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :title="title"
    class="my-dialog image-preview-dialog"
    :show-close="true"
    :width="width"
  >
    <el-container class="my-dialog-container">
      <img :src="imgDataUrl" :width="imgWidth" :height="imgHeight" />
    </el-container>
  </el-dialog>
</template>

<script>
export default {
  name: "ImagePreviewDialog",
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
      default: "图片预览"
    },
    width: {
      type: [String],
      default: "380px"
    },
    imgDataUrl: {
      type: [String],
      required: true
    },
    imgWidth: {
      type: [Number],
      default: 250
    },
    imgHeight: {
      type: [Number],
      default: 250
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
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.image-preview-dialog {
  img {
    margin: auto;
  }
}
</style>

