async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end"); // 等待await的结果，调度到异步任务：微任务1
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout"); // 调度到异步任务：宏任务
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2"); // 调度到异步任务：微任务2
});

console.log("script end");
// 宏任务
// 微任务
// script start
// async1 start
// async2
// async1 end
// promise1
// promise2
// script end
// setTimeout

// 正确答案：先处理微任务，再处理宏任务。同步代码本质上是宏任务的一部分（T0级别）。宏任务T0部分->微任务->宏任务。
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// 课后
async function async1() {
  console.log("async1 start");
  await async2();
  await async3();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

async function async3() {
  console.log("async3");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");
