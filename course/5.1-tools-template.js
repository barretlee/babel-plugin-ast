// template

const types = require('babel-types');
function gAST_types() {
  const ast = types.returnStatement(
    types.binaryExpression(
      '+',
      types.identifier('x'),
      types.identifier('y')
    )
  );
  return ast;
}

const template = require('babel-template');
function gAST_template() {
  const tpl = template(`return VER + y;`);
  const ast = tpl({
    VER: types.identifier('x')
  });
  return ast;
}

// const generator = require('babel-generator').default;
// console.log(generator(gAST_types()).code);