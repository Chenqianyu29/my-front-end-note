import { increment, getCount, count } from "./count.mjs";

console.log(count); // 0
// console.log(getCount()); // 0

increment();
console.log(count); // 1
// console.log(getCount()); // 1

increment();
console.log(count); // 2
// console.log(getCount()); // 2
