# 兼容性

## 使用

通过 `Archer` 写样式时，只用按照 **规范** 写法即可，会自动处理（大部分）浏览器兼容性问题。

**source:**

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

**output:**

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

## 配置

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

## 感谢

感谢 [Autoprefixer](https://github.com/ai/autoprefixer) 项目，让我少写这么多 `compatibility` 层代码。
