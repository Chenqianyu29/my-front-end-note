// 46. 防抖
function debunce(fn, delay) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.call(context, args);
      timer = null;
    }, delay);
  };
}

// 47. 节流
function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const context = this;
    const now = new Date();
    if (now - lastTime >= delay) {
      fn.call(context, args);
      lastTime = now;
    }
  };
}

// 48. 深克隆
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item));
  }
  if (typeof obj === "object") {
    const cloned = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]); // 如果属性值又是对象，需要递归
      }
    }
    return cloned;
  }
}

const obj1 = {
  a: 1,
  b: {
    c: 2,
  },
};
const obj2 = deepClone(obj1);
obj2.b.c = 3;
console.log(obj1);
console.log(obj2);
