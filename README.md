# 提醒

因 `archer` 的名字已被公司其他项目占用，移动端框架改名为 `rider`，请移步这里：

### [https://github.com/ecomfe/rider](https://github.com/ecomfe/rider)

# archer

`Archer` 是一个面向 **移动端** 的、基于 `stylus` 的样式工具库。

`Archer` 起源于 `est` 项目，专注于 **纯移动端** 浏览器的样式展示。
如有 **桌面端** 需求，请使用 [`est`](http://ecomfe.github.io/est/)。

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
@import 'archer'

normalize()
```

### 编译

`edp` 的 `stylus` 编译功能正在开发中，将在近期支持。

## 文档

- [API](doc/api.md)
    - [Normalize](doc/api.md#normalize)
    - [Functions](doc/api.md#functions)
    - [Utils](doc/api.md#utils)
    - [Animate](doc/api.md#animate)
- [兼容性](doc/compatibility.md)
- [代码风格](doc/code-style.md)
