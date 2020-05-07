<template>
  <ho-button
    :disabled="disableBtn"
    class="search-btn"
    :type="type"
    @click="handleClick"
  >
    <img class="search-btn__img" src="./search-btn-icon.png" alt />
    <span class="search-btn__text">搜索</span>
  </ho-button>
</template>

<script>
export default {
  name: "search-button",
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
.search-btn {
  width: 120px;
  height: 46px;
  line-height: 46px;
  background: rgba(42, 152, 255, 1);
  border-radius: 6px;
  .search-btn__text {
    color: #ffffff;
    vertical-align: middle;
  }
}
</style>
