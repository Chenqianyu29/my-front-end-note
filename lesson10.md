### 课后作业

1. 严格模式 use strict

- 严格模式（`"use strict"`）是 JavaScript 的一种**限制性执行模式**，从 ECMAScript 5 开始引入。它的核心目标是：**修复语言设计缺陷、禁止不安全操作、规范代码行为**，让 JS 代码从「灵活但混乱」走向「严谨且可控」。
- 启用方式：

```js
// 全局启用严格模式（整个脚本文件生效）
"use strict";

// 或在函数内部启用（仅该函数生效）
function strictFunc() {
  "use strict";
  // 函数内代码遵循严格模式
}
```

- 严格模式到底限制了什么？
  - **禁止使用「未声明的变量」**：杜绝全局污染。
  - **改变 this 指向规则：告别「飘忽不定」**：直接调用函数，函数的this在普通模式下指向全局对象，在严格模式下指向undefined。
  - **禁止删除变量/函数**：避免误操作：普通模式下，删除变量、函数或函数参数不会报错（但实际也删不掉）；严格模式下，这类操作会直接抛出语法错误，避免「误删关键资源」。
  - **禁止函数参数重名：杜绝参数覆盖**
  - **禁止八进制字面量：统一数字语法**：不支持0开头的八进制写法，推荐用 `0o` 前缀表示八进制。
  - **禁用with**：会修改作用域链，禁用。
  - **限制使用eval**：在严格模式下使用直接 eval（即不是通过其他名字引用的 eval，例如 const directEval = eval; directEval(...) 这种形式不会在严格模式下引入新的局部变量）时，其中声明的变量和函数不会污染当前作用域，而是在 eval 内部形成一个独立的作用域，但这并不能解决其核心的安全和性能问题。



2. 为什么TreeShaking只能依赖ESM？

- 因为ESM在编译时确定依赖关系，形成一个map，从而在压缩阶段删除未使用的模块
- CJS是同步执行的，运行时才知道依赖关系，所以不支持TreeShaking



3. CJS实现导入导出

- 导出

```js
// 添加属性
exports.add = function (a, b) {
  return a + b;
};

function minus(a, b) {
  return a - b;
}

function hello() {
  console.log("Hello from CommonJS");
}

const a = 1;
const b = 1;

// 直接导出对象
module.exports = {
  add: exports.add,
  hello,
  minus,
  a,
  b,
};
```

- 导入

```js
// 解构导入
const { hello, add, a, b, minus } = require("./nodeEnvCJS1.cjs");
console.log(hello, add, a, b, minus);
hello();
```



4. 动态import, const fileValue = await import(path) 值是什么？

- 是一个没有原型的模块对象，[Module: null prototype] { default: {}, 'module.exports': {} }
- default 是导出的默认值，如果同属默认导出，将放到对象里。
- 具名导出的变量，直接挂载到导出对象上。

```js
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

// [Module: null prototype] {
//   a: 1,
//   b: 2,
//   default: { add: [Function: add], minus: [Function: minus] }
// }
```



5. [什么是live bindings？CJS该怎么写](https://www.zyxy.net/archives/29414)

- 在 ESM 中，当模块被导入时，导出的值会被绑定到导入的地方。如果模块内部的状态发生变化，那么绑定的值也会随之更新。这种现象被称为“实时绑定”。

```js
// count.mjs
let count = 0;

function increment() {
  count++;
}

export { count, increment };
```

```js
// main.mjs
import { increment, count } from "./count.mjs";

console.log(count); // 0

increment();
console.log(count); // 1

increment();
console.log(count); // 2
```

这里我们可以看到，直接使用ESM导出的变量，它是能够给感知实时变化的，因为实际上ESM导出的值实际上是一个引用，这个引用指向模块内部的变量。

- 而CJS中是对导出的值进行复制，所以无法反应模块内部的变化。

```js
// countCJS.cjs
let count = 0;

function increment() {
  return count++;
}

function getCount() {
  return count;
}

module.exports = {
  count,
  increment,
  getCount,
};
```

```js
// mainCJS.cjs
const { increment, getCount, count } = require("./countCJS.cjs");

console.log(count); // 0

increment();
console.log(count); // 0

increment();
console.log(count); // 0
```

因为导出时是复制的值，所以在main中使用count，它的值是不会变化的

- 如果在CJS模块下，想要达到ESM模块的效果，该怎么办呢？答案是创建一个getCount函数，每次从countCJS取值。

```js
// countCJS.cjs
let count = 0;

function increment() {
  return count++;
}

function getCount() {
  return count;
}

module.exports = {
  increment,
  getCount,
};
```

```js
// mainCJS.cjs
const { increment, getCount } = require("./countCJS.cjs");

console.log(getCount()); // 0

increment();
console.log(getCount()); // 1

increment();
console.log(getCount()); // 2
```

