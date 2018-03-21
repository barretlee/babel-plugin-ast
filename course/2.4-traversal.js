const babylon = require('babylon');
const traversal = require('babel-traverse').default;

const code = `
function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
`;
const ast = babylon.parse(code, {
  sourceType: 'module'
});

// 局部遍历
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