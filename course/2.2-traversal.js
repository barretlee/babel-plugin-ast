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

// 遍历节点，筛选遍历
traversal(ast, {
  Identifier: function (path) {
    console.log(path.node.name);
  }
});