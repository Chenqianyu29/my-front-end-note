console.log("主线程：现在轮到我表演了！");
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end"); // 微1
}
async function async2() {
  console.log("async2");
}
async1();
queueMicrotask(() => {
  console.log("微任务：终于轮到我插队了！"); // 微2
});
console.log("主线程：我还没结束呢！");

// 主线程：现在轮到我表演了！
// async1 start
// async2
// 主线程：我还没结束呢！
// async1 end
// 微任务：终于轮到我插队了！
