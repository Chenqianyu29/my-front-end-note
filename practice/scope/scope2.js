// function lexicalFn() {
//   console.log("问题1：", lexicalFn2Val);
// }

// function lexicalFn2() {
//   let lexicalFn2Val = "lexicalFn2Val";
//   lexicalFn();
// }
// lexicalFn2();

// 词法作用域和闭包
// 词法作用域是规则
// 闭包对抗GC

// function lexicalFn2() {
//   let lexicalFn2Val = "lexicalFn2Val";
//   function lexicalFn() {
//     console.log("问题1：", lexicalFn2Val);
//   }
//   lexicalFn();
// }
// lexicalFn2();

// function lexicalFn(lexicalFn2Val) {
//   console.log("问题1：", lexicalFn2Val);
// }

// function lexicalFn2() {
//   let lexicalFn2Val = "lexicalFn2Val";
//   lexicalFn(lexicalFn2Val);
// }
// lexicalFn2();

// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }

//   return inner;
// }

// const result = outer();
// result(); // a持久存在，持久闭包
// outer()(); // 短暂闭包
// 并不所有的闭包导致内存泄露

// function make() {
//   let n = 0;
//   return () => ++n;
// }
// const c1 = make();
// const c2 = make(); // n隔离

// 闭包作用
// 1. 变量私有化
// function outer() {
//   let count = 0;
//   function add() {
//     return count++;
//   }
//   function getter() {
//     return count;
//   }
//   return { add, getter };
// }
// 柯里化
// outer()()

// 偏函数
// const partialFun =
//   (fn, ...preset) =>
//   (...rest) =>
//     fn(...preset, ...rest);

function partialFun(fn, ...preset) {
  return function (...rest) {
    return fn(...preset, ...rest);
  };
}

// 使用偏函数实现baseUrl+path
