// async function async2() {
//   console.log("async2");
// }
// console.log(async2());

let scroe = 0;
console.log(scroe || 2);
console.log(scroe ?? 2); // 把 0 和 undefined 排除出去
console.log(2 ?? scroe);
