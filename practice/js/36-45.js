// 36. 写一个函数统计字符串中每个字符的出现次数
// const countChart = (str) => {
//   const count = {};
//   for (let c of str) {
//     count[c] = (count[c] || 0) + 1;
//   }
//   return count;
// };
// console.log(countChart("sahffisafkjsaas"));

// 37. 如何将字符串的首字母大写？
// const str = "sdfaskfsd";
// const captial = (str) => {
//   const s = str[0].toUpperCase();
//   return s + str.slice(1);
// };
// console.log(captial(str));

// 38.  写一个函数检查字符串是否为回文
// 双指针
// const isLoop = (str) => {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

// console.log(isLoop("dafaafad"));

// 39. 如何替换字符串中的所有空格为下划线
// const to_ = (str) => {
//   //   return str.replace(" ", "_");
//   return str.split(" ").join("_");
// };
// console.log(to_("hello world"));

// 40. 写一个函数提取字符串中的所有数字
// const findNum = (str) => {
//   const num = [];
//   for (let c of str) {
//     if (!Number.isNaN(+c)) {
//       num.push(+c);
//     }
//   }
//   return num;
// };
// console.log(findNum("as244fds43e1j3j5"));

// 41. 如何截取字符串的前n个字符？
// const slice = (str, n) => {
//   return str.slice(0, n);
// };
// console.log(slice("dadasfefw", 4));

// 42. 写一个函数将字符串转换为驼峰命名法
// const toCamelCase = (str) => {
//   let result = "";
//   let capitalizeNext = false;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     // 如果遇到分隔符，标记下一个有效字符需要大写
//     if (char === "-" || char === "_" || char === " ") {
//       // 只有在 result 已经有字符的情况下才大写，防止以分隔符开头的字符串首字母被大写
//       if (result.length > 0) {
//         capitalizeNext = true;
//       }
//     } else {
//       // 如果前面遇到了分隔符，当前字符转大写
//       if (capitalizeNext) {
//         result += char.toUpperCase();
//         capitalizeNext = false; // 状态重置
//       } else {
//         // 首字母强转小写，其余保持原样
//         result += result.length === 0 ? char.toLowerCase() : char;
//       }
//     }
//   }

//   return result;
// };

// console.log(toCamelCase("get-element-by-id")); // 输出: getElementById
// console.log(toCamelCase("user_name"));         // 输出: userName
// console.log(toCamelCase(" _hello-world "));    // 输出: helloWorld

// 43. 如何计算字符串中单词的数量
// const countWords = (str) => {
//   return str.trim().split(" ").length;
// };

// console.log(countWords(" hello world "));

// 44.  写一个函数移除字符串两端的空白字符
// str.trim();

// 45. 如何检查字符串是否以特定前缀开始？
// const start = (str, s) => {
//   //   return str.startsWith(s);
//   return str.slice(0, s.length) === s;
// };
// console.log(start("sadeeq", "de"));
