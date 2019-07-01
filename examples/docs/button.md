<style>
  .btn--wp {
    margin-right: 10px;
  }
</style>
## 按钮

### 基本用法
:::demo
```html
<l-button>default</l-button>
<l-button type='primary'>primary</l-button>
<l-button type='success'>success</l-button>
<l-button type='error'>error</l-button>
```
:::

### 启用动画效果
:::demo
``` html
<l-button :animation='true'>default</l-button>
<l-button type='primary' :animation='true'>primary</l-button>
<l-button type='success' :animation='true'>success</l-button>
<l-button type='error' :animation='true'>error</l-button>
```
:::

### 禁用状态
:::demo
``` html
<l-button disabled>default</l-button>
<l-button type='primary' disabled>primary</l-button>
<l-button type='success' disabled>success</l-button>
<l-button type='error' disabled>error</l-button>
```
:::

### 大小
:::demo
``` html
<l-button size='sm'>default</l-button>
<l-button>default</l-button>
<l-button size='lg'>default</l-button>

<l-button type='primary' size='sm'>default</l-button>
<l-button type='primary'>default</l-button>
<l-button type='primary' size='lg'>default</l-button>
```
:::

### 属性值

| 参数 | 说明 |	类型 |	可选值 |	默认值 |
|---|---|---|---|---|
| type | 按钮的类型 |	string |	default,primary,success, error |	default |
| size | 按钮的大小 |	string |	sm,lg |	null |
| animation | 是否启用动画效果 |	boolean |	- |	false |
| disabled | 是否禁用 |	boolean |	- |	false |
