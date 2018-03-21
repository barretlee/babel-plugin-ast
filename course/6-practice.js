// 练习：代码出现变量 barret 则引入 barret 这个包。

const babylon = require('babylon');
const traversal = require('babel-traverse').default;
const generator = require('babel-generator').default;
const template = require('babel-template');

const code = `
import { component, render, createElement } from 'rax';
import style from './style.css';

class Demo extends component() {
  render() {
    console.log(barret);
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

let inserted = false;
traversal(ast, {
  Identifier: function (path) {
    if (path.node.name === 'barret' && !inserted) {
      const programPath = path.findParent((path) => path.isProgram());
      const container = programPath.get('body.0');
      inserted = true;
      container.insertBefore(template(`import barret from 'barret';`, {
        sourceType: 'module'
      })(), container);
    }
  }
});

console.log(generator(ast).code);