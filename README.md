# 使用 babel 进行 AST 分析和处理

[PDF 下载](./docs/babel-loader-ast.pdf)

babel 插件的[官方手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)已经相当详实了，似乎没有太多必要再写一遍，不过为了小组分享，还是花了几个小时整理了一番。

![flow](https://img.alicdn.com/tfs/TB1UGCQeVOWBuNjy0FiXXXFxVXa-2066-1152.png_1200x1200.jpg)

针对上图中的 Parser、Traversal、Transform、Generator 分别写了几个简单的 Demo，跟着一步一步来，结合文档，应该可以完全掌握。


### Parser

```js
const babylon = require('babylon');

const code = `
function plus(a, b) {
  return a + b;
}
`;
const ast = babylon.parse(code, {
  sourceType: 'module'
});
```

### traversal

遍历节点，筛选遍历

```js
traversal(ast, {
  Identifier: function (path) {
    console.log(path.node.name);
  }
});
```

进出节点

```js
traversal(ast, {
  Identifier: {
    enter: function (path) {
      console.log(path.node.name, 'enter');
    }, 
    exit: function (path) {
      console.log(path.node.name, 'exit\n');
    }
  }
});
```

局部遍历

```js
traversal(ast, {
  FunctionDeclaration: function (path) {
    if (path.node.id.name !== 'plus') return;
    path.traverse({
      Identifier: {
        enter: function (path) {
          console.log(path.node.name, 'enter');
        }, 
        exit: function (path) {
          console.log(path.node.name, 'exit\n');
        }
      }
    });
  }
});
```

### transform

```js
traversal(ast, {
  FunctionDeclaration: function (path) {
    path.traverse({
      Identifier: {
        enter: function (path) {
          if (types.isIdentifier(path.node, { name: "a" })) {
            // 节点替换
            path.replaceWith(types.Identifier('x'), path.node);
          }
        },
        exit: function (path) {
          console.log(path.node.name);
        }
      }
    });
  }
});
```

### 工具

在做 AST 转换的时候，下面两个东西可以很大程度帮到你：

- [babylon AST 规范](https://github.com/babel/babylon/blob/master/ast/spec.md)
- [AST 在线分析工具](https://astexplorer.net/)
