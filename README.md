# 使用 babel 进行 AST 分析和处理

[PDF 下载](./docs/babel-loader-ast.pdf)

babel 插件的[官方手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)已经相当详实了，似乎没有太多必要再写一遍，不过为了小组分享，还是花了几个小时整理了一番。

![flow](https://img.alicdn.com/tfs/TB1UGCQeVOWBuNjy0FiXXXFxVXa-2066-1152.png_1200x1200.jpg)

针对上图中的 Parser、Traversal、Transform、Generator 分别写了几个简单的 Demo，跟着一步一步来，结合文档，应该可以完全掌握。

在做 AST 转换的时候，下面两个东西可以很大程度帮到你：

- [babylon AST 规范](https://github.com/babel/babylon/blob/master/ast/spec.md)
- [AST 在线分析工具](https://astexplorer.net/)
