// 课后
async function async1() {
  console.log("async1 start");
  await async2();
  await async3(); // 微1
  console.log("async1 end"); // 微3
}

async function async2() {
  console.log("async2");
}

async function async3() {
  console.log("async3");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout"); // 宏1
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2"); // 微2
});

console.log("script end");

// script start
// async1 start
// async2
// promise1
// script end
// async3
// promise2
// async1 end
// setTimeout
