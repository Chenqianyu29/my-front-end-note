# 技术扩展

#### 什么是requestAnimationFrame？

- [requestAnimationFrame](https://juejin.cn/post/7431004279819288613)：window.requestAnimationFrame(),在浏览器下次重绘之前调用其回调函数。

- 调用的频率通常是与当前显示器的刷新率相匹配，**不会产生卡顿**。
- **页面不激活时会暂停渲染**。

#### 为什么使用transform而不是absolute

- transform：使用gpu创建图层，元素依然占据空间，从而减少重排

#### 什么是IntersectionObserver

- [IntersectionObserver](https://juejin.cn/post/7562359784278360106)：是浏览器原生提供的「异步交叉观察器」。

- 用来高效监听「目标元素与其祖先或视口是否相交」以及「相交比例变化」。
- **不阻塞主线程、无需手动节流、精度高、代码少**

#### 什么是双token？

- [双token](https://juejin.cn/post/7538357382452871194)是RBAC的一种实现方法。

- access token：访问令牌，cookie/pinia，用于访问受保护的API资源；生命周期短（通常15-30分钟）；**包含用户身份和权限信息**；频繁使用，安全风险相对较高。
- refresh token：刷新令牌，localStorage/HttpOnly Cookie，用于获取新的Access Token；生命周期长（通常7-30天）；使用频率低，安全风险相对较小；可以被撤销，强制登出，提供更好的安全控制。
- 运行流程（**无感刷新**）：登录成功返回两个 -> 请求拦截挂载access -> 401 -> 响应拦截器refresh
- 安全性平衡：短期Access Token降低泄露风险，长期Refresh Token减少用户重新登录
- 用户体验：无感知的Token续期，避免频繁登录
- 精细控制：可以撤销Refresh Token实现强制登出
- 性能优化：Access Token验证无需数据库查询，Refresh Token验证频率低

#### 什么是JWT

- JSON Web Token：是一种 Token 的实现标准和实现方式，用于用户身份认证和信息传递。
- 由Header头部、Payload荷载和Signature签名组成：JWT = Base64Url(Header) + "." + Base64Url(Payload) + "." + Base64Url(Signature)

#### 什么是RABC权限体系

- RBAC作为当前使用范围最广的一种权限设计模型，有3个基础组成部分，分别是：用户、角色和权限。RBAC通过定义角色的权限，并对用户授予某个角色从而来控制用户的权限，实现了用户和权限的逻辑分离（区别于ACL模型）。不同角色对应不同权限，用户可充当多个角色。

#### 了解setInterval和setTimeOut时间不准确的问题

1. 原因：500ms不准确

- JavaScript 是单线程的，如果事件循环中有其他任务阻塞了执行，定时器的回调可能会延迟执行。
- 定时器的回调函数过长，累积误差通常会导致下一个回调函数的执行比预期的要晚。

2. 解决办法：使用raf代替定时器，它会在浏览器下一次重绘之前执行。

#### 如何用状态机驱动UI

1. JQ react/vue 对比
2. 状态驱动UI的意思是不直接操作UI，而是根据状态进行渲染页面，数据发生变化时，页面进行更新。
3. 如果不使用这样做，会出现if-else if的层层嵌套，不利于维护。
4. 方法一：状态变量驱动
5. 方法二：定义状态字典驱动

#### [了解queueMicrotask](https://juejin.cn/post/7523259855789244456)

1. 当有紧急任务想在当前代码执行完、页面渲染前立即处理，用queueMicrotask(callback)把回调塞进微任务队列执行。

```js
console.log('主线程：现在轮到我表演了！');
queueMicrotask(() => {
  console.log('微任务：终于轮到我插队了！');
});
console.log('主线程：我还没结束呢！');
// 输出顺序：
// 1. 主线程：现在轮到我表演了！
// 2. 主线程：我还没结束呢！
// 3. 微任务：终于轮到我插队了！
```

2. 应用：

- 分批处理大批量数据
- 聊天应用中合并处理消息

3. 注意事项：微任务里的错误不会冒泡，记得try-catch。

#### 了解MutationObserver

> MDN：https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
>
> 稀土掘金：https://juejin.cn/post/7568350149086773302

1. 核心功能：异步监听DOM树的增删改查操作。所有 DOM 变化会先被记录，待其他脚本执行完成后统一触发回调，避免频繁操作导致的性能问题。
2. 基本用法：

- 创建观察器实例
  - mutationsList：包含所有 DOM 变化的 `MutationRecord` 对象数组，即监听到的有变化的 DOM 。
  - observer：观察器实例本身，可用于停止观察。

```js
const observer = new MutationObserver((mutationsList, observer) => {
  mutationsList.forEach((mutation) => {
    console.log("变化类型:", mutation.type);
    // 处理具体变化（如新增节点、属性修改等）
    if (mutation.type === "childList") {
      console.log("子节点被新增或删除");
    } else if (mutation.type === "attributes") {
      console.log(mutation.attributeName + " 属性被修改了");
    }
  });
});
```

- 观察器配置

```js
const config = {
  childList: true, // 监听子节点的变化
  attributes: true, // 监听属性的变化
  subtree: true, // 监听所有后代节点的变化
  attributeFilter: ["class", "id"], // 仅监听 class 和 id 属性，不指定则监听所有属性
  characterData:true, // 监听文本节点变化，输入中文字符时可能无法触发
};
```

- 启动观察
  - targetNode：需要监听的 DOM 节点。
  - config：观察器配置对象。

```js
const targetNode = document.getElementById("target");
observer.observe(targetNode, config);
```

- 停止观察

```js
observer.disconnect();
```

3. 和IntersectionObserver的区别

- `MutationObserver` 监听 DOM 变化，`IntersectionObserver` 监听元素可见性变化。

#### [用js运行机制解释promise](https://juejin.cn/post/7570897638441271323)

1. JavaScript 运行机制（事件循环 + 微任务/宏任务），then、catch、finally、queueMicrotask、MutationObserver -> 微任务，定时器 -> 宏任务

```js
const p = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        resolve();
    }, 1000);
});

p.then(() => console.log(3));
console.log(4);
```

上述代码输出为：

```
1
4
2
3
```

执行步骤：

1. 构造函数同步执行，输出1
2. 定时器调度到宏任务，等待
3. 输出4（p还处于pending状态，忽略then这一行）
4. 同步代码执行完毕后，执行定时器，输出2
5. promise resolve()，将then的回调调度到微任务
6. 输出3

#### var、let、const的异同点

1. 提升：在解析阶段其实都会变量提升。
2. 初始化：var声明的变量会初始化为undefined；const、let不会初始化。（let 和 const 也会发生变量提升，但在声明之前处于暂时性死区，无法访问。当执行到let声明语句后，如果没有赋值，变量的值会是 undefined。)
3. 暂时性死区：在let、const声明前使用变量会进入暂时性死区。
4. 重复声明：var可以重复声明变量；let、const不可以。
5. 可变性：var和let定义的变量可以重复赋值；const不可以修改引用。
6. 初始值：var、let声明变量时可不赋值；const声明变量时必须赋值。



#### 严格模式 use strict

1. 严格模式（`"use strict"`）是 JavaScript 的一种**限制性执行模式**，从 ECMAScript 5 开始引入。它的核心目标是：**修复语言设计缺陷、禁止不安全操作、规范代码行为**，让 JS 代码从「灵活但混乱」走向「严谨且可控」。

2. 启用方式：

```js
// 全局启用严格模式（整个脚本文件生效）
"use strict";

// 或在函数内部启用（仅该函数生效）
function strictFunc() {
  "use strict";
  // 函数内代码遵循严格模式
}
```

3. 严格模式到底限制了什么？

- **禁止使用「未声明的变量」**：杜绝全局污染。
- **改变 this 指向规则：告别「飘忽不定」**：直接调用函数，函数的this在普通模式下指向全局对象，在严格模式下指向undefined。
- **禁止删除变量/函数**：避免误操作：普通模式下，删除变量、函数或函数参数不会报错（但实际也删不掉）；严格模式下，这类操作会直接抛出语法错误，避免「误删关键资源」。
- **禁止函数参数重名：杜绝参数覆盖**
- **禁止八进制字面量：统一数字语法**：不支持0开头的八进制写法，推荐用 `0o` 前缀表示八进制。
- **禁用with**：会修改作用域链，禁用。
- **限制使用eval**：在严格模式下使用直接 eval（即不是通过其他名字引用的 eval，例如 const directEval = eval; directEval(...) 这种形式不会在严格模式下引入新的局部变量）时，其中声明的变量和函数不会污染当前作用域，而是在 eval 内部形成一个独立的作用域，但这并不能解决其核心的安全和性能问题。



#### 为什么TreeShaking只能依赖ESM？

1. 因为ESM在编译时确定依赖关系，形成一个map，从而在压缩阶段删除未使用的模块。
2. CJS是同步执行的，运行时才知道依赖关系，所以不支持TreeShaking



#### CJS实现导入导出

1. 导出

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

2. 导入

```js
// 解构导入
const { hello, add, a, b, minus } = require("./nodeEnvCJS1.cjs");
console.log(hello, add, a, b, minus);
hello();
```



#### 动态import, const fileValue = await import(path) 值是什么？

1. 是一个没有原型的模块对象，[Module: null prototype] { default: {}, 'module.exports': {} }

2. default 是导出的默认值，如果同时默认导出多个，将放到对象里。

3. 具名导出的变量和函数，直接挂载到导出对象上。

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



#### [什么是live bindings？CJS该怎么写](https://www.zyxy.net/archives/29414)

1. 在 ESM 中，当模块被导入时，导出的值会被绑定到导入的地方。如果模块内部的状态发生变化，那么绑定的值也会随之更新。这种现象被称为“实时绑定”。

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

> 这里我们可以看到，直接使用ESM导出的变量，它是能够给感知实时变化的，因为实际上ESM导出的值是一个引用，这个引用指向模块内部的变量。



2. 而CJS中是对导出的值进行复制，所以无法反应模块内部的变化。

```js
// countCJS.cjs
let count = 0;

function increment() {
  return count++;
}

module.exports = {
  count,
  increment,
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

> 因为导出时是复制的值，所以在main中使用count，它的值是不会变化的



3. 如果在CJS模块下，想要达到ESM模块的效果，该怎么办呢？答案是：创建一个getCount函数，每次从countCJS取值。

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

