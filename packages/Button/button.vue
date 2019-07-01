<template>
  <button
    class="l-button"
    :class="[
        type?'l-button--'+type:'',
        size?'l-button--'+size:'',
        {
          'is-disabled':disabled,
        }
    ]"
    @click="handleClick"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "l-button",
  props: {
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    type: {
      //组件类型，可选，主要是背景色的不同（可选值：primary,danger,warning）
      type: String,
      default: "primary"
    },
    size: {
      //组件的大小，可选，可选值（small,normal,large）
      type: String,
      default: () => {
        return "normal";
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style lang="less" scoped>
@import'../theme/base.less';

@import "../theme/button.less";
</style>
