# Icon 图标
<!-- {.md} -->

提供了一套常用的图标集合。

<!-- {.md} -->

## 如何使用
<!-- {.md} -->

方式一：
通过`bjca-icon`标签来引用

::: demo

```html
<bjca-icon class="bjca-icon-del"></bjca-icon>
```

:::

### 图标集合

<ul class="icons-list">
    <li class="icon">
        <div class="icon-item">
            <bjca-icon class="bjca-icon-del"></bjca-icon>
        </div>
        <span class="icon-name">bjca-icon-del</span>
    </li>
</ul>

### Attributes
|    参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 图标名称  | string  | -          |    -     |
| color    | 图标颜色  | string  | -           |    -    |
| size    | 图标大小  | number  | -           |    -    |
| symbol    | 是否多色（开启将以`svg`标签方式引入图标）  | boolean  | `true`,`false`          |    `true`     |
