# archer

`Archer` 是一个面向 **移动端** 的、基于 `stylus` 的样式工具库。

`Archer` 起源于 `est` 项目，专注于 **纯移动端** 浏览器的样式展示。
如有 **桌面端** 需求，请果断出门右转去找 [`est`](http://ecomfe.github.io/est/) 先森。

## API

### Normalize

#### normalize()

基于 `normalize.css`，用来归一化不同浏览器下的页面样式。

    normalize()

### Functions

函数主要用于对样式的 `value` 进行处理。

#### px_to_rem(pixel)

将值的单位从 `px` 转为 `rem`。

    .entry p
        font-size: px_to_rem(14)
        line-height: px_to_rem(22)

#### hidpi(dppx = 1.3)

基于 `min-device-pixel-ratio` 生成针对高分辨率模式的 media query，默认值为 `1.3`。

    .img
        media_query = hidpi()
        @media media_query
            background-image: url('img@2x.png')

### Utils

常用工具型 Mixin。

#### clearfix()

建立 BFC 清除元素内部的浮动，使元素获得应有的高度。

    .list-container
        .clearfix()
        li
            float: left

#### size(width, height)

设定元素的尺寸，当参数只写1个时生成正方形。

    .square
        size: 20px
    .rect
        size: 200px 80px

#### retina-image(path, width, height)

高清屏图片支持。

    .icon
        retina-image: "../img/icon.png" 32px 32px
        size: 32px

#### hide-text()

隐藏文字。

    .icon
        size: 32px
        hide-text()

#### ellipsis()

单行溢出文本显示省略号。

    .desc
        ellipsis()
