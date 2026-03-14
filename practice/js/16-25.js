// 16. 写一个函数移除数组中的重复元素
const filter = (arr) => {
  //   return [...new Set(arr)];
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
console.log(filter([482, 55, 8, 5, 66, 88, 55, 482, 631]));

// 17. 如何将两个数组合并？
// const contact = (arr1, arr2) => {
//   //   return [...arr1, ...arr2];
//   return arr1.concat(arr2);
// };
// console.log(contact([1, 2, 3], [2, 4, 5]));

// 18. 写一个函数计算数组中所有数字的平均值
// const avg = (arr) => {
//   //   let sum = 0;
//   const len = arr.length;
//   //   for (let i = 0; i < len; i++) {
//   //     sum += arr[i];
//   //   }
//   const sum = arr.reduce((a, c) => a + c);
//   return (sum / len).toFixed(2);
// };

// console.log(avg([1, 2, 3, 4]));

// 19. 如何对数组进行排序？
// const sort = (arr) => {
//   //   return arr.sort((a, b) => a - b); // 从小到大
//   return arr.sort((a, b) => b - a); // 从大到小
// };

// console.log(sort([2, 1, 8, 5, 7, 3, 6]));

// 20. 写一个函数查找数组中特定元素的索引
// const arr = [1, 2, 3, 5, 2];
// const findIndex = (arr, item) => {
//   // Array.prototype.findIndex 需要接收一个回调函数作为参数
//   // 如果要查找特定元素，应该使用 indexOf，或者传入一个比较函数
//   return arr.findIndex((element) => element === item);
//   //   return arr.indexOf(item);
// };
// console.log(findIndex(arr, 2));

// 21.如何过滤数组中的偶数？
// const filterEven = (arr) => {
//   return arr.filter((item) => item % 2 !== 0);
// };
// console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 22. 写一个函数将数组中的每个元素乘以2
// const double = (arr) => {
//   return arr.map((item) => item * 2);
// };
// console.log(double([1, 2, 3]));

// 23. 如何检查数组中是否包含某个元素？
// const isInclude = (arr, a) => {
//   return arr.includes(a);
// };
// console.log(isInclude([1, 2, 3], 4));

// 24. 写一个函数将二维数组扁平化
const flattenArray = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = [...res, ...item];
    } else {
      res.push(item);
    }
  });
  return res;
  //   return arr.flat();
};
console.log(flattenArray([[1, 2], [3, 4], 5]));

// 25. 如何获取数组的最后一个元素？
const last = (arr) => {
  return arr[arr.length - 1];
};
console.log(last([1, 2, 3]));
