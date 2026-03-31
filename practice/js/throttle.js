// 节流
/**
 * 在执行间隔内，函数只执行一次
 * @param {function} fn 需要节流的函数
 * @param {number} delay 执行间隔
 */
function throttle(fn, delay) {
  let lastTime = 0; // 记录上次触发的时间
  return function (...args) {
    const context = this;
    const now = new Date(); // 当前时间
    if (now - lastTime >= delay) {
      // 可以执行
      lastTime = now; // 更新触发时间
      fn.apply(context, args); // 监听器调用时this可能会指向window或者dom
    }
  };
}
