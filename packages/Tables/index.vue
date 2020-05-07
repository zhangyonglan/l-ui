/**
*@description Tables组件
*@author dongbin
*/
<template>
    <div class="table-box">
        <el-table
            ref="multipleTable"
            :data="tables"
            stripe
            style="width: 100%"
            @selection-change="handleSelectionChange"
        >
            <el-table-column
                v-for="(item,index) in currentData"
                :key="index"
                :width="item.width"
                :type="item.type"
                :label="item.label"
                :prop="item.value"
                :align="item.align"
            ></el-table-column>
            <slot></slot>
        </el-table>
    </div>
</template>
<script>
export default {
    props: {
        tables: {
            type: Array,
            default: () => {}
        },
        currentData: {
            type: Array,
            default: () => {}
        }
    },
    data() {
        return {
            masg: "aaa"
        };
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
};
</script>
<style lang="scss">
.el-table {
    th {
        background: #fff;
    }
}
</style>