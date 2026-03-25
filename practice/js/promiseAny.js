// 1. 是否是可迭代对象
// 2. 如果是空数组直接resolve空数组
// 3. 按promises数组索引顺序返回结果
const myPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    // promises必须是可迭代对象
    if (promises === null || promises[Symbol.iterator] !== "function") {
      return reject(new TypeError("Promise.all expects an iterable"));
    }

    // 将promises转化为数组
    const promisesList = Array.from(promises);
    const len = promisesList.length;
    // 如果是空数组，返回
    if (len === 0) {
      reject(new AggregateError([], "All promises were rejected"));
    }

    // 结果数组和完成计数
    const res = [];
    let rejectedCount = 0;
    let isSettled = false; // 防止重复判断

    // 遍历数组
    promisesList.forEach((item, index) => {
      // 把非promise的item包装为promise
      const promise = Promise.resolve(item);

      promise
        .then((value) => {
          if (isSettled) return; // 防止重复判断

          isSettled = true;
          resolve(value);
        })
        .catch((reason) => {
          if (isSettled) return; // 防止重复判断

          res[index] = reason;
          rejectedCount++;

          // 全部完成
          if (rejectedCount === len) {
            isSettled = true;
            reject(new AggregateError(res, "All promises were rejected"));
          }
        });
    });
  });
};
