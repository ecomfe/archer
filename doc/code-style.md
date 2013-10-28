# 代码风格约定

`stylus` 的语法自由度很高，代码风格很容易差异化。为了团队协作与代码的可读性，请在开发时遵守本约定。

## 命名规则

### 变量

**全局变量** 字母全小写，变量名用 `$` 开头，多个单词之间用 `_` (下划线) 分隔，如：

    $default_font_size

_说明：全局变量主要用于 **配置项**，增加 `$` 前缀易于区分。_

**局部变量** 字母全小写，多个单词之间用 `_` (下划线) 分隔，如：

    retina_dppx

_说明：局部变量以使用方便为准则，使用下划线分隔增加与 `CSS` 原生语法的区分度。_

### 函数

**函数名** 字母全小写，多个单词之间用 `_` (下划线) 分隔，如：

    px_to_rem

**内部函数** 前面增加 `_` (下划线) 前缀，表示其为 **私有**，禁止外部调用，如：

    _pos

### Mixin

**Mixin** 字母全小写，多个单词之间用 `-` (中线) 分隔，如：

    retina-image
    box-shadow

_说明：Mixin 使用中线分隔，是为了与 CSS 风格保持一致，方便对 CSS 进行增强。_

## 整体风格

### 缩进

在 `Archer` 开发中，**必须** 使用 `4` 空格缩进。

在基于 `Archer` 的项目中，**建议** 与项目中其它语言的缩进规则保持一致。

### 花括号

**建议** 不在 `stylus` 代码中使用 `{`, `}` (花括号)，减少冗余的行。

### 冒号与分号

**建议** 在给属性赋值、使用 Mixin 时使用 `:` (冒号) 分隔，但在语句结尾不使用 `;` (分号)，如：

    .box
        display: block
        size: 80px 60px
        box-shadow: 2px 2px 5px #999

### 使用函数

**建议** 在使用函数时将参数用 `(`, `)` (括号) 包起来，并将参数传入括号内，如：

    font-size: px_to_rem(12px)
    media_string = high_dpi($retina_dppx)

### 使用 Mixin

**建议** 在使用 Mixin 时不加括号，贴近原生 CSS 风格，如：

    position: left 10px, bottom 5px
    size: 20px

## 代码风格示例

    $font_size = 16px

    px_to_rem(pixel)
        unit(pixel / $font_size, rem)

    box-shadow()
        -webkit-box-shadow: arguments
        box-shadow: arguments

    .container
        padding: 10px 20px
        font-size: px_to_rem(12px)
        .box
            box-shadow: 10px 10px 5px #999
