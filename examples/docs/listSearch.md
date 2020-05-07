<style>
  .btn--wp {
    margin-right: 10px;
  }
</style>
<script>
export default {
  data(){
    return {
      seachform: [
        {
          labelval: "用户信息",
          labelWidth: "80px",
          type: "Input",
          val: "",
          placeholder: "请输入姓名或身份证号"
        },
        {
          labelval: "账号",
          labelWidth: "80px",
          type: "Input",
          val: "",
          placeholder: "请输入账号"
        },
        {
          labelval: "认证状态",
          labelWidth: "80px",
          type: "Select",
          val: "",
          selectList: [
            {
              labelval: "认证通过",
              val: "AUTHED"
            },
            {
              labelval: "认证中",
              val: "AUTHING"
            },
            {
              labelval: "待审核",
              val: "UNAUTH"
            },
            {
              labelval: "认证失败",
              val: "FAIL"
            }
          ],
          placeholder: "请选择"
        },
        {
          labelval: "账号状态",
          labelWidth: "80px",
          type: "Select",
          val: "",
          selectList: [
            {
              labelval: "正常",
              val: "NORMAL"
            },
            {
              labelval: "禁用",
              val: "FREEZE"
            }
          ],
          placeholder: "请选择"
        }
      ]
    }
  
  }
}
</script>
## 搜索条件组件

### 基本用法
:::demo
```html
<template>
  <list-search :seachform="seachform"></list-search>
</template>
<script>
  export default {
    data(){
      return {
        seachform: [
        {
          labelval: "用户信息",
          labelWidth: "80px",
          type: "Input",
          val: "",
          placeholder: "请输入姓名或身份证号"
        },
        {
          labelval: "账号",
          labelWidth: "80px",
          type: "Input",
          val: "",
          placeholder: "请输入账号"
        },
        {
          labelval: "认证状态",
          labelWidth: "80px",
          type: "Select",
          val: "",
          selectList: [
            {
              labelval: "认证通过",
              val: "AUTHED"
            },
            {
              labelval: "认证中",
              val: "AUTHING"
            },
            {
              labelval: "待审核",
              val: "UNAUTH"
            },
            {
              labelval: "认证失败",
              val: "FAIL"
            }
          ],
          placeholder: "请选择"
        },
        {
          labelval: "账号状态",
          labelWidth: "80px",
          type: "Select",
          val: "",
          selectList: [
            {
              labelval: "正常",
              val: "NORMAL"
            },
            {
              labelval: "禁用",
              val: "FREEZE"
            }
          ],
          placeholder: "请选择"
        }
      ]
    }
      }
    }
  }
</script>
```
:::

### 属性值

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| seachform | 搜索条件 |	Array |	 |	[] |
