main();

function main() {
  console.log(user);
  var user = { name: "xiaoyao" };

  //   console.log(age); // 暂时性死区 TDZ
  //   let age = 33;

  sayHi();
  function sayHi() {
    console.log("hi");
  }
}

// 1. 创建全局执行上下文，Global Execution Cxt
// 2. 创建阶段：变量提升、作用域、this绑定
// Code、Heap（执行函数产生的对象）、Call Stack（压栈、主要的运行内存）
// 3. 执行：进入到main的执行空间=main的作用域=main Exe Context（main的执行上下文）
// 3.1 创建：同上
// 3.2 执行：
// 4. 出栈：先进后出
