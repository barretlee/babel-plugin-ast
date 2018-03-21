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

// 访问者模式
let indent = "";
traversal(ast, {
  enter: function(path) {
    console.log(indent, '-', path.node.type, path.node.name || '');
    indent += '  ';
  },
  exit: function(path) {
    indent = indent.slice(0, -2);
    console.log(indent, '-', path.node.type, path.node.name || '');
  }
});