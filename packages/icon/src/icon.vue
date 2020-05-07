<template>
    <i :class="name?'bjca-icon-' + name:''"></i>
</template>

<script>
export default {
    name: "BjcaIcon",

    props: {
        name: String
    }
};
</script>
<style scoped>
@import url("../../theme/icon.scss");
</style>