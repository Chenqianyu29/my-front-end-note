function debunce(fn, delay) {
  let timer = null; // 记录定时器
  return function (...args) {
    const context = this;
    if (timer) {
      // 如果已经开启定时器了，关闭它
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
      timer = null; // 结束时关闭定时器
    }, delay);
  };
}
