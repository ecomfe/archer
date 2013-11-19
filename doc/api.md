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

### arrow: size, color, direction, start_position, start_offset

应用于 `position` 为 `relative/absolute/fixed` 的元素，为其生成三角剪头。

+ `size`: 箭头大小
+ `color`: 箭头颜色
+ `direction`: 箭头在容器的方位（left|right|top|bottom）
+ `start_position`: 位置起始方向（center|left|right|top|bottom），默认为 `center`
+ `start_offset`: 位置偏移量，默认为 `0`

注：假如 `direction` 为 *纵向*，那么 `start_position` 的值只能是 *横向* 或 `center`，反之亦然。

**source:**

```css
.arrow-box
    size: 300px
    arrow: 30px #CCC top right 20px
```

**output:**

```css
.arrow-box {
  width: 300px;
  height: 300px;
  position: relative;
}

.arrow-box:after {
  position: absolute;
  width: 0;
  height: 0;
  content: ' ';
  pointer-events: none;
  border: solid transparent;
  border-width: 15px;
  border-bottom-color: #ccc;
  bottom: 100%;
  right: 20px;
}
```

## Animate

### animate(selector, type, duration, fill_mode)

生成动画。

+ `selector`: 需要生成动画元素的selector
+ `type`: 动画类型，如 `tada`、`bounce` 等
+ `duration`: 动画完成一个周期需要的时间，同 `animation-duration`
+ `fill_mode`: 规定对象动画时间之外的状态，同 `animation-fill-mode`

目前 `animate` 支持的类型有：

    bounce, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp,
    bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp,
    fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight,
    fadeInRightBig, fadeInUp, fadeInUpBig, fadeOut, fadeOutDown, fadeOutDownBig,
    fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp,
    fadeOutUpBig, flash, flip, flipInX, flipInY, flipOutX, flipOutY, hinge,
    lightSpeedIn, lightSpeedOut, pulse, rollIn, rollOut, rotateIn,
    rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight,
    rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft,
    rotateOutUpRight, shake, slideInDown, slideInLeft, slideInRight,
    slideOutLeft, slideOutRight, slideOutUp, swing, tada, wobble

**source:**

```css
animate(".anim-bounce", bounce, 0.5s, both)
```

**output:**

```css
.anim-bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
```