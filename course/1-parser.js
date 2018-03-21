/**
 * @ref
 *   - https://github.com/babel/babel/tree/master/packages/babylon#options
 *   - https://github.com/babel/babylon/blob/master/ast/spec.md
 *   - https://github.com/estree/estree
 */ 

const fs = require('fs');
const path = require('path');
const babylon = require('babylon');

const code = `
function plus(a, b) {
  return a + b;
}
`;
const ast = babylon.parse(code, {
  sourceType: 'module'
});

fs.writeFileSync(
  path.join(__dirname, 'output/1-ast.json'), 
  JSON.stringify(ast, null, 2)
);

console.log(ast.program);