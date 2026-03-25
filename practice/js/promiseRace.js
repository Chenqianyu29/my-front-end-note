// 1. 是否是可迭代对象
// 2. 如果是空数组直接resolve空数组
// 3. 返回最先完成的那个结果
const myPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    // promises必须是可迭代对象
    if (promises === null || promises[Symbol.iterator] !== "function") {
      return reject(new TypeError("Promise.all expects an iterable"));
    }

    // 将promises转化为数组
    const promisesList = Array.from(promises);
    const len = promisesList.length;
    // 如果是空数组，永远pending
    if (len === 0) {
      return;
    }

    // 防止重复判断
    let isSettled = false;

    // 遍历数组
    promisesList.forEach((item) => {
      // 把非promise的item包装为promise
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
