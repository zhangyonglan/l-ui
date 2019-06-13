<template>
  <div id="app">
    <page-header class="page-header"></page-header>
    <div class="container">
      <!-- <el-scrollbar> -->
      <side-nav class="nav"></side-nav>
      <!-- </el-scrollbar> -->
      <router-view class="view"/>
    </div>
    <!-- <page-footer></page-footer> -->
  </div>
</template>

<script>
import PageHeader from "@/components/header";
import PageFooter from "@/components/footer";
import SideNav from "@/components/sidenav";
export default {
  name: "app",
  components: {
    PageHeader,
    PageFooter,
    SideNav
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 60px;
  background-color: #fff;
  height: 100%;
  overflow: hidden;
  .nav {
    float: left;
    width: 210px;
    height:100%;
    overflow: auto;
  }
  .view {
    float: left;
    width: calc(100% - 215px);
    height:100%;
    padding: 32px 48px 48px;
    box-sizing: border-box;
    overflow: auto;
  }
}
.scrollbar {
  height: 100%;
}
</style>
