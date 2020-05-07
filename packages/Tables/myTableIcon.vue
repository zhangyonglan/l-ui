<template>
  <div class="op-btn-group">
    <el-tooltip
      v-for="(item, index) in opBtnGroup"
      :key="index"
      popper-class="op-btn-tip"
      effect="light"
      :content="item.title"
    >
      <el-button
        type="text"
        class="table-btn"
        @click="item.event(myScope)"
        v-show="item.show(myScope)"
      >
        <img class="table-op-btn" :src="item.imgData" alt />
      </el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "MyTableIcon",
  props: {
    myScope: {
      type: Object,
      default: () => {}
    },
    opBtnGroup: {
      type: Array,
      default: () => {}
    }
  },
  methods: {}
};
</script>

