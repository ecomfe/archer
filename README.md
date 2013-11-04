# archer

`Archer` 是一个面向 **移动端** 的、基于 `stylus` 的样式工具库。

`Archer` 起源于 `est` 项目，专注于 **纯移动端** 浏览器的样式展示。
如有 **桌面端** 需求，请果断出门右转去找 [`est`](http://ecomfe.github.io/est/) 先森。

## Usage

### 安装

`archer` 是一个 `npm` 下的 package，请在 `项目根目录` 下直接安装：

    npm install archer

### 配置

修改 `edp` 项目的 [`edp-webserver-config.js`](demo/edp-webserver-config.js) 文件：

```javascript
// 文件头部引入 archer 模块
var archer = require( 'archer' );
...

// getLocations 部分，修改处理 css/stylus 的 handler
// 启用 archer 插件
        {
            location: /\.css($|\?)/, 
            handler: [
                autocss({
                    'stylus': archer()
                })
            ]
        },
        { 
            location: /\.styl($|\?)/, 
            handler: [
                file(),
                stylus(archer())
            ]
        },
        ...
```

### 使用

在 stylus 中直接引用即可：

```css
@import 'stylus'

normalize()
```

### 编译

`edp` 的 `stylus` 编译功能正在开发中，将在近期支持。

## 浏览器兼容

通过 `Archer` 写样式时，只用按照 **规范** 写法即可，会自动处理（大部分）浏览器兼容性问题。

如以下 `stylus` 代码：

```css
@import 'archer'

.container
    display: flex
    flex-flow: row wrap
    justify-content: space-around
.item
    size: 200px
    box-shadow: 1px 1px 5px rgba(0,0,0,.3)
```

将会输出以下CSS：

```css
.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}

.item {
  width: 200px;
  height: 200px;
  -webkit-box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
}
```

`Archer` 默认的兼容性配置为 `iOS >= 5`，`Android >= 2.3`。

你也可以根据项目要求自定义配置，修改 `edp-webserver-config.js`：

```javascript
// 给 `archer()` 增加参数
{
    location: /\.css($|\?)/, 
    handler: [
        autocss({
            'stylus': archer({
                support: [ 'ie 10', 'ios >= 6' ]
            })
        })
    ]
},
...
```

参数规则参考 [这里](https://github.com/ai/autoprefixer#browsers)。

最后感谢 [Autoprefixer](https://github.com/ai/autoprefixer) 让我少写这么多 `compatibility` 层代码。

## Stylus API

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
