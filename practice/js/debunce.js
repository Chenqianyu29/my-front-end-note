// 防抖
/**
 * 在执行间隔内多次触发，重新计时
 * @param {function} fn 需要防抖的函数
 * @param {number} delay 执行间隔
 */
function debunce(fn, delay) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) {
      // 定时器存在，关闭它
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
      timer = null; // 结束时关闭定时器
    }, delay);
  };
}
