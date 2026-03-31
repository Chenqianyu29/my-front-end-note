// 46. 写一个函数实现防抖（debounce）

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
      timer = null;
    }, delay);
  };
}

// 47. 写一个函数实现节流（throttle）
function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const context = this;
    const now = new Date();
    if (now - lastTime >= delay) {
      fn.apply(context, args);
      lastTime = now;
    }
  };
}
