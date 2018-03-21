const babylon = require('babylon');
const traversal = require('babel-traverse').default;

const code = `
function plus(a, b) {
  return a + b;
}
`;
const ast = babylon.parse(code, {
  sourceType: 'module'
});

// 进出节点
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