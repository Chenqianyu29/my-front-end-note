// ES6后
// 1. 'use strict'
// 2. 编译时，在运行之前（cjs在运行时）
// 3. 为什么TreeShaking只能依赖ESM？
// 4. node在当时如何实现模块化？立即执行函数

function add(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}

const a = 1;
const b = 2;
export { a, b };
export default { add, minus };

// export default const a = 1 不能接收变量声明
// export default function addFun() {} 函数或类的声明可以接收
