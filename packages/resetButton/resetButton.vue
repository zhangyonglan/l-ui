<template>
  <ho-button
    :disabled="disableBtn"
    class="reset-btn"
    :type="type"
    @click="handleClick"
  >
    <img class="reset-btn__img" src="./reset-btn-icon.png" alt />
    <span class="reset-btn__text">重置</span>
  </ho-button>
</template>

<script>
export default {
  name: "reset-button",
  props: {
    disableBtn: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button"
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.reset-btn {
  width: 120px;
  height: 46px;
  line-height: 46px;
  background: #B2B9D2;
  border-radius: 6px;
  &:hover {
    border-color: transparent!important;
  }
  .reset-btn__text {
    color: #ffffff;
    vertical-align: middle;
  }
}
</style>
