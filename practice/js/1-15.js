// 1. 创建一个有原型的对象
// 构造函数千万不能用箭头函数写！！！
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHello = function () {
//   console.log(this.name);
// };
// const max = new Person("max");
// max.sayHello();

// 2. 判断一个数字是否是偶数
// const isEven = (num) => {
//   return num % 2 === 0;
// };
// console.log(isEven(2));

// 3. 创建一个数组包含五个元素
// const arr = new Array(5).fill(0);
// console.log(arr);

// 4. 写一个函数计算两个数的和
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(1, 2));

// 5. 如何获取字符串的长度？
// const str = "hello world";
// const len = str.length;
// console.log(len);

// 6. 写一个for循环打印1到10的数字
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 7.  如何检查一个变量是否为undefined?
// const isUndefined = (constant) => {
//   if (typeof constant === "undefined") return true;
//   return false;
// };
// let a;
// console.log(isUndefined(a));

// 8. 写一个函数将华氏温度转换为摄氏温度？
// const turnToCelsius = (fahrenheit) => {
//   return (((fahrenheit - 32) * 5) / 9).toFixed(2);
// };
// console.log(turnToCelsius(100));

// 9. 如何创建一个对象并添加属性？
// const obj = {
//   name: "max",
// };
// obj.age = 18;
// console.log(obj);

// 10.  写一个函数检查字符串是否包含特定子字符串
// const isInclude = (str, subStr) => {
//   return str.includes(subStr);
// };
// console.log(isInclude("aabbssbbbs", "bb"));

// 11. 如何将字符串转换为数字？
// let num = Number("123");
// console.log(num);

// 12.  写一个函数返回数组中的最大值
const arr = [1, 3, 223, 41, 3, 5, 976];

const maxNum = (a) => {
  return Math.max(...a);
};
const max = maxNum(arr);
console.log(max);

// 13. 如何反转一个字符串？
// const str = "sjdiuosdhaskf";
// const reverseStr = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(reverseStr(str), str);

// 14. 写一个函数检查一个数是否为质数
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// 15. 如何获取当前日期和时间？
const now = new Date();
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
