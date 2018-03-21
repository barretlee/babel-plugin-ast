const babylon = require('babylon');
const traversal = require('babel-traverse').default;

const code = `
import { component, render, createElement } from 'rax';
import style from './style.css';

class Demo extends component() {
  render() {
    return (
      <View>Hello World</View>
    )
  }
}
`;

const ast = babylon.parse(code, {
  sourceType: 'module',
  plugins: ['jsx']
});

traversal(ast, {
  JSXElement: function (path) {
    const node = path.findParent((path) => path.isFunctionParent());
    console.log(node.type);
  }
});
