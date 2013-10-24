# archer

Mobile mixin library based on Stylus.

## API

### Normalize

#### normalize()

基于 `normalize.css`，用来归一化不同浏览器下的页面样式。

    normalize()

### Functions

函数主要用于对样式的 `value` 进行处理。

#### px2rem(pixel)

将值的单位从 `px` 转为 `rem`。

    .entry p
      font-size: px2rem(14)
      line-height: px2rem(22)

#### hidpi(ratio = 1.3)

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
