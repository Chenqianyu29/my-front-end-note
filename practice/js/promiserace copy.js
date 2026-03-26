// 1. 是否是可迭代对象
// 2. 如果是空数组直接resolve空数组
// 3. 按promises数组索引顺序返回结果
const myPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    // 是否是可迭代对象
    if (promises === null || promises[Symbol.iterator] !== "function") {
      return reject(new TypeError("Promise.all expects an iterable"));
    }

    // 转化为数组
    const promisesList = Array.from(promises);

    // 如果是空数组直接返回，永远pending
    if (len === 0) {
      return;
    }

    let isSettled = false; // 防止重复计算

    promisesList.forEach((item) => {
      // 用promise包装一下
      const promise = Promise.resolve(item);

      promise
        .then((value) => {
          if (isSettled) return;

          isSettled = true;
          resolve(value);
        })
        .catch((reason) => {
          if (isSettled) return;

          isSettled = true;
          reject(reason);
        });
    });
  });
};
