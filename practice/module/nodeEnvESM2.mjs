import * as obj from "./nodeEnvESM1.mjs";
const { add, a } = obj;
console.log(add, a);

// const res = await fetch("/api/test"); // 模块进入pending状态，不阻塞主线程，不阻塞程序执行
// const data = res.data;

let config = {};
// let path = ENV === "production" ? "1.js" : "2.js";
let path = "./nodeEnvESM1.mjs";
try {
  const fileValue = await import(path); // promise
  console.log(fileValue);
} catch (error) {
  throw error;
}
