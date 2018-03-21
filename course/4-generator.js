const babylon = require('babylon');
const traversal = require('babel-traverse').default;
const generator = require('babel-generator').default;
const types = require('babel-types');

const code = `
function plus(a, b) {
  return a + b;
}
`;
const ast = babylon.parse(code, {
  sourceType: 'module'
});

traversal(ast, {
  FunctionDeclaration: function (path) {
    path.traverse({
      Identifier: function (path) {
        if (types.isIdentifier(path.node, { name: "a" })) {
          // 节点替换
          path.replaceWith(types.Identifier('x'), path.node);
        }
      }
    });
  }
});

const changedCode = generator(ast).code;
console.log(changedCode);

