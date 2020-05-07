<template>
  <div>
    <ul>
      <li v-for="(item,index) in crumbAry" :key="index">{{item.desc}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      crumbAry: []
    };
  },
  watch: {
    $route(newVal) {
      this.crumbAry = newVal.matched;
    }
  }
};
</script>
<style>
li{
    list-style: none;
}
</style>
