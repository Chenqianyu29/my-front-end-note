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
    const len = promisesList.length;

    // 如果是空数组直接resolve
    if (len === 0) {
      resolve([]);
    }

    const res = []; // 结果数组
    let isSettled = false; // 防止重复计算
    let completeCount = 0; // 已成功的数量

    promisesList.forEach((item, index) => {
      // 用promise包装一下
      const promise = Promise.resolve(item);

      promise
        .then((value) => {
          if (isSettled) return;

          res[index] = value; // 计入结果
          completeCount++; // 计数

          // 全部完成
          if (completeCount === len) {
            isSettled = true;
            resolve(res);
          }
        })
        .catch((reason) => {
          if (isSettled) return;

          isSettled = true;
          reject(reason);
        });
    });
  });
};
