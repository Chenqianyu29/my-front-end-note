// CJS ESM
// GC 垃圾回收
// 作用域有哪些？
// 1 global
// 2 module
// 3 block
// 4 function

// globalThis 浏览器和服务器环境的总称
// for
// for (var i = 0; i < 3; i++) setTimeout(() => console.log(i));
// for (let i = 0; i < 3; i++) setTimeout(() => console.log(i));

// var let const 编译阶段 提升变量名
// 提升 hoisting
// 初始化 Initialization let const不会初始化
let a;
var b;
console.log(a);
console.log(b);

// var shadowing = "hello";
// function shadowingFn() {
//   console.log("variable shadowing:", shadowing);
//   var shadowing = "world";
// }
// shadowingFn();

// var shadowing = "hello";
// function shadowingFn() {
//   console.log("variable shadowing:", shadowing);
// }
// shadowingFn();

// var shadowing = 'hello'
// function shadowingFn() {
// console.log('variable shadowing:',shadowing);
// shadowing = 'world'
// }
// shadowingFn();

// var shadowing = "hello";
// function shadowingFn() {
//   console.log("variable shadowing:", shadowing);
//   let shadowing = "world";
// }
// shadowingFn();

// freeze
// const obj = {
//   n: 1,
// };
// obj.n = 2;
// console.log(obj);
