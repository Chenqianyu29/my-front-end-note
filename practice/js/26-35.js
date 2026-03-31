// 26. 写一个函数复制对象的所有属性。
// const obj = {
//   name: "max",
//   age: 19,
//   hobbies: [1, 2, 3],
// };

// const copyObj = (obj) => {
//   //   return { ...obj };
//   //   return Object.assign({}, obj);
//   return JSON.parse(JSON.stringify(obj)); // 深拷贝，但是对丢失函数
// };
// console.log(copyObj(obj));

// 27. 如何获取对象的所有键
// const obj = {
//   name: "max",
//   age: 19,
//   hobbies: [1, 2, 3],
// };
// // for (let key in obj) {
// //   console.log(key);
// // }
// console.log(Object.keys(obj)); // 得到key的数组

// 28.  写一个函数检查对象是否有特定属性
// const isHaveKey = (obj, keyName) => {
//   //   for (let key in obj) {
//   //     if (key === keyName) {
//   //       return true;
//   //     }
//   //   }
//   //   return false;
//   //   return obj.hasOwnProperty(keyName);
//   return keyName in obj;
// };
// console.log(isHaveKey(obj, "age"));

// 29. 如何合并两个对象？
// const obj1 = {
//   name: "max",
//   age: 19,
//   hobbies: [1, 2, 3],
// };
// const obj2 = {
//   name: "jone",
//   address: "beijing",
// };

// const assign = (obj1, obj2) => {
//   //   return Object.assign(obj1, obj2);
//   return { ...obj1, ...obj2 };
// };
// console.log(assign(obj1, obj2));

// 30. 写一个函数计算对象中属性的数量
// const countKeys = (obj) => {
//   return Object.keys(obj).length;
// };
// console.log(countKeys(obj1));

// 31. 如何删除对象的某个属性？
// const removeKey = (obj, prop) => {
//   delete obj[prop];
//   return obj;
// };
// console.log(removeKey(obj1, "hobbies"));

// 32. 写一个函数将对象转换为数组
// const objectToArray = (obj) => {
//   return Object.entries(obj);
// };
// console.log(objectToArray(obj1));

// 33.  如何检查一个值是否为对象？
// const isObject = (prop) => {
//   //   return Object.prototype.toString.call(prop) === "[object Object]";
//   return typeof prop === "object" && prop !== null && !Array.isArray(prop);
// };
// console.log(isObject(obj1.hobbies));

// 34. 写一个函数反转对象的键值对
// const reverseKeyValue = (obj) => {
//   const newObj = {};
//   for (let key in obj) {
//     newObj[obj[key]] = key;
//   }
//   return newObj;
// };
// console.log(reverseKeyValue(obj1));

// 35. 如何创建一个具有原型的对象？
// let objProto = Object.create(obj1);
