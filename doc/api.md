# API

## Normalize

### normalize()

基于 `normalize.css`，用来归一化不同浏览器下的页面样式。

    normalize()

## Functions

函数主要用于对样式的 `value` 进行处理。

### px_to_rem(pixel)

将值的单位从 `px` 转为 `rem`，根据配置项 `$font_size_pixel` 计算。

**source:**

```css
.entry p
    font-size: px_to_rem(14)
    line-height: px_to_rem(22)
```

**output:**

```
.entry p {
  font-size: 0.875rem;
  line-height: 1.375rem;
}
```

### hidpi(dppx = 1.3)

基于 `min-device-pixel-ratio` 生成针对高分辨率模式的 media query，默认值为 `1.3`（`$retina_dppx`）。

**source:**

```css
.img
    media_query = hidpi()
    @media media_query
        background-image: url('img@2x.png')
```

**output:**

```css
@media only screen and (-webkit-min-device-pixel-ratio:1.3), only screen and (min-resolution:125dpi) {
  .img {
    background-image: url("img@2x.png");
  }
}
```

## Utils

常用工具型 Mixin。

### clearfix()

建立 BFC 清除元素内部的浮动，使元素获得应有的高度。

**source:**

```css
.list-container
    clearfix()
    li
        float: left
```

**output:**

```css
.list-container:after,
.list-container:before {
  content: " ";
  display: table;
}

.list-container:after {
  clear: both;
}

.list-container li {
  float: left;
}
```

### size: width, height

设定元素的尺寸，当参数只写1个时生成正方形。

**source:**

```css
.square
    size: 20px
.rect
    size: 200px 80px
```

**output:**

```css
.square {
  width: 20px;
  height: 20px;
}

.rect {
  width: 200px;
  height: 80px;
}
```

### retina-image: path, width, height

高清屏图片支持，依赖两个相关的配置 `$retina_dppx`、`$retina_suffix`，高清图片默认为 `@2x` 后缀。

**source:**

```css
.icon
    retina-image: "../img/icon.png" 32px 32px
    size: 32px
```

**output:**

```css
.icon {
  background-image: url("../img/icon.png");
  width: 32px;
  height: 32px;
}

@media only screen and (-webkit-min-device-pixel-ratio:1.3), only screen and (min-resolution:125dpi) {
  .icon {
    background-image: url("../img/icon@2x.png");
    -webkit-background-size: 32px 32px;
    background-size: 32px 32px;
  }
}
```

### hide-text()

隐藏文字，常用于用背景图片实现的图标。

**source:**

```css
.icon
    size: 32px
    hide-text()
```

**output:**

```css
.icon {
  width: 32px;
  height: 32px;
  color: transparent;
  font: 0/0 a;
  text-shadow: none;
}
```

### ellipsis()

单行溢出文本显示省略号。

**source:**

```css
.desc
    ellipsis()
```

**output:**

```css
.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### position

快速设置 `fixed`、`absolute`、`relative` 类型的CSS属性。

语法：`fixed|absolute|relative: top|bottom|left|right [n], ...`

**source:**

```css
body
    fixed: top 45px, bottom, left, right
.scroll-top
    fixed: bottom 20px, right 20px
.box
    absolute: right 20px, top
```

**output:**

```css
body {
  position: fixed;
  top: 45px;
  bottom: 0;
  left: 0;
  right: 0;
}

.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.box {
  position: absolute;
  right: 20px;
  top: 0;
}
```
